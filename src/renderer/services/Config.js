const _ = require("lodash");
require("reflect-metadata");
const inversify = require("inversify");

class Config {
  constructor() {
    this._config = {
      database: require("./../config/database").default,
      "smtp-server": require("./../config/smtp-server").default
    };
  }

  get(key, defaultValue) {
    return _.get(this._config, key, defaultValue);
  }

  set(key, value) {
    return _.set(this._config, key, value);
  }
}

inversify.decorate(inversify.injectable(), Config);

export default Config;
