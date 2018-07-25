var Datastore = require('nedb')
    ,dbName = 'data.db'
    ,db;

if(!db) {
    db = new Datastore({
        filename: dbName,
        autoload: true
    });
    console.log('DB ' + dbName + ' ready for use')
}

module.exports = db;
