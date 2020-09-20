var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema
var course = new Schema({
    name: {
        type: String
    },
    hourly_load: {
        type: Number
    },
    current_Progress:{ 
        type: Boolean,
        default: false
    },
    payement:{ 
        type: Boolean,
        default: false
    },
    test: {
        type: Boolean,
        default:false
    },
    state: {
        type: Boolean,
        default:false
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    classes: [{
        type: Schema.Types.ObjectId,
        ref: "class"
    }],
},
 {
    collection: 'courses'

})

module.exports = mongoose.model('course', course)