import Config from './Config';
import Logger from './Logger';
import SmtpServer from './SmtpServer';

import databases from './databases';
import DatabaseManager from './DatabaseManager';

let services = {
    config : Config,
    logger: Logger,
    smtpServer: SmtpServer,

    databases : databases,
    databaseManager : DatabaseManager
}

export default services;