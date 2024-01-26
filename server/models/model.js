const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    sub:{
        type: String,
        required: true,
    },
    type:{
        type:String,
        required:true
    }
})

const file_model= mongoose.model("file_model",fileSchema);
module.exports = file_model