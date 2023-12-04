const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const thematicSchema = new Schema(
    {
        number: { type: Number, required: true }, 
        x: { type: Number, required: true },
        y: { type: Number, required: true },
    }
);
    
module.exports = mongoose.model('Thematic', thematicSchema);