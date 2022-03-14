// ///Import Dependencies

const express= require("express");
const Gossip= require('../models/gossip')





//create route

const router=express.Router()



//Contact
router.get('/contact',(req,res)=>{
    res.render('./Contact')
})
////
//////INDEX
////


router.get('/',(req,res)=>{
    Gossip.find({}, (err,foundGossip)=>{

        if(err){
            res.status(400).send(err)
        }else{
            res.render('./Index',{
                gossip:foundGossip
            })
        }
    })
})




//////
//////NEW
/////
router.get('/new',(req,res)=>{
    res.render('./New')
})

//////
///DELETE
/////
router.delete('/:id',(req,res)=>{
    Gossip.findByIdAndDelete(req.params.id,(err,deletedGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{res.redirect('/')}
    })
})


/////
////UPDATE
///////
router.put('/:id',(req,res)=>{
    Gossip.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{res.redirect(`/${req.params.id}`)}
    })
})


/////
///CREATE
////

router.post('/',(req,res)=>{
    Gossip.create(req.body,(err,createdGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{
            console.log(createdGossip)
            res.redirect('/')}
    })
})

/////
/////EDIT
/////
router.get('/:id/edit',(req,res)=>{
    const {id}=req.params;
    Gossip.findById(req.params.id,(err, foundGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{res.render('./Edit',{
            gossip:foundGossip
        })}
    })
})


// router.put('/logs/:id',(req,res)=>{
  
//     Gossip.findByIdAndUpdate(req.params.id, req.body,{new:true},(err,updatedLog)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{res.redirect(`/logs/${req.params.id}`)}
//     })
// })
////
//////SHOW
////
router.get('/:id',(req,res)=>{
    Gossip.findById(req.params.id,(err,foundGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.render('./Show',{
                gossip:foundGossip
            })
        }
    })
})




// router.get('/new',(req,res)=>{
//     res.render('./New')
// })
module.exports= router;