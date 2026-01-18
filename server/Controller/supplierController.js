const Appointment = require("../Modules/Appointment.js");
const path = require("path");
const dotenv = require("dotenv");
const booking = require("../Modules/BookApp.js");
const jwt = require("jsonwebtoken");
const UserModule = require("../Modules/User.js");
dotenv.config();
const cloudinary = require("cloudinary").v2;
/* this is multer and cloudinary logics to upload image */
const multer = require("multer");
const Booking = require("../Modules/BookApp.js");
const storage = multer.diskStorage({
  filename: function (req, file, cd) {
    cd(
      null,
      (file.filename = "-" + Date.now() + path.extname(file.originalname))
    );
  },
});
const upload = multer({ storage });
const uploadImage = upload.single("service_image");

// cloudinary env config
cloudinary.config(process.env.CLOUDINARY_URL);
const CreateAppointment = async (req, res) => {
  // cloudinary req to save image in cloudinary database
  const cloudinaryrespone = await cloudinary.uploader.upload(req.file.path, {
    folder: "Mali_Dekho_images",
  });

  const {
    service_name,
    service_description,
    category,
    service_category,
    service_price,
    contact,
    city,
    district,
    state,
    pincode,
    start_time,
    end_time,
  } = req.body;

  try {
    const App = new Appointment({
      service_name,
      service_description,
      category,
      service_category,
      service_price,
      contact,
      city,
      district,
      state,
      pincode,
      publicId: cloudinaryrespone.public_id,
      service_image: cloudinaryrespone.secure_url, // use for save secure url in mongodb
      start_time,
      end_time,
      supplier_id: req.user._id, // use for save supplier id
    });
    await App.save();
    return res
      .status(200)
      .json({ success: true, message: "Appointment Publish " });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${error}` });
  }
};

// for get all data in DB and res to client
const GetSuppAppoinment = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const Newuser = decode.id;

    const AppointmentData = await Appointment.find({ supplier_id: Newuser });

    return res.status(200).json(AppointmentData);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const DeleteAppointment = async (req, res) => {
  const itemID = req.params.id;

  try {
    const deleteItems = await Appointment.findByIdAndDelete(itemID);

    await cloudinary.uploader.destroy(deleteItems.publicId, {
      invalidate: true,
    });

    if (!deleteItems) {
      return res.status(404).json({ message: "Appointment Not Deleted" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting the product" });
  }
};
const GetBookedAppointment = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const Newuser = decode.id;
    const appointments = await Appointment.find({ supplier_id: Newuser })
    const appointmentData = appointments.map((a)=>a._id).toString()
    const booked = await Booking.find({Appointment_id:{$in : appointmentData}}).populate("Appointment_id").populate("User_id")
    console.log(booked)
    return res.status(200).json({
      success: true,
      count: booked.length,
      data: booked,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${error}` });
  }
};
const UpdateStatus = async (req,res) =>{
  
   const { id, status } = req.body
   
 try{
  const book = await booking.findById({_id:id})
  console.log(book )
  if(status === "accepted"){
  book.status = status
  await book.save()}if(status === "rejected"){
book.status = status
  await book.save()
  }
  res.status(200).json({success:true,message:'Update status success'})
}
catch(error){
  res.status(500).json({success:false , message:`Server error ${error}`})
}
}

module.exports = {
  CreateAppointment,
  uploadImage,
  GetSuppAppoinment,
  DeleteAppointment,
  GetBookedAppointment,
  UpdateStatus
};
