// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => res.send('Template <a href="/users/documents">Go to user</a>'))
// app.get('/users/documents', (req, res) => res.send('Vamo a comenzar <a href="/">Home</a>'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {title: 'Rockstarts'
});

})


