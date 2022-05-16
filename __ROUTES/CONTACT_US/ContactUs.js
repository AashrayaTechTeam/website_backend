const express = require('express');
const router = express.Router();
const Contact = require("../../__DATABASE/MODELS/contactUsSchema")

router.post("/addContact" , async(req,res)=>{
    try{
        const { Email , Name , Message } = req.body;  
        if (!Email || !Name  || !Message )
            {
                return res.status(422).json({error:"plz fill the details"})
            }
            const newMessage = new Contact({Email , Name , Message});
            newMessage.save();    
            res.status(200).json({ message:"user registered successfully" })
    }
    catch{(err)=>{
    console.log(err)
}}
})

router.get("/getContact" , async(req,res)=>{

    try{
        const contact = await Contact.find();
        res.status(200).json({contact});
        }
        catch{
            (err)=>{
                console.log(err)
            }
        }
})

router.post("/deleteMessage" , async(req , res )=>{
    try{
        const { id } = req.body;
        await Contact.deleteOne({ _id:id })
        res.status(200).json({"msg":"Removed"});
    }catch(err){
        console.log(err);
    } 
})

module.exports = router;