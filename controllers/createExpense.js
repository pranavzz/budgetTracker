const Expense = require("../models/expense");

exports.createExpense = async(req,res)=>{
    try{
        // destrucutring
        const {title,amount,category} = req.body;
        const response = await Expense.create({title,amount,category});
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    }
    catch(err){
            console.error(err);
            console.log(err);
            res.status(500)
            .json({
                success:false,
                data:"Internal server error",
                message:err.message,
            })
    }
}

