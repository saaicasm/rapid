const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partSchema = new Schema({
    partNumber:{
        type: String,
        required: true,
        unique: true    
    },
    manufacturer: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Part', partSchema);

