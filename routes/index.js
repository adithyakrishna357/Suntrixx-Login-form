var express = require('express');
var router = express.Router();

//   ALL ROUTERS 

const credential={
  email:"designers357@gmail.com",
  password:"1234567"
}

router.post('/login',(req,res)=>{
  if(req.body.email==credential.email&&req.body.password==credential.password){
  
      req.session.user=req.body.email;
      res.redirect('/dashboard'); 
  }else{
    res.render('index',{title:"LOGIN FORM",logout:"Invalid username or password ...!"})
  }
})

//route for dashboard
router.get('/dashboard',(req,res)=>{
  if(req.session.user){
      res.render('dashboard',{user: req.session.user});
  }else{
      res.render('index',{title: "LOGIN FORM"});
  }
})

//route for logout
router.get('/logout',(req,res)=>{
  req.session.destroy(function(err){
      if(err){
          console.log(err);
          res.send("error")
      }else{
          res.render('index',{title:"LOGIN FORM",logout :"Logged out succesfully ...!"})
      }
  })
})


module.exports = router;
