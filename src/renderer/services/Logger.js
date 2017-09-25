require("colors");
_ = require("lodash");
const inversify = require("inversify");
const { stringConcat, isString, isFunction } = require("ui-library-utilities");

const defaults = {
    success: "green",
    error: "red",
    info: "magenta",
    important: "yellow",
    debug: "cyan"
};

class Logger {
    constructor(config) {
        this._base = stringConcat("");
        this._logger = console.log;
        this._debug = config.get("app.debug");
    }

    prefix(base) {
        if (base === undefined) {
            base = "";
        }

        this._base = stringConcat(
            !isString(base)
                ? !isFunction(base.toString) ? base.toString() : ""
                : base
        );

        return this;
    }

    success(data) {
        this._logger(`${this._base(this.filter(data))}`[defaults["success"]]);
    }

    error(data) {
        let logLineDetails = new Error().stack.split("at ")[2].trim();
        this._logger(
            `${this._base(this.filter(data))} : \n    ${logLineDetails} `[
                defaults["error"]
            ]
        );
    }

    info(data) {
        this._logger(`${this._base(this.filter(data))}`[defaults["info"]]);
    }

    important(data) {
        this._logger(`${this._base(this.filter(data))}`[defaults["important"]]);
    }

    debug(data) {
        if (this._debug) {
            this._logger(`${this._base(this.filter(data))}`[defaults["debug"]]);
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
module.exports = Logger;
