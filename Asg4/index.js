const express=require('express')
const app=express();

const PORT=process.env.port || 3000;
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
app.listen(PORT,(req,res)=>{
    console.log("Server is started")
})