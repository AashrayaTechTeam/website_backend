const mongoose = require("mongoose");

const subscribedSchema =  new mongoose.Schema({

    Email:{
        type: String,
        required:true
    }
} ,
{timestamps:true}
)



const Subscribe  = mongoose.model('subscribe' ,subscribedSchema);

module.exports = Subscribe;