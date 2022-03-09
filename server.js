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


////////
//DELETE
///////



///////
//UPDATE
///////

///////
///CREATE
//////



///////
//EDIT
///////



//////
//SHOW
//////



const PORT = process.env.PORT;


app.listen(PORT,console.log(`I am listening on ${PORT}`))