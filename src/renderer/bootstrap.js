/*
 |--------------------------------------------------------------------------
 | Setup the IOC container
 |--------------------------------------------------------------------------
 |
 */
require('./container')

/*
 |--------------------------------------------------------------------------
 | Styles
 |--------------------------------------------------------------------------
 |
 */

require('./assets/styles/app.scss')

// Font awesome PRO
require('./assets/font-awesome/fontawesome');
require('./assets/font-awesome/packs/light');

/*
 |--------------------------------------------------------------------------
 | Setup the database connections
 |--------------------------------------------------------------------------
 |
 */
global.mailDb = container.get(Symbol.for('database')).connect('mail');
global.mailBoxesDb = container.get(Symbol.for('database')).connect('mailboxes');

/*
 |--------------------------------------------------------------------------
 | Starting the SMTP Server
 |--------------------------------------------------------------------------
 |
 */
container.get(Symbol.for("smtp-server")).start();

/*
 |--------------------------------------------------------------------------
 | Setting up globals for the app
 |--------------------------------------------------------------------------
 |
 */

global._ = require('lodash');
global.moment = require("moment-timezone");

/*
 |--------------------------------------------------------------------------
 | Starting up the timezone
 |--------------------------------------------------------------------------
 |
 */

require("moment-precise-range-plugin");
moment.tz.setDefault("UTC");

