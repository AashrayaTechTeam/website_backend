
const mongoose = require('mongoose')
const DB = process.env.MONGO_URI;

mongoose.connect( DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connected to mongo');
}).catch((err)=>{
    console.log('error connecting' ,err)
})







