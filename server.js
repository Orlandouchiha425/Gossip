require('dotenv').config()
console.log(process.env.DATABASE_URL)
const express=require('express')
const mongoose=require('mongoose')
const app=express();
const methodOverride=require('method-override')
const Gossip=require('./models/gossip')
const PORT = process.env.PORT || 8000

///this makes my css works
app.use(express.static('public'))

///views
app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());


//Models
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


////////
//Middle Ware
///////
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    console.log(req.body)
    next()
})

//////Method Overrid
app.use(methodOverride('_method'))
///////



// 7 Restful route === INDEX NEW DELETE UPDATE CREATE EDIT SHOW


app.get('/contact',(req,res)=>{
    res.render('./Contact')
})

//INDEX
//////

app.get('/gossip',(req,res)=>{
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


////////
//NEW
///////
app.get('/gossip/new',(req,res)=>{
    res.render('./New')
})

////////
//DELETE
///////
app.delete('/gossip/:id',(req,res)=>{
    Gossip.findByIdAndDelete(req.params.id,(err,deletedGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{res.redirect('/gossip')}
    })
})


///////
//UPDATE
///////
app.put('/gossip/:id',(req,res)=>{
    Gossip.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{res.redirect(`/gossip/${req.params.id}`)}
    })
})


///////
///CREATE
//////

app.post('/gossip',(req,res)=>{
    Gossip.create(req.body,(err,createdGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{
            console.log(createdGossip)
            res.redirect('/gossip')}
    })
})

///////
//EDIT
///////
app.get('/gossip/:id/edit',(req,res)=>{
    const {id}=req.params;
    Gossip.findById(req.params.id,(err, foundGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{res.render('./edit',{
            gossip:foundGossip
        })}
    })
})


// app.put('/logs/:id',(req,res)=>{
  
//     Gossip.findByIdAndUpdate(req.params.id, req.body,{new:true},(err,updatedLog)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{res.redirect(`/logs/${req.params.id}`)}
//     })
// })
//////
//SHOW
//////
app.get('/gossip/:id',(req,res)=>{
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


///
//Seed
/////
app.get('/seed',(req,res)=>{
    const startPost=[
        {title:"Orlando is so short",post:"Orlando is so short and chubby that he is 1 pizza away from getting rolled by willy wonka and  squeeze the grape out of him"},
        {title:"noisy neighbor" ,post:"Is 3 am and the neighbor in the apartment 209 is very noisey, i cant sleep. someone call the policy and report noise complaint",image:"https://i.imgur.com/AYxFxuO.png" },
        {title:"General Assembly", post: "has anyone else heard that even if general assembly is very expensive you can learn alot more than you can yourself? highly recommended", image:"https://i.imgur.com/GdayqQt.png"},
        {title:"Cat stuck",post:"i found a cat stuck in a tree, i climbed the tree and now im stuck too, send help NOW! oh and food",image:"https://i.imgur.com/GSbPcGY.jpg"},
        {title:"still stuck",post:" so you all gonna act like you havent seen my post? its been 3 days, the cat is trying to chew my leg"},
        {title:"4 days now",post:'Wait, I wasnt wearing my glasses, is not a cat. i been stuck with a racoon, i tried to rescue a racoon. i had to jump down.'},
        {title:"test", post:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus"}
    ]
    ///DELETE ALL POSTS
    Gossip.deleteMany({}).then((data)=>{
        Gossip.create(startPost).then((data)=>{
            res.json(data)
        })
    })
})


//CONTACT INFORMATION


// `const PORT = process.env.PORT;`


app.listen(PORT,console.log(`I am listening on ${PORT}`))