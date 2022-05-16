const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require('../../__DATABASE/MODELS/authSchema')
const cookieParser = require('cookie-parser');
router.use(cookieParser());


router.post('/signIn' , async(req , res)=>{
    try{
        const { Aashraya_Id , password } = req.body;
        if( !Aashraya_Id || !password){
            return res.status(200).json({error:" plz fille the fields"})
        }
        const userLogin = await User.findOne({Aashraya_Id});
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





router.post('/signup' , async(req , res)=>{

        try{
            const { role, Name , Aashraya_Id , profilePic , mobileNumber, email ,password , confirmPass } = req.body;  
            if (!role || !mobileNumber  || !profilePic || !password || !confirmPass || !Aashraya_Id)
                {
                    return res.status(422).json({error:"plz fill the details"})
                }
            const userExist = await User.findOne({Aashraya_Id});
            if(userExist!=null){
                return res.status(422).json({err:"user exits already"})
            }
            else if(password != confirmPass){
                return res.status(422).json({error:"password not matched"})
            }
            else{
                const user = new User({role, Name , Aashraya_Id , profilePic , mobileNumber , email ,password , confirmPass});
                user.save();    
                res.status(200).json({ message:"user registered successfully" })
            }
        }
        catch{(err)=>{
        console.log(err)
    }}
})



router.get('/userLoggedIn' , async(req,res)=>{

    const userTokens = req.cookies.token;
    const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
    const user = await User.find({_id:verifyToken._id});
    res.status(200).json({user});
})

router.get('/allAdmin', async(req,res)=>{
    const user = await User.find();
    res.status(200).json({user});
})


module.exports = router;