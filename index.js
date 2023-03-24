const express = require('express');
const app = express();
const fs = require('fs');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/styles', express.static('styles'))
app.use('/imgs', express.static('imgs'))
app.use('/scripts', express.static('scripts'))
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    res.render('index')
})

app.get("*", (req, res) => {
    res.render('404')
})

app.post('/succses', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
    res.render('succses', { 'data': req.body })
})


app.listen(3000);

