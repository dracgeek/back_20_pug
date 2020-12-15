const { Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
  res.render('index', {title: 'Aprendiendo Pug :)'});
});


router.get('/login', (req,res)=>{
  res.render('login', {});
});

router.post('/signin', (req,res)=>{
    
  const user = req.body.email;
  const pass = req.body.password;

  //const { email,pass } = req.body;
  
  if(user=='email@email.com' && pass=='123'){
     res.render('dashboard',{
       title: 'Bienvenido',
       datos:{
         email:user,
         edad:'22', 
         hobbies:[
           'Bici',
           'Runing',
           'Video Juegos'
         ]     
       }
     })
  }else{
    res.render('login',{error:true});
  }

  

});



module.exports = router;