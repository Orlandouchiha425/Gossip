require('dotenv').config()
console.log(process.env.DATABASE_URL)
const express=require('express')
const mongoose=require('mongoose')
const app=express();
const methodOverride=require('method-override')

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




//INDEX
//////

app.get('/gossip',(req,res)=>{
    res.render("Index")
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





