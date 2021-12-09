const mongoose = require('mongoose'),
    dbconf = require('../config/db');

let dbString = 'mongodb://' + dbconf.dbcredentials.user;
dbString = dbString + ':' + dbconf.dbcredentials.password;
dbString = dbString + '@' + dbconf.dbcredentials.address;
dbString = dbString + ':' + dbconf.dbcredentials.port;
dbString = dbString + '/' + dbconf.dbcredentials.database;

mongoose.connect(dbString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
module.exports = {
    Match: require('./models/match'),
    Player: require('./models/player'),
    Score: require('./models/score'),
    Team: require('./models/team')

};