require("reflect-metadata");
const inversify = require("inversify");
const SMTPServer = require("smtp-server").SMTPServer;
const simpleParser = require("mailparser").simpleParser;

class SmtpServer {
  constructor(config) {
    this._config = config;
    this._logger = console.info;

    this._smtpConfig = {
      secure: false,
      authOptional: false,
      disabledCommands: ["STARTTLS"],
      onData: (stream, session, callback) => {
        this.receivedEmail(stream, session, callback);
      },
      onAuth(auth, session, callback) {
        database
          .connection("traps")
          .createIndex({
            index: { fields: ["username"] }
          })
          .then(() => {
            if (auth.username.length === 0 || !auth.password.length === 0) {
              return callback(new Error("Invalid username or password"));
            }
            database.connection("traps").find({
              selector: {
                username: auth.username
              },
              limit: 1
            },
            (error, results) => {
              if (error) {
                return callback(new Error("We had a system error"));
              }

              if (!results.docs.length) {
                return callback(new Error("Invalid username or password"));
              }

              if (results.docs[0].password !== auth.password) {
                return callback(new Error("Invalid username or password"));
              }

              return callback(null, { user: results.docs[0] });
            });
          });
      }
    };
  }

  start() {
    new SMTPServer(this._smtpConfig).listen(
      this._config.get("smtp-server.port")
    );
  }

  parseClient(session) {
    return `${session.clientHostname === `[${session.remoteAddress}]`
      ? session.remoteAddress
      : `${session.clientHostname} ${session.remoteAddress}`}`;
  }

  receivedEmail(stream, session, callback) {
    this._logger(`received message from ${this.parseClient(session)}`);

    let recipients = [];
    let fromAddress = session.envelope.mailFrom.address;

    session.envelope.rcptTo.forEach(recipient => {
      recipients.push(recipient.address);
    });

    simpleParser(stream, (err, mail) => {
      if (err) {
        this._logger(`Error: ${err}`);
        callback(`Error: ${err}`);
      }

      mail.to = recipients.join(", ");
      mail.from = fromAddress;

      mail = {
        mail: mail,
        to: mail.to,
        from: mail.from,
        trap: session.user._id,
        date: mail.date
      };

      database
        .connection("messages")
        .post(mail)
        .then(result => {
          mail._id = result.id;
          VueStore.commit("traps/messages/add", mail);
        });

      callback();
    });
  }
}

inversify.decorate(inversify.injectable(), SmtpServer);
inversify.decorate(inversify.inject(Symbol.for("config")), SmtpServer, 0);

export default SmtpServer;
