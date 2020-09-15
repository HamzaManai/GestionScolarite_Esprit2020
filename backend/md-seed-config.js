// import mongoose from 'mongoose';
// import Users from './maindata/users.seeder';
var User = require('./maindata/users.seeder');
var mongoose = require('mongoose');
var dbConfig = require('./database/db');
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/conFusion';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
 const seedersList = {
  User
};
module.exports=seedersList;
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database sucessfully connected')
    },
    error => {
        console.log('Database could not connected: ' + error)
    }
)
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
 const dropdb = async () => mongoose.connection.db.dropDatabase();
module.exports=dropdb;
