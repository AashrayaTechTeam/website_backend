const mongoose = require("mongoose");

const joinUsSchema =  new mongoose.Schema({

    State:{
        type: String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type: Number,
        required: true
    },
    Address:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    Pin:{
        type:String,
        required:true
    },
    acceptTnC:{
        type:Boolean,
        required:true
    }

} ,
{timestamps:true}

)

const Join  = mongoose.model('JoinUs' ,joinUsSchema);

module.exports = Join;