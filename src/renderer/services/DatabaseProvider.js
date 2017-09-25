const fs = require("fs");
require("dotenv").config();
const _ = require("lodash");
const inversify = require("inversify");
const databaseDirectory = path.join(remote.app.getPath('userData'), '/db');
global.env = process.env;

class DatabaseProvider {
    constructor(config) {

        console.info(config)

        if (!fs.existsSync(databaseDirectory)){
            fs.mkdirSync(databaseDirectory);
        }

        const PouchDB = require('pouchdb').defaults({
            prefix: `${databaseDirectory}/`
        });
        PouchDB.plugin(require('pouchdb-find'));

        global.mailDb  = new PouchDB('mail');
        global.mailBoxesDb = new PouchDB('mailboxes');
    }

    connect() {

    }

}

inversify.decorate(inversify.injectable(), DatabaseProvider);
inversify.decorate(inversify.inject(Symbol.for("config")), DatabaseProvider, 0);

module.exports = DatabaseProvider;
