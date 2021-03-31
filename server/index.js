const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require("body-parser");


// connection to database
const dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bitnami",
    database: "itgdatabase"

})

app.use(cors());



// simple route
app.get("/", (req, res) => {
  res.json({ message: " Hi." });
});

// INSERT INTO `users` (`id`, `email`, `password`) VALUES
// (1, 'billy@example.com', 'password1'),
// (2, 'adrian@example.com', 'password2');

app.get("/data", (req, res)=> {
    
    const sqlInsert = "INSERT INTO `signup` (`fullName`, `phoneNumber`, `email`, `age`) VALUES (?, ?, ?, ?, ?)"
    dbconnection.query(sqlInsert, (err, res)=> {
        
        res.send("...nodemon... of backend");

    })

});



app.listen(3003, ()=>{
    console.log("port 3003");
})