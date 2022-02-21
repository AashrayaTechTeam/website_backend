const express = require('express');
const router = express.Router();
const User = require('../../../MODELS/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup' , async(req , res)=>{
    const { Aashraya_Id , userName , mobileNumber , email ,password , confirmPass , role } = req.body;
    if (!userName || !mobileNumber  ||  !password || !confirmPass || !Aashraya_Id)
        {
            return res.status(422).json({error:"plz fill the details"})
        }
     try {
        const userExist = await User.findOne({Aashraya_Id});
                console.log(userExist)
        
                if(userExist){
                    return res.status(422).json({err:"user exits already"})
                }
                else if(password != confirmPass){
        
                    return res.status(422).json({error:"password not matched"})
                }
                else{
         
           const user = new User({Aashraya_Id , userName , mobileNumber , email ,password , confirmPass } );
                

                 const salt = await bcrypt.genSalt(10);
                 user.password = await bcrypt.hash(password, salt);
                await user.save()

                const payload = {
                    user: {
                      id: user.Aashraya_Id
                    }
                  };
                jwt.sign(
                    payload,
                    'secret',
                    {
                      expiresIn: 360000
                    },
                    (err, token) => {
                      if (err) throw err;
                      res.json({ token });
                    }
                  );


               // return res.status(200).json({ msg: 'Registration succesful' });
            
               
                
            }}
     catch(err){console.log(err.message)}


})



module.exports = router;