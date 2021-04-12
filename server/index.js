const express = require("express");
const cors = require('cors');
const router = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

const validation = require('./validationsMiddleware/validateSchema');
const userSchema = require('./validationsSchema/schema');

app.listen(3003, ()=>{
    console.log('the server is running ')
    // send("he")
})









