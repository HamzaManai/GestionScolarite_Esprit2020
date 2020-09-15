var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema
var department = new Schema({
    name: {
        type: String
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

}, {
    collection: 'departments'

});

module.exports = mongoose.model('department', department)