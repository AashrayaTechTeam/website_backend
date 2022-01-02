const express = require('express')
const app = express();
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({extended:true}))
require("./__DATABASE/SERVER/initialiseDB");



// link the router files 
app.use(require('./__ROUTES/FUNDRAISE/Fund_raise'))
app.use(require('./__ROUTES/AUTHENTICATION/SIGN_IN/Sign_in'))
// app.use(require('./__ROUTER/Auth'))
// app.use(require('./__ROUTER/Services'))
// app.use(require('./__ROUTER/Address'))

// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("frontend/build"));

//     app.get('/*', function(req, res) {
//         res.sendFile(path.join(__dirname, 'frontend/build/index.html'), function(err) {
//           if (err) {
//             res.status(500).send(err)
//           }
//         })
//       })
// 
//}



app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
})



