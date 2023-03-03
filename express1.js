var express=require('express');
var jwt=require('jsonwebtoken')
var app=express();
app.get('/getdata',(req,res,next)=>
{
    res.json({
        message:"hi i am chinna"
    })
})
app.post('/data',verify,(req,res,next)=>
{
    jwt.verify(req.token,'sk',(err,auth)=>
{
    if(err)
    {
        res.sendStatus(403);
    }
    else{
        res.json({
            message:"post madhu", 
            auth:auth
        })
    }
} )
    
})
app.post('/jwt',(req,res,next)=>
{    
    const data={
        id:1,
        name:"chinna",
        email:"1@gmail.com"
    }
   jwt.sign({data},'sk',{expiresIn:'30s'},(err,token)=>
   {
    res.json({
        token:token
    })
   });
})
function verify(req,res,next)
{
    const bh=req.headers['authorization'];
    if(typeof bh !=='undefined')
    {
      const bearer=bh.split(' ');
      const bearerToken=bearer;
      req.token=bearerToken;
      next();
    }
    else{
        res.sendStatus(403);
    }
}
app.listen(4002,()=>
{
    console.log("server running sucessfully... !");
})
//////////////////////////////////
const {Sequelize,DataTypes } = require('sequelize')
const joi=require('joi')
const express = require('express');
const bodyParser = require('body-parser');
var check = joi.object({
    Username: joi.string().min(4).max(10).email().required(),
    Passwords: joi.string()
    .min(8)
    .max(20).required()
    
    })
const app = express();

app.use(bodyParser.json());


var sequelize = new Sequelize('sampledata', 'root', 'root',{
    host: 'localhost',
    dialect:'mysql' 
});
const data1 = sequelize.define('datalogin', {
    username: {
    type: DataTypes.STRING,
    },
    password: {
    type: DataTypes.STRING,
    }
   
    })

 
sequelize.sync().then(() => {
    console.log('data table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


app.post('/insert', (request, response)=> {
    var error=check.validate((err,result)=>
    {
          if(err)
          response.send(error.res.message);
          response.send(result)

    });
    data1.create({
        id: request.body.id,
        username: request.body.username,
        password: request.body.password,
       
    }).then( (data1)=> {
        if ('') {
            response.send(data1);
        } else {
          
            response.status(400).send('Error in insert new record');
        }
    });
});
// app.get('/get',async function (request, response) {
//     return await users.findAll({
//     }).then(function (users) {
//         if (users) {
//             response.send(users);
//         } else {
//             response.status(400).send('Error in insert new record');
//         }
//     });
// });
// app.get('/getdata',async function (request, response) {
//     var page=request.Sequelize;
//     var size=request.Sequelize
//     return await users.findAll({
//         offset:size,
//         limit:page * size
//     }).then(function (users) {
//         if (users) {
//             response.send(users);
//         } else {
//             response.status(400).send('Error in insert new record');
//         }
//     });
// });
// app.put('/update', async function (request, response) {
//     return await users.update({
//         id: request.body.id,
//         name: request.body.name,
//         phno: request.body.phno,
//         address: request.body.address
//     },
//     {
//         where:{id:request.body.id}
//     }).then(function (users) {
//         if  (users) {
//             response.send(users);
//         } else {
        
//             response.status(400).send('Error in insert new record');
//         }
//     });
// });
// app.delete('/delete',async function (request, response) {
//     return await users.destroy({
//      where:{id:request.body.id}
//     }).then(() => {
//        response.send("deleted")
//      }).catch((error) => {
//         console.error('Unable to create table : ', error);
//      });
 
// })
app.listen(4010, function () {
    console.log('Express server is listening on port 4010');
});
