require("reflect-metadata");
const inversify = require("inversify");

class DatabaseManager {
  constructor(config) {
    this._connections = {};
    this._connection = null;
    this._database = container.get(Symbol.for(config.get("database.driver")));
  }

  connect(database) {
    this._connection = this._database.connect(database);
    this._connections[database] = this._connection;
    return this._connection;
  }

  connection(connection) {
    this._connection = _.get(this._connections, connection);
    if (_.isEmpty(this._connection)) {
      throw new Error(`Connection (${connection}) does not exist`);
    }
    return this._connection;
  }
}

inversify.decorate(inversify.injectable(), DatabaseManager);
inversify.decorate(inversify.inject(Symbol.for("config")), DatabaseManager, 0);

export default DatabaseManager;
