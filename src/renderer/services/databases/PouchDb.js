import fs from 'fs';
require("reflect-metadata");
const inversify = require("inversify");


class PouchDb {
    constructor(config) {

        let databaseDirectory = config.get('database.connections.pouchdb.path')
        if (!fs.existsSync(databaseDirectory)) {
            fs.mkdirSync(databaseDirectory);
        }

        this._pouchDb = require('pouchdb').defaults({
            prefix: `${databaseDirectory}/`
        });

        this._pouchDb.plugin(require('pouchdb-find'));
    }

    connect(database) {
        return new this._pouchDb(database);
    }
}

inversify.decorate(inversify.injectable(), PouchDb);
inversify.decorate(inversify.inject(Symbol.for("config")), PouchDb, 0);

export default PouchDb;