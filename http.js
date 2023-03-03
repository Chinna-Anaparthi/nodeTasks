var http=require('http')
http.createServer((req,res)=>
{
    res.write("hi i am chinna");
    res.end();
}).listen(8080,()=>
{
   console.log("http server run sucessfully....!");
});