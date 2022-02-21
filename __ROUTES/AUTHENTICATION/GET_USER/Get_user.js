const express = require('express');
const router = express.Router();
const User = require('../../../MODELS/User')


router.get('/getUIUsers' ,async(req , res)=>{

    try {
        console.log(req.body)
        const user = await User.find()
            res.json(user);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})



module.exports = router;