const express = require('express');
const app = express()
port = 3000;

app.set('view engine', 'ejs')
 app.use(express.static(__dirname+'/public'))
 app.get("/",(req,res)=>{
    res.render('index',{page:'home'})
 })

 app.get("/about",(req,res)=>{
    res.render('about',{page:'about'})
 })

 app.get("/service",(req,res)=>{
    res.render('service',{page:'service'})
 })

 app.get("/blog",(req,res)=>{
    res.render('blog',{page:'blog'})
 })

 app.get("/contact",(req,res)=>{
    res.render('contact',{page:'contact'})
 })

 app.get("/shop",(req,res)=>{
    res.render('shop',{page:'shop'})
 })




app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})