const express = require('express');
const app = express();
require("./dbconn/connection")
require("dotenv").config();
const port = process.env.PORT;

const router = require('./router/route')
const cors= require("cors")
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(router);

app.listen(port, ()=>{
    console.log(`server running on port number ${port}`);
})