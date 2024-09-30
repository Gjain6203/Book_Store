const User = require("../model/user.model.js") ;
const bcryptjs = require ("bcryptjs")




exports.signup = async(req,res)=>{
     
    try {
        const {fullName,email,password} =req.body;
        const user = await User.findOne({email:email})
        if(user){
            return res.status(400).send({message:"Email already exist"})
        }
        const hashedPassword = await bcryptjs.hash(password,10)
        const createdUser = new User({
           fullName: fullName,
           email: email,
            password: hashedPassword,
        });

       await createdUser.save();
        res.status(200).send({message:"UserCreated Successfully",data:createdUser})
    } catch (error) {
        res.status(500).send({message:"error",error:"error"})       
    }
}






exports.login = async(req,res)=>{
    try {

        const{email,password}=req.body;
        const user = await User.findOne({email:email})

        const isMatch = await bcryptjs.compare(password,user.password)

        if(!user || !isMatch){
            return res.status(400).send({message:" Invalid Email or password found"})
        }
        else{
            res.status(200).send({message:"Login Successfully ",data:user})

        }
   
         
    } catch (error) {
        res.status(500).send({message:"error",error:"error"})
    }
}