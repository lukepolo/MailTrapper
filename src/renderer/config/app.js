let config = {
    /*
     |--------------------------------------------------------------------------
     | Application
     |--------------------------------------------------------------------------
     | By turning on debug you will see debug messages while running the app.
     |
     */
    debug: _.get(global.env, "APP_DEBUG", true) === "true" ? true : false
};

module.exports = config;
