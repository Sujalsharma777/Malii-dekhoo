const Auth = require("../Modules/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken") 
require("dotenv").config();
const NewUser = async (req, res) => {
  const {
    name,
    email,
    contact,
    houseNum,
    street,
    city,
    district,
    state,
    pincode,
    role,
    password,
  } = req.body;
  try {
    let User = await Auth.findOne({ email });
    // chick if LoginUser email is already available or not
    if (User) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Registered" });
    }

    // hash password
    const bcryptPassword = await bcrypt.hash(password,10);
     User  = new Auth({
      name,
      email,
      contact,
      houseNum,
      street,
      city,
      district,
      state,
      pincode,
      role,
      password: bcryptPassword,
    });

    await User.save()
    return res.status(200).json({success:true, message:"User Register Successfully"})
  } catch (error) {
    return res.status(500).json({success:false , message:"Server Cannot Response"})
  }
};


/* Login controller  */

const LoginUser = async (req,res) =>{
  
const {email, password} = req.body ;

try{
  const LoginUser = await Auth.findOne({email});

  if(!LoginUser){
    return res.status(400).json({success:false, message:"User not existed  "})
  }
  const isMatch = await  bcrypt.compare(password , LoginUser.password) ;
  if(!isMatch){
    return res.status(401).json({success:false, message:"Incorrect Password"})
  }
  const token = jwt.sign(
    {email : LoginUser.email , id: LoginUser._id}
    , process.env.JWT_SECRET,  
    {expiresIn:"24h"}
  )
  res.cookie("token", token, {
    httpOnly : true, 
secure : false , 
    maxAge: 3600000,

  })
   res.status(200).json({success:true,message:"Login Successfully", 
    token,
    LoginUser :{id:LoginUser._id,name:LoginUser.name ,email:LoginUser.email, role:LoginUser.role},
   })
}catch(error){
res.status(500).json({success:false , message : "Something is wrong",error:error.message})
}


}






module.exports= {NewUser, LoginUser};