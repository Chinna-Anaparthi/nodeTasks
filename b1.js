var express=require('express');
var app=express();
var database=require('./b')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen(4002,()=>
{
console.log("server working.....!");
})
app.post("/insert",(req,res)=>
{
database.addEmployee(req.body.username,req.body.password)
.then((empdata)=>
{
res.send(empdata);
})
.catch(()=>
{
res.send("Their is no data")
})
})