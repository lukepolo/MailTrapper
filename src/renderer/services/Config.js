const fs = require("fs");
const _ = require("lodash");

const inversify = require("inversify");
require("reflect-metadata");

class Config {
    constructor() {
        this._config = {};
        const configDirectory = `${__dirname}/../config/`;
        _.each(fs.readdirSync(configDirectory), file => {
            this._config[file.replace(".js", "")] = require('./../config/'+file).default;
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

export default Config;
