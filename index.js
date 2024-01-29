const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
// parser

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage budget</h1>`);
})
