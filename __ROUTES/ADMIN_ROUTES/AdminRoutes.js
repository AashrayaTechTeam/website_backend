const express = require('express');
const router = express.Router();
const Poster = require('../../__DATABASE/MODELS/posterSchema.js');
const SlideShow =  require('../../__DATABASE/MODELS/slideSchema.js')
const Subscriber = require('../../__DATABASE/MODELS/subscribedSchema')
const Career = require('../../__DATABASE/MODELS/careerSchema')
const JoinUs = require('../../__DATABASE/MODELS/joinUsSchema')

//---------------------------------------------------------------------------------------------------

//SLIDESHOWS HANDLES

//ADD SLIDESHOW
router.post('/slideshow' , async(req , res)=>{

    try{
        const { heading, imageUrl , smallPara , post } = req.body;  
        if (!heading || !imageUrl  || !smallPara || !post )
            {
                return res.status(422).json({error:"plz fill the details"})
            }
        const slideExist = await SlideShow.findOne({imageUrl});
        if(slideExist!=null){
            return res.status(422).json({err:"user exits already"})
        }
        else{
            const newSlideshow = new SlideShow({heading, imageUrl , smallPara , post});
            newSlideshow.save();    
            res.status(200).json({ message:"user registered successfully" })
        }
    }
    catch{(err)=>{
    console.log(err)
}}
})

//GET SLIDESHOWS DATA
router.get('/getSlideshow' , async(req,res)=>{
    try{
    const slide = await SlideShow.find();
    res.status(200).json({slide});
    }
    catch{
        (err)=>{
            console.log(err)
        }
    }
})

// DELETE SLIDES
router.post("/deleteSlide" , async(req , res )=>{
    try{
        const { id } = req.body;
        await SlideShow.deleteOne({ _id:id })
        res.status(200).json({"msg":"Removed"});
    }catch(err){
        console.log(err);
    } 
})
//Get Event Detail data 

router.get('/eventDetail' ,async(req,res)=> {
    try{
        const findId = req.headers.id;
    const event = await SlideShow.findOne({ _id:findId })
    res.status(200).json({event});
    }
    catch{(err)=>{
        console.log(err)
    }}
})

//-----------------------------------------------------------------------------------------------------------


// POSTER HANDLES
//add posters
router.post('/addPoster', async(req,res)=>{
    try{
        const { heading, imageUrl , smallPara , post } = req.body;  
        if (!heading || !imageUrl  || !smallPara || !post )
            {
                return res.status(422).json({error:"plz fill the details"})
            }
            const newPoster = new Poster({heading, imageUrl , smallPara , post});
            newPoster.save();    
            res.status(200).json({ message:"user registered successfully" })
    }
    catch{(err)=>{
    console.log(err)
}}
})

//get poster
router.get('/getPoster',async(req,res)=>{
    try{
        const poster = await Poster.find();
        res.status(200).json({poster});
        }
        catch{
            (err)=>{
                console.log(err)
            }
        }
})

//----------------------------------------------------------------------------------------------------

//Subscription handle
router.post('/subscribe', async(req,res)=>{
    try{
        const {Email} = req.body;  
        if (!Email)
            {
                return res.status(422).json({error:"plz fill the details"})
            }
            const Sub = new Subscriber({Email});
            Sub.save();    
            res.status(200).json({ message:"user registered successfully" })
    }
    catch(err){
        console.log(err);
    }
})

router.get('/getSubscriber' , async(req,res)=>{
    try{
        const sub = await Subscriber.find();
        res.status(200).json({sub});
        }
        catch{
            (err)=>{
                console.log(err)
            }
        }
})


//-----------------------------------------------------------------------------------------------------------

//CAREER HANDLES
router.post("/career",async(req,res)=>{
    try{
        const {Job,heading,formLink} = req.body;  
            const job = new Career({Job,heading,formLink});
            job.save();    
            res.status(200).json({ message:"user registered successfully" })
    }
    catch(err){
        console.log(err);
    }
})

router.get("/getCareer",async(req,res)=>{
    try{
        const getJob = await Career.find();
        res.status(200).json({getJob});
        }
        catch{
            (err)=>{
                console.log(err)
            }
        }
})

router.post('/deleteJob' ,async(req,res)=>{
    try{
        const { id } = req.body;
        await Career.deleteOne({ _id:id })
        res.status(200).json({"msg":"Removed"});
    }catch(err){
        console.log(err);
    } 
})
//-----------------------------------------------------------------------------------------------------------



//JOIN US 

router.post('/joinUs' ,async(req,res)=>{
    try{
        const {State,Name,Email,mobileNumber,
            Address,City,District,Pin,acceptTnC
        } = req.body;  
        const join = new JoinUs({
            State,Name,Email,mobileNumber,
            Address,City,District,Pin,acceptTnC
        });
        join.save();    
        res.status(200).json({ message:"user registered successfully" })
    }
    catch(err){
        console.log(err);
    }
})

router.get('/getJoinUs' ,async(req,res)=>{
    try{
        const getJoin = await JoinUs.find();
        res.status(200).json({getJoin});
        }
        catch{
            (err)=>{
                console.log(err)
            }
        }
})

router.post('/deleteJoinUs', async(req,res)=>{
    try{
        const { id } = req.body;
        await JoinUs.deleteOne({ _id:id })
        res.status(200).json({"msg":"Removed"});
    }catch(err){
        console.log(err);
    } 
})

//-------------------------------------------------------------------------------------




module.exports = router;