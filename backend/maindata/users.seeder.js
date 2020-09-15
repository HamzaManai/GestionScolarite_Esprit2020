// import { Seeder } from 'mongoose-data-seed';
// import { User } from '../models/user';

var Seeder = require('mongoose-data-seed');
var User = require('../models/user');

const data = [{
  
    username: 'Admin1',
    password: 'admin',
    role: 0
  

}];

class UsersSeeder  {

  async shouldRun() {
    return User.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return User.create(data);
  }
}

module.exports=UsersSeeder;
