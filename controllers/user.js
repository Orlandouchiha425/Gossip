///////////
/////IMPORT
///////////
 const express=require('express')
 const User=require("../models/user")
 const bcrypt=require("bcryptjs")

 ////CREATE Route

 const router=express.Router();
 ////////////

 ////The signup routes
 router.get('/signup',(req,res)=>{
     res.render('user/Signup.jsx');
 })

 router.post('/signup',(req,res)=>{
     res.send("signup");
 })


 ///the login routes (Get=>form, post => submit form)

 router.get('login',(req,res)=>{
     res.render('user/Login.jsx')
 });

 router.post('login',(req,res)=>{
     res.send('login');
 })




 router.post('/signup', async(req,res)=>{
     //encrypt password
     req.body.password=await bcrypt.hash(
         req.body.password,
         await bcrypt.genSalt(10)
     )
     User.create(req.body)
     .then((user)=>{
     //redirect login
     res.redirect('/user/login')
    }).catch((error)=>{
        console.log(error);
        res.json({error})
    })
 })


 //Login Post Response 
 //https://sfs-madeline.herokuapp.com/backend-fundamentals/week-13/day-2/lecture-materials/slides
 router.post("/login", async (req, res) => {
    // get the data from the request body
    const { username, password } = req.body;
    // search for the user
    User.findOne({ username })
      .then(async (user) => {
        // check if user exists
        if (user) {
          // compare password
          const result = await bcrypt.compare(password, user.password);
          if (result) {
              //Store some properties in the session object
              req.session.username=username;
              req.session.loggedIn=true;
            // redirect to fruits page if successful
            res.redirect("/fruits");
          } else {
            // error if password doesn't match
            res.json({ error: "password doesn't match" });
          }
        } else {
          // send error if user doesn't exist
          res.json({ error: "user doesn't exist" });
        }
      })
      .catch((error) => {
        // send error as json
        console.log(error);
        res.json({ error });
      });
  });


  router.get('/logout',(req,res)=>{
      //destroy the session and redirect to the main page
      req.session.destroy((err)=>{
          res.redirect('/')
      })
  })
 module.exports=router;