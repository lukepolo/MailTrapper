import services from "./services";
const inversify = require("inversify");
const container = new inversify.Container();

container.bind(Symbol.for("config")).to(services.config).inSingletonScope();

container.bind(Symbol.for("logger")).to(services.logger).inSingletonScope();

container
  .bind(Symbol.for("smtp-server"))
  .to(services.smtpServer)
  .inSingletonScope();

container.bind(Symbol.for("database")).to(services.databaseManager);

_.each(services.databases, (databaseClass, database) => {
  container.bind(Symbol.for(database)).to(databaseClass);
});

global.container = container;
