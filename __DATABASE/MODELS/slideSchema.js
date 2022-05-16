const mongoose = require("mongoose");

const slideSchema =  new mongoose.Schema({

    heading:{
        type: String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    smallPara:{
        type: String,
        required:true,
    },
    post:{
        type:String,
        required:true
    }
} ,
{timestamps:true}

)



const Slide  = mongoose.model('slideshow' ,slideSchema);

module.exports = Slide;