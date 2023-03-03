const Sequelize = require('sequelize')
const joi=require('joi')
const express = require('express');
// import emailCheck from "email-check";
var emailCheck=require('email-check')
const bodyParser = require('body-parser');
var check = joi.object({
    Username: joi.string().min(4).max(10).email().required(),
    Passwords: joi.string()
    .min(8)
    .max(20).required()
    
    })
const app = express();

app.use(bodyParser.json());


var sequelize = new Sequelize('sample', 'root', 'root',{
    host: 'localhost',
    dialect:'mysql' 
});
const data1 = sequelize.define('users', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING
    })

 
sequelize.sync().then(() => {
    console.log('data table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


app.post('/insert', (request, response)=> {
    data1.create({
                id: request.body.id,
                username: request.body.username,
                password: request.body.password
            }).then(function (data1) {
                if (data1) {
                    response.send(data1);
                } else {
                    response.status(400).send('Error in insert new record');
                }
            });
});

app.listen(4010, function () {
    console.log('Express server is listening on port 4010');
});
