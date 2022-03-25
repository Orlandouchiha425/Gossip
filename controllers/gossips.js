// ///Import Dependencies

const express=require('express')
const Gossip=require('../models/gossip')






//create route

const router=express.Router()

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
const middleWare=(req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  };



//Contact
router.get('/contact',(req,res)=>{
    res.render('Contact')
})





//////INDEX
////
router.get('/',(req,res)=>{
    //find all the gossip
    if(req.session.loggedIn){

    
        Gossip.find({ username: req.session.username})
        //render a template after they are found
        .then((gossip)=>{
            console.log(gossip);
            res.render("Index",{ gossip})
        })
        // send error as json if they aren't
        .catch((gossip)=>{
            console.log(error);
            res.json({ error})
                })
            } else{
                Gossip.find({})
        //render a template after they are found
        .then((gossip)=>{
            console.log(gossip);
            res.render("Index",{ gossip})
        })
        // send error as json if they aren't
        .catch((gossip)=>{
            console.log(error);
            res.json({ error})
                })
            }
})




//////
//////NEW
/////
router.get('/new',middleWare,(req,res)=>{
    res.render('New')
})

//////
///DELETE
/////


router.delete('/:id',(req,res)=>{
    //get the id from params
    const id=req.params.id;
    //Delete Gossip
    Gossip.findByIdAndRemove(id)
    .then((gossip)=>{
        //redirect to main page after deleting
        res.redirect('/')
    })
    // send error as json
    .catch((error)=>{
        console.log(error);
        res.json({ error })
    })
})
// router.delete('/:id',(req,res)=>{
//     Gossip.findByIdAndDelete(req.params.id,(err,deletedGossip)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{res.redirect('/gossip')}
//     })
// })


/////
////UPDATE
///////

router.put('/:id', (req,res)=>{
    // get the id from params
    const id=req.params.id;
    Gossip.findByIdAndUpdate(id, req.body,{new: true})
    .then((gossip)=>{
        // redirect to the main page after updating
        res.redirect('/')
    })
    // send error as json
    .catch((error)=>{
        console.log(error);
        res.json({ error });
    })
})
// router.put('/:id',(req,res)=>{
//     Gossip.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedGossip)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{res.redirect(`/${req.params.id}`)}
//     })
// })


/////
///CREATE
////

router.post('/', (req,res)=>{
     // add username to req.body to track related user
  req.body.username = req.session.username;    
// Creat new Fruit
Gossip.create(req.body)
    .then((gossip)=>{
        // redirect user to Index page if succesfully created item
        res.redirect("/gossip")
    })
    // send error as json
    .catch((error)=>{
        console.log(error);
        res.json({ error })
    })
})

// router.post('/gossip',(req,res)=>{
//     req.body.username=req.session.username;
//     Gossip.create(req.body,(err,createdGossip)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{
//             console.log(createdGossip)
//             res.redirect('/gossip')}
//     })
// })

/////
/////EDIT
/////

router.get('/:id/edit', (req,res)=>{
    // get the id from params
    const id=req.params.id
    // geth the gossip from database
    Gossip.findById(id)
    .then((gossip)=>{
        //render edit page and send gossip data
        res.render('Edit',{ gossip})
    })
    //send error as json
    .catch((error)=>{
        console.log(error)
        res.json({ error })
    })
})
// router.get('/:id/edit',(req,res)=>{
//     const {id}=req.params;
//     Gossip.findById(req.params.id,(err, foundGossip)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{res.render('./Edit',{
//             gossip:foundGossip
//         })}
//     })
// })


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
router.get("/:id",(req,res)=>{
    // get the id from params
    const id=req.params.id;
    // find particural gossip from the database

    Gossip.findById(id)
    .then((gossip)=>{
        console.log(gossip)
        // render template with with data from database
        res.render("Show",{gossip})
    })
    .catch((error)=>{
        console.log(error)
        res.json({ error })
    })
})


// router.get('/:id',(req,res)=>{
//     Gossip.findById(req.params.id,(err,foundGossip)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{
//             res.render('./Show',{
//                 gossip:foundGossip
//             })
//         }
//     })
// })







// router.get('/new',(req,res)=>{
//     res.render('./New')
// })
module.exports= router;