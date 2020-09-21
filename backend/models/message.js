var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Message = new Schema({


   username: {
      type: String
   },
   title: {
      type: String
   },
   created_at: {
      type: Date,
      default: Date.now()
   },
   content: {
    type: String
}
});



module.exports = mongoose.model('Message', Message);
