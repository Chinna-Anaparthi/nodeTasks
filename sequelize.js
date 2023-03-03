// const Sequelize = require('sequelize');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));

// var sequelize = new Sequelize('sample', 'root', 'root',{
//     host: 'localhost ',
//     dialect:'mysql2' 
// });

// const users = sequelize.define('users', {
//     id: {
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//     },
//     name: Sequelize.STRING,
//     role: Sequelize.STRING,
//     email: Sequelize.STRING
// });
 
// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });

// // app.post('/insert', async function (request, response) {
    // //     return await users.create({
    // //         id: request.body.id,
    // //         name: request.body.name,
    // //         role: request.body.role,
    // //         email: request.body.email
    // //     }).then(function (users) {
    // //         if (users) {
    // //             response.send(users);
    // //         } else {
    // //             response.status(400).send('Error in insert new record');
    // //         }
    // //     });
// // });
// // app.get('/get',async function (request, response) {
// //     return await users.findAll({
// //     }).then(function (users) {
// //         if (users) {
// //             response.send(users);
   
   
// //         } else {
// //             response.status(400).send('Error in insert new record');
// //         }
// //     });
// // });



// app.listen(3005, function () {
//     console.log('Express server is listening on port 3005');
// });