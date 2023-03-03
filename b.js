const mysql=require('mysql2')

const connection=mysql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"root",
    database:"sample1"
})
connection.connect((err,res)=>
{

    if(err){
        console.log("failed")
    }
    else{
        console.log("succefully connected")
    }
})
function addEmployee(u,s)
{
return new Promise((resolve,reject)=>{
pool.query('insert into login1(username,password) values(?,?)',[u,s],(err,res)=>
{
if(err)
{
reject(err)
}
else{
resolve(res);
}
})

})
}
module.exports={addEmployee}