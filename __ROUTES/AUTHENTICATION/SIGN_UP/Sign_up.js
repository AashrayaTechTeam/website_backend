const express = require('express');
const router = express.Router();




router.post('/signup' , (req , res)=>{

    // const { Aashraya_Id , userName , mobileNumber , email ,password , confirmPass , role } = req.body;
    // if (!userName || !mobileNumber  ||  !password || !confirmPass || !Aashraya_Id)
        // {
        //     return res.status(422).json({error:"plz fill the details"})
        // }


    //     try{
            
    //         const userExist = await User.findOne({Aashraya_Id});
    
    //         if(userExist){
    //             return res.status(422).json({err:"user exits already"})
    //         }
    //         else if(password != confirmPass){
    
    //             return res.status(422).json({error:"password not matched"})
    //         }
    //         else{
    //             const user = new User({Aashraya_Id , userName , mobileNumber , email ,password , confirmPass , role} );
    //             await user.save();    
    //             res.status(200).json({ message:"user registered successfully" })
    //         }

    // catch{(err)=>{
    //     console.log(err)
    // }}
})



module.exports = router;