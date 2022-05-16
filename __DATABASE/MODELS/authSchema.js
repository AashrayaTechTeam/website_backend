const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const authSchema =  new mongoose.Schema({

    role:{
        type: String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Aashraya_Id:{
        type: String,
        required:true,
    },
    profilePic:{
        type:String,
        required:true
    },
    mobileNumber:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmPass:{
        type:String,
        required:true,
     }
} ,
{timestamps:true}

)


// hash the password 

authSchema.pre('save' , async function (next) {

    
    if(this.isModified('password'))
    {
        this.password =  await bcrypt.hash(this.password , 12);
        this.confirmPass = await bcrypt.hash(this.confirmPass ,12)
    }
    next();
});


const Auth  = mongoose.model('admin' ,authSchema);

module.exports = Auth;