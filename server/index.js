const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require("body-parser");
const router = require("./routes");
const app = express();
const SELECT_ALL_USERS = "SELECT * FROM signup";


app.use(cors());
app.use(express.json());
app.use('/', router);



const validation = require('./validationsMiddleware/validateSchema');
const userSchema = require('./validationsSchema/schema');


// connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'bitnami',
//     database: "itgdatabase"
// })
// console.log(connection);

// app.post("/", (req, res, next) => {
//     res.send({ name: "checho", surname: "perez"});
//    });

app.listen(3003, ()=>{
    console.log('...the server running ')
    // send("he")
})


// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting');
//       return;
//     }
// })


// app.get()

// app.get('/users', (req, res) =>{
//     connection.query(SELECT_ALL_USERS, (err,results)=>{
//         if(err){
//             return res.send(err)
//         } else{
//             return res.json({
//                 data: results
//             })
//         }
//     });
// });





// app.post("/user", (req, res)=>{
//     res.status(200).send(req.body);    

// })


// // VALIDATION USERSCHEMA 
// app.post("/signup", validation(userSchema), (req, res)=> {
//     res.status(200).send(req.body);
//     // console.log("bhoa")
// });





