const express = require("express");
const app = express();


const expenseRoutes = require("./routes/expenses");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
// parser

app.use("/api/v1",expenseRoutes);

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage budget</h1>`);
})
