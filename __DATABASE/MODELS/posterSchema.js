const mongoose = require("mongoose");

const posterSchema =  new mongoose.Schema({

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



const Poster  = mongoose.model('poster' ,posterSchema);

module.exports = Poster;