require('dotenv').config()
console.log(process.env.DATABASE_URL)
const express=require('express')
const mongoose=require('mongoose')
const app=express();
const methodOverride=require('method-override')
const Gossip=require('./models/gossip')
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
        }else{res.redirect('./gossip')}
    })
})


///////
//UPDATE
///////
app.put('/gossip/:id',(req,res)=>{
    Gossip.findByIdAndUpdate(req.params.id,{new:true},(err,updatedGossip)=>{
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
    Gossip.findById(req.params.id,(err, foundGossip)=>{
        if(err){
            res.status(400).send(err)
        }else{res.render('gossip/edit',{
            gossip:foundGossip
        })}
    })
})


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
// app.get('/seed',(req,res)=>{
//     const startPost=[
//         {title:"Orlando is so short",image:"./OompaLoompa",post:"Orlando is so short and fat that he is 1 pizza away from getting rolled by willy wonka and squeeze the grape out of him"}
//     ]
// })

const PORT = process.env.PORT;


app.listen(PORT,console.log(`I am listening on ${PORT}`))