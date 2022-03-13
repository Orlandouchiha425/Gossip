// ///Import Dependencies

// const express= require("express");
// const Gossip= require('../models/gossip')

// //create route

// const router=express.Router()


// ///SEED FILE

// ///
// //Seed
// /////
// router.get('/seed',(req,res)=>{
//     const startPost=[
//         {title:"Orlando is so short",post:"Orlando is so short and chubby that he is 1 pizza away from getting rolled by willy wonka and  squeeze the grape out of him"},
//         {title:"noisy neighbor" ,post:"Is 3 am and the neighbor in the apartment 209 is very noisey, i cant sleep. someone call the policy and report noise complaint",image:"https://i.imgur.com/AYxFxuO.png" },
//         {title:"General Assembly", post: "has anyone else heard that even if general assembly is very expensive you can learn alot more than you can yourself? highly recommended", image:"https://i.imgur.com/GdayqQt.png"},
//         {title:"Cat stuck",post:"i found a cat stuck in a tree, i climbed the tree and now im stuck too, send help NOW! oh and food",image:"https://i.imgur.com/GSbPcGY.jpg"},
//         {title:"still stuck",post:" so you all gonna act like you havent seen my post? its been 3 days, the cat is trying to chew my leg"},
//         {title:"4 days now",post:'Wait, I wasnt wearing my glasses, is not a cat. i been stuck with a racoon, i tried to rescue a racoon. i had to jump down.'},
//         {title:"test", post:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus"}
//     ]
//     ///DELETE ALL POSTS
//     Gossip.deleteMany({}).then((data)=>{
//         Gossip.create(startPost).then((data)=>{
//             res.json(data)
//         })
//     })
// })

// //ROUTER MIDDLEWARE
// ////Authorization middleware


// router.use((req,res,next)=>{
//     if(req,session, loggedIn){
//         next()
//     }else{
//         res.redirect('/user/login')
//     }
// })



// //INDEX
// //////
// // router.get('/',(req,res)=>{
// //     res.render('Index.jsx')
// // })

// router.get('/',(req,res)=>{
//     Gossip.find({}, (err,foundGossip)=>{

//         if(err){
//             res.status(400).send(err)
//         }else{
//             res.render('../Index',{
//                 gossip:foundGossip
//             })
//         }
//     })
// })

// ////NEW
// router.get('/new',(req,res)=>{
//     res.render('../New')
// })



// ///DELETE
// router.delete('/gossip/:id',(req,res)=>{
//     const{ id }=req.params
//     Gossip.findByIdAndDelete(id)
//     .then(()=>{
//        res.redirect('/gossip')
//         })
//         .catch((error)=>{
//             res.status(400).json( { error})
//         })
//     })

// /////UPDATE

//     router.put('/gossip/:id',(req,res)=>{
//         const{id}=req.params;
//         Gossip.findByIdAndUpdate(id,req.body,{new:true})
//             .then(()=>{
//                 res.redirect(`/gossip/${id}`)
//             })
//             .catch((error)=>{
//                 res.status(400).json( { error})
//             })
//         })



// ///////
// ///CREATE
// //////

// router.post('/gossip',(req,res)=>{
 
//     Gossip.create(req.body)
//     .then((createdGossip)=>{
//     res.redirect(`/gossip/${createdGossip._id}`)
       
//     })
//     .catch((error)=>{
//         res.status(400).json({ error })
//     })
// })




// ///////
// //EDIT
// ///////
// router.get('/gossip/:id/edit',(req,res)=>{
//     const {id}=req.params;
//     Gossip.findById(id)
//     .then((gossip)=>{
//         res.render('./edit')

//         })
//         .catch((error)=>{
//             res.status(400).json({ error })
//         })
   
// })


// //////
// //SHOW
// //////
// router.get('/gossip/:id',(req,res)=>{
//     const {id }=req.params
//     Gossip.findById(id)
//     .then((gossip)=>{
//         res.render('./Show')
//     }).catch((error)=>{
//         res.status(400).json({ error })
//     })
// })

// module.exports= router;