const router = require('express').Router();

const authCheck = (req,res,next) => {
  if(!req.user){
    res.redirect('/auth/login');

  }else {
    next();
  }
};

router.get('/', (req,res) => {
  res.render('profile', { user: req.user });
  //res.send('you are logged in this is your profile-' + req.user.username);

});


module.exports = router;
