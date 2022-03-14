require('dotenv').config()
console.log(process.env.DATABASE_URL)
const express=require('express')
const mongoose=require('mongoose')
const app=express();
const methodOverride=require('method-override')
const Gossip=require('./models/gossip')
const path = require('path');
const morgan=require('morgan')
const gossipController=require("./controllers/gossips")
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
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use((req,res,next)=>{
    console.log(req.body)
    next()
})


app.use('/',gossipController)
app.get('/seed',async(req,res)=>{})




const PORT = process.env.PORT || 8000


app.listen(PORT,console.log(`I am listening on ${PORT}`))