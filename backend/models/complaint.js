var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema
var complaint = new Schema({
    details: {
        type: String
    },
    status: {
        type: Boolean,
        default:false
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    hod: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
}, {
    collection: 'complaints'

})

module.exports = mongoose.model('complaint', complaint)