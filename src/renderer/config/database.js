import path from 'path';
import { remote }  from 'electron';

export default {
    /*
     |--------------------------------------------------------------------------
     | Database Driver
     |--------------------------------------------------------------------------
     | PouchDB
     |
     */
    driver : 'pouchdb',


    connections : {
        pouchdb : {
            'path' : path.join(remote.app.getPath('userData'), '/db'),
        }
    }
};
