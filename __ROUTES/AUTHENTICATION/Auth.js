const express = require('express');
const router = express.Router();

const User = require('../../__DATABASE/MODELS/authSchema')

router.post('/admin/signIn' , (req , res)=>{
    
    try{
        const { Aashraya_Id , password ,role } = req.body;

        if( !Aashraya_Id || !password){
            return res.status(200).json({error:" plz fille the fields"})
        }

        const userLogin = await User.findOne({Aashraya_Id,role});
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password);

        if(isMatch)
               {
                const token = jwt.sign({_id :userLogin._id} , process.env.JWT_SECRET_KEY , {
                    expiresIn:"30d"
                });
                res.cookie("token" ,token ,{ secure: true });
                res.status(200).json({token})
               }  
        else
        {
            res.status(401).json({error:"Error : User does not Exist"});
            
        }   
    }
    else
    {
        res.status(401).json({message:"Invalid Credentials"})
    }
        

    }catch(err){
        console.log(err)
    }

})



router.post('/admin/signup' , (req , res)=>{

    const { role , Aashraya_Id , profilePic , mobileNumber , email ,password , confirmPass } = req.body;
    if (!userName || !mobileNumber  || !profilePic || !password || !confirmPass || !Aashraya_Id)
        {
            return res.status(422).json({error:"plz fill the details"})
        }

        try{
            
            const userExist = await User.findOne({Aashraya_Id,role});
    
            if(userExist){
                return res.status(422).json({err:"user exits already"})
            }
            else if(password != confirmPass){
    
                return res.status(422).json({error:"password not matched"})
            }
            else{
                const user = new User({role , Aashraya_Id , profilePic , mobileNumber , email ,password , confirmPass});
                await user.save();    
                res.status(200).json({ message:"user registered successfully" })
            }
        }
        catch{(err)=>{
        console.log(err)
    }}
})


module.exports = router;