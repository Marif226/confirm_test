const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:true})
app.use(urlencodedParser)

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", function(req, res){
    res.render('index')
})

app.get("/confirm", function(req, res){
    res.render('confirm')
})

app.post('/', function(req, res){
    res.render('confirm', {data: req.body});
})

app.listen(3000, function(){
    console.log("your port is 3000");
})