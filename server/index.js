const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

const SELECT_ALL_USERS = "SELECT * FROM signup";

app.use(cors());
app.use(express.json());

const validation = require('./Middlewares/validation');
const userSchema = require('./Validations/signupValidation');

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bitnami',
    database: "itgdatabase"

})

// connection.connect(err =>{
//     if (err){
//     return err;
//     }
// });


// app.get()

app.get('/users', (req, res) =>{
    connection.query(SELECT_ALL_USERS, (err,results)=>{
        if(err){
            return res.send(err)
        } else{
            return res.json({
                data: results
            })
        }
    });
});





// app.post("/user", (req, res)=>{
//     res.status(200).send(req.body);    

// })


// // VALIDATION USERSCHEMA 
// app.post("/signup", validation(userSchema), (req, res)=> {
//     res.status(200).send(req.body);
//     // console.log("bhoa")
// });





app.listen(3003, ()=>{
    console.log('idiot server running ')
    // send("he")
})