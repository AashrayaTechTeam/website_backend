const express = require('express');
const router = express.Router();
const Team = require('../../__DATABASE/MODELS/teamSchema')
const Auth = require('../../__DATABASE/MODELS/authSchema')
const jwt = require('jsonwebtoken')



//get all state representative
router.get('/getStateRep' , async(req,res)=>{
    try{
        const representative = await Team.find({Designation:"State Representative"});
        res.status(200).json(representative);
    }catch(err){
        console.log(err);
    }
})

router.get('/getAllTeam' , async(req,res)=>{
    try{
        const team = await Team.find();
        res.status(200).json(team);
    }catch(err){
        console.log(err);
    }
})


//get the teams member of core member according to the designation
router.get('/getTeam' , async(req,res)=>{
    try{
        const Designation = req.headers.id;
        
        console.log(Designation)

        if (!Designation)
            return res.status(422).json({error:"plz fill the details"})
        const teamMember = await Team.findOne({Designation});
        if(teamMember)
        {
            res.status(200).json(teamMember)
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
router.post('/getVolunteers' , async(req,res)=>{
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
router.post('/addTeam' , async(req,res)=>{
    try{
    const { Designation, Name, 
    profilePic, AadharCardPhoto,State,District,
    Location,
    Address,
    Pin,
    mobileNumber,
    email } = req.body;
    const newTeam = new Team({
        Designation, Name, 
    profilePic, AadharCardPhoto,State,District,
    Location,
    Address,
    Pin,
    mobileNumber,
    email 
    });

    newTeam.save();
    res.status(200).json({message:"New member added.."})

    }
    catch{err=>{
        console.log(err);
    }}
})


module.exports = router;