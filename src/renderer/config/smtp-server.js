let config = {
    /*
     |--------------------------------------------------------------------------
     | Auth
     |--------------------------------------------------------------------------
     | If the smtp server that your connecting to does not require
     | auth make sure to set this to true.
     |
     */

    auth_optional: !(_.get(global.env, "SMTP_SERVER_REQUIRES_AUTH", false) ===
    "true"
        ? true
        : false),

    /*
    |--------------------------------------------------------------------------
    | SMTP Credentials
    |--------------------------------------------------------------------------
    | These are the credentials that incoming request must send
    |
    */
    auth: {
        user: _.get(global.env, "SMTP_SERVER_AUTH_USER"),
        password: _.get(global.env, "SMTP_SERVER_AUTH_PASSWORD")
    },

    /*
    |--------------------------------------------------------------------------
    | SMTP Server Secure
    |--------------------------------------------------------------------------
    | Provides the server with a secure connection and should
    | be used in production!
    |
    | SSL Key and Cert paths are REQUIRED when setting to true
    |
    */

    secure:
        _.get(global.env, "SMTP_SERVER_SECURE", false) === "true"
            ? true
            : false,

    // These are required when setting the server to secure mode!
    ssl_key_path: _.get(global.env, "SMTP_SERVER_SSL_KEY_PATH"),
    ssl_cert_path: _.get(global.env, "SMTP_SERVER_SSL_CERT_PATH")
};

module.exports = config;
