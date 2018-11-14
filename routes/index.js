var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicio', (req,res,next)=> {
  res.render('vista.hbs', 
    {
      title: '1º vista',
      page: 'Mi primera página',
      layout: 'layout.hbs'
    });
})

router.get('/prueba', (req,res,next) => {
  res.render('prueba.hbs', {
    usuarios: [
      {id: 1, name: 'xavi'},
      {id: 2, name: 'pepe'},
      {id: 3, name: 'jesus'}],
    administrador: 
    {
      nombre: 'xavi',
      apellidos: 'rodriguez'
    },
    appName: 'Mi super App'
  });
})

module.exports = router;
