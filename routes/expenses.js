const express = require("express");
const router = express.Router();

// import controller
const {createExpense} = require("../controllers/createExpense");

// define api rputes

router.post("/createExpense",createExpense);

module.exports = router;