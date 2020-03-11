var express=require('express');
var app=express();

app.set('view engine','jade');
var port = process.env.PORT || 11000;

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

app.post('/saveForm',(req,res)=>{
    //lay thong tin tu textbox ten la yourname
    const yourName=req.body.yourName;
    res.render('confirm',{name:yourName})

})
var server=app.listen(port,function() {});