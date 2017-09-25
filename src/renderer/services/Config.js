const fs = require("fs");
require("dotenv").config();
const _ = require("lodash");
const inversify = require("inversify");

global.env = process.env;

class Config {
    constructor() {
        this._config = {};

        const configDirectory = `${__dirname}/../config/`;
        _.each(fs.readdirSync(configDirectory), file => {
            this._config[file.replace(".js", "")] = require(configDirectory +
                file);
        });
    }

    get(key, defaultValue) {
        return _.get(this._config, key, defaultValue);
    }

    set(key, value) {
        return _.set(this._config, key, value);
    }
}

inversify.decorate(inversify.injectable(), Config);

module.exports = Config;
