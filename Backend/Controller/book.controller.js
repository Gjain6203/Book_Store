 const Book = require("../model/book.model")


 exports.getBook = async(req,res)=>{
    try {
        const book = await Book.find()
        res.status(200).send({message:" fetched " ,data: book })
    } catch (error) {
        res.status(500).send ({message:"error", error:"error"})
    }
 }


 