const express=require('express')
const app=express();


app.use((req,res,next)=>{
    const timestamp = new Date().toISOString();
    const { method, originalUrl } = req;
    const accessToken = req.headers.authorization
    console.log(`[${timestamp}] ${method}: ${originalUrl}, AccessToken: "${accessToken}"`);
    next();
})
app.get('/user',(req,res)=>{
    res.json("Hi from Mohuit")
})
app.listen('3000',(req,res)=>{
    console.log("Server is started")
})