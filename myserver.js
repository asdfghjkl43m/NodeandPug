var express=require('express');
var app=express();

app.set('view engine','jade');
var port = process.env.PORT || 12000;

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//khi mo website mac dinh
app.get("/",(req,res)=>{
    res.render('index')
})
app.get('/form',(req,res)=>{
    res.render('form');
})
app.get('/yui',(req,res)=>{
    res.render('yui');
})
app.get('/mugi',(req,res)=>{
    res.render('mugi');
})
app.get('/violet',(req,res)=>{
    res.render('violet');
})
app.get('/violetbuy',(req,res)=>{
    res.render('violetbuy');
})
app.get('/yuibuy',(req,res)=>{
    res.render('yuibuy');
})
app.get('/mugibuy',(req,res)=>{
    res.render('mugibuy');
})
app.get('/registerform',(req,res)=>{
    res.render('registerform');
})
app.post('/yuiBack',(req,res)=>{
    res.render('yui')
})
app.post('/violetback',(req,res)=>{
    res.render('violet')
})
app.post('/saveForm',(req,res)=>{
    res.render('confirm')
})
app.post('/mugiBack',(req,res)=>{
    res.render('mugi')
})
app.post('/logininstead',(req,res)=>{
    res.render('form')
})
var server=app.listen(port,function() {});