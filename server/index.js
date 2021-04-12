const express = require("express");
const router = require("./routes");
const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3003, ()=>{
    console.log('..server is running ')
    // send("he")
})









