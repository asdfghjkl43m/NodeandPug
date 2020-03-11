var express=require('express');
var app=express();

app.set('view engine','jade');
var port = process.env.PORT || 6000;

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//khi mo website mac dinh
app.get("/",(req,res)=>{
    res.render('index')
})

app.get('/saveform',(req,res)=>{
    res.render('form');
})
app.get('/form',(req,res)=>{
    res.render('form');
})
app.get('/yui',(req,res)=>{
    res.render('form');
})

app.post('/saveForm',(req,res)=>{
    //lay thong tin tu textbox ten la yourname
    const yourName=req.body.yourName;
    res.render('confirm',{name:yourName})

})
var server=app.listen(port,function() {});