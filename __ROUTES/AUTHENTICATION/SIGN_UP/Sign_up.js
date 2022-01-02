const express = require('express');
const res = require('express/lib/response');
const router = express.Router();




router.post('/sign_up' , (req , res)=>{

    const {} = req.body;

    try{



    }
    catch{(err)=>{
        console.log(err)
    }}
})



module.exports = router;