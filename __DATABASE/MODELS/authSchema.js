const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const authSchema =  new mongoose.Schema({

    role:{
        type: String,
        required:true
    },
    Aashraya_Id:{
        type: String,
        required:true,
        trim: true,
        minLength: [2, "Name is too short!"],
        maxLength: 20,
    },
    profilePic:{
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
    },
    password:{
        type:String,
        required:true,
        minLength: [2, "password is not strong"],
        maxLength: 20
    },
    confirmPass:{
        type:String,
        required:true,
        minLength: [2, "password is not strong"],
        maxLength: 20
     }
} ,
{timestamps:true}

)


// hash the password 

userSchema.pre('save' , async function (next) {

    
    if(this.isModified('password'))
    {
        this.password =  await bcrypt.hash(this.password , 12);
        this.confirmPass = await bcrypt.hash(this.confirmPass ,12)
    }
    next();
});


const Auth  = mongoose.model('admin' ,authSchema);

module.exports = Auth;