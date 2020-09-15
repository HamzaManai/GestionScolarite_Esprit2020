var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema
var teacher = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    dept: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department"
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    }]
}, {
    collection: 'teachers'

})

module.exports = mongoose.model('teacher', teacher)