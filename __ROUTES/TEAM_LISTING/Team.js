const express = require('express');
const router = express.Router();
const Team = require('../../__DATABASE/MODELS/teamSchema')
const Auth = require('../../__DATABASE/MODELS/authSchema')
const jwt = require('jsonwebtoken')



//get all state representative
router.get('/getStateRep' , (req,res)=>{
    try{
        const representative = await Team.find({Designation:"State Representative"});
        res.status(200).json(representative);
    }catch(err){
        console.log(err);
    }
})


//get the teams member of core member according to the designation
router.post('/getTeam' , (req,res)=>{
    try{
        const {Designation} = req.body;
        if (!Designation)
            return res.status(422).json({error:"plz fill the details"})
        const teamMember = await Team.findOne({Designation});
        if(teamMember)
        {
            res.status(200).json({teamMember})
        }
        else
        {
            res.status(401).json({error:"Error"})
        }
    }
    catch{err=>{
        console.log(err);
    }}
})


//get the volunteers according to the states
router.post('/getVolunteers' , (req,res)=>{
    try{
        const {Designation,State} = req.body;
        if (!Designation || !State)
            return res.status(422).json({error:"plz fill the details"})
        const volunteers = await Team.findOne({Designation,State});
        if(volunteers)
        {
            res.status(200).json({volunteers})
        }
        else
        {
            res.status(401).json({error:"Error"})
        }
    }
    catch{err=>{
        console.log(err);
    }}
})


//add teams members
router.post('/admin/addTeam' , (req,res)=>{
    try{
    const { Designation, Name, 
    profilePic, AadharCardPhoto,State,District,
    Location,
    Address,
    Pin,
    mobileNumber,
    email } = req.body;

    // const userTokens = req.cookies.token;
    // const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
    // const user = await Auth.find({_id:verifyToken._id});


    const newTeam = new Team({
        Designation, Name, 
    profilePic, AadharCardPhoto,State,District,
    Location,
    Address,
    Pin,
    mobileNumber,
    email 
    });

    await newTeam.save();
    res.status(200).json({message:"New member added.."})

    }
    catch{err=>{
        console.log(err);
    }}
})


module.exports = router;