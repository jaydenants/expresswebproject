//Imports 
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static('./public/images'));



app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index',{text: 'this is EJS'});
})
app.get('/about', (req,res)=>{
    res.render('about',{text: 'this is EJS'});
})
app.get('/menu', (req,res)=>{
    res.render('menu',{text: 'this is EJS'});
})
app.get('/contact', (req,res)=>{
    res.render('contact',{text: 'this is EJS'});
})

app.listen(port,(req,res)=>{
    console.log('server/app is running better catch it!! HHAHAHAHAHAHAHAHAHa')
});