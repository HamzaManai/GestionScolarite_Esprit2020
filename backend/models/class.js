var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema
var clas = new Schema({
    name: {
        type: String
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    }]
    
}, {
    collection: 'classes'

})

module.exports = mongoose.model('clas', clas)