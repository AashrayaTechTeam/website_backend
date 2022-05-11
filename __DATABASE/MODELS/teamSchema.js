
const mongoose = require("mongoose");

const teamSchema =  new mongoose.Schema({

    Designation:{
        type: String,
        required:true
    },
    Name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:40
    },
    profilePic:{
        type:String,
        required:true
    },
    AadharCardPhoto:{
        type:String,
        required: [true, "Make sure the image is clear."],
    },
    State:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required: [true, "Provide full address"],
    },
    Pin:{
        type:String,
        required:true
    },
    mobileNumber:{
        type: Number,
        required: [true, "What is your contact number?"],
    },
    email:{
        type:String,
        required:true
    }
} ,
{timestamps:true}

)


const Team  = mongoose.model('team' ,teamSchema);

module.exports = Team;