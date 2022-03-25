/////IMPORT MODEL

require('dotenv').config()
console.log(process.env.DATABASE_URL)
const express=require('express')
const methodOverride=require('method-override')
const morgan=require('morgan')
const gossipRouter=require("./controllers/gossips")
const UserRouter=require('./controllers/user')
const session=require('express-session')
const MongoStore= require('connect-mongo')

const path = require('path');


////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app=express();//re assign express()

app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());




// const session=require('express-session')



///views



//Models
// mongoose.connect(process.env.DATABASE_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })



////////
//Middle Ware
///////
app.use(morgan('tiny')); //logging
app.use(methodOverride('_method'))// override for put and delete requests from forms
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))   //serve files from public statically///this makes my css works

//MIDDLEWARE TO SET UP SESSION
app.use(
  session({
    secret:process.env.SECRET,
    store: MongoStore.create({mongoUrl:process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave:false,
  })
)





app.use((req,res,next)=>{
    console.log(req.body)
    next()
})
// app.use(
//     session({
//       secret: process.env.SECRET,
//       store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
//       saveUninitialized: true,
//       resave: false,
//     })
//   );

////////////////
//ROUTES
//////////////////
app.use('/',gossipRouter)// send all "/fruits" routes to fruit router  //// send all "/gossip" routes to gossip router
app.use("/user", UserRouter); // send all "/user" routes to user router
// app.get('/seed',async(req,res)=>{})///CHECKKKKKKKK


app.get("/gossip", (req, res) => {
    res.render("Index");
  });///////CHECKKKKKKKKKKKK

const PORT = process.env.PORT || 8000


app.listen(PORT,console.log(`I am listening on ${PORT}`))