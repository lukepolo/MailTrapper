const _ = require("lodash");
const inversify = require("inversify");
require("reflect-metadata");

const defaults = {
  success: "green",
  error: "red",
  info: "magenta",
  important: "yellow",
  debug: "cyan"
};

class Logger {
  constructor(config) {
    this._logger = console.log;
    this._debug = config.get("app.debug");
  }

  success(data) {
    this._logger(`${data}`[defaults["success"]]);
  }

  error(data) {
    let logLineDetails = new Error().stack.split("at ")[2].trim();
    this._logger(`${data} : \n    ${logLineDetails} `[defaults["error"]]);
  }

  info(data) {
    this._logger(`${data}`[defaults["info"]]);
  }

  important(data) {
    this._logger(`${data}`[defaults["important"]]);
  }

  debug(data) {
    if (this._debug) {
      this._logger(`${data}`[defaults["debug"]]);
    }
  }

  filter(data) {
    if (_.isObject(data)) {
      return JSON.stringify(data);
    }
    return data;
  }
}

inversify.decorate(inversify.injectable(), Logger);
inversify.decorate(inversify.inject(Symbol.for("config")), Logger, 0);

export default Logger;
