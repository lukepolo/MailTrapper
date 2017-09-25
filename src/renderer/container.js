require("reflect-metadata");

const services = require("./services");
const inversify = require("inversify");
const container = new inversify.Container();

container
    .bind(Symbol.for("config"))
    .to(services.config)
    .inSingletonScope();

container
    .bind(Symbol.for("smtp-server"))
    .to(services.smtpServer)
    .inSingletonScope();

container
    .bind(Symbol.for("database-connection"))
    .to(services.smtpServer);

global.container = container;