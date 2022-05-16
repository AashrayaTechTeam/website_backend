const mongoose = require("mongoose");

const careerSchema =  new mongoose.Schema({

    Job:{
        type: String,
        required:true
    },
    formLink:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    }

} ,
{timestamps:true}

)


const Career  = mongoose.model('career' ,careerSchema);

module.exports = Career;