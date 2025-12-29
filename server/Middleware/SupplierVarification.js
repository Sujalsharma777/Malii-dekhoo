const jwt = require("jsonwebtoken");
const UserModule = require("../Modules/User.js")

const isSupplier =  async (req,res,next) =>{
 
    try {
        const token = req.cookies.token
        if(!token){
            res.status(403).json({success:false,message:"No token found "});

        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);

        const Newuser = await UserModule.findById(decode.id);
        
        if(!Newuser){
               res.status(402).json({message:"User Not Found "});
        }
        if(Newuser.role !== "Supplier"){
             res.status(401).json({message:"User is not Supplier"});
        }
        req.user = Newuser
        next()
    } catch (error) {  
        return res.status(500).json({success:false, message:`Server error ${error} `})
    }
}
module.exports = { isSupplier };