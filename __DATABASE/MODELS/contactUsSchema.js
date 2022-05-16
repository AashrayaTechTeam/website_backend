const mongoose = require("mongoose");

const contactUsSchema =  new mongoose.Schema({

    Email:{
        type: String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Message:{
        type: String,
        required:true,
    }
} ,
{timestamps:true}

)



const Contact  = mongoose.model('contactUs' ,contactUsSchema);

module.exports = Contact;