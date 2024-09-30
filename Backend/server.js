
 const express = require("express");

 const connectDb = require("./config/db")

 const bookRoutes = require ("./route/book.route.js")
 const userRoutes = require ("./route/user.route.js")
  
 const cors = require ("cors");


 const server = express();
 connectDb();

 
 server.use(cors());
 server.use(express.json());


 server.use("/books",bookRoutes);
 server.use("/user",userRoutes);


 







const port = 3000;

 server.listen(port,()=>{
    console.log(`server is a listening on port ${port}`)
    
 })


 // npm run dev

  