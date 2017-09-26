/*
 |--------------------------------------------------------------------------
 | Setting up globals for the app
 |--------------------------------------------------------------------------
 |
 */

global._ = require("lodash");
global.moment = require("moment-timezone");

/*
 |--------------------------------------------------------------------------
 | Setup the IOC container
 |--------------------------------------------------------------------------
 |
 */
require("./container");

/*
 |--------------------------------------------------------------------------
 | Styles
 |--------------------------------------------------------------------------
 |
 */

require("./assets/styles/app.scss");

// Font awesome PRO
require("./assets/font-awesome/fontawesome");
require("./assets/font-awesome/packs/light");

/*
 |--------------------------------------------------------------------------
 | Setup the database connections
 |--------------------------------------------------------------------------
 |
 */
global.database = container.get(Symbol.for("database"));
database.connect("traps");
database.connect("messages");

/*
 |--------------------------------------------------------------------------
 | Starting the SMTP Server
 |--------------------------------------------------------------------------
 |
 */
container.get(Symbol.for("smtp-server")).start();

/*
 |--------------------------------------------------------------------------
 | Starting up the timezone
 |--------------------------------------------------------------------------
 |
 */

require("moment-precise-range-plugin");
moment.tz.setDefault("UTC");
