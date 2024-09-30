const express = require ("express")

const router = express.Router();

const bookController = require ("../Controller/book.controller.js")



router.get("/getBook",bookController.getBook)
 
 // http://localhost:3000/books/getBook



module.exports = router;