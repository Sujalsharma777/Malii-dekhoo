const Appointment = require("../Modules/Appointment");
const jwt = require("jsonwebtoken");
const User = require("../Modules/User.js");
const Booking = require("../Modules/BookApp.js");

const fetchApi = async (req, res) => {
  try {
    const getApp = await Appointment.find({});

    return res.status(200).json(getApp);
  } catch (error) {
    return res.status(500).json({ message: "Something is wrong", error });
  }
};
const BookAppointment = async (req, res) => {
  const AppointmentInfo = req.body.appointment;
  const UserInfo = req.body.userinfo;

  try {
    const data = new Booking({
      Appointment_id: AppointmentInfo._id,
      User_id: UserInfo.id,
    });

    await data.save();
    return res
      .status(200)
      .json({ success: true, message: "Appointment Booked ", data });
  } catch (error) {
    return res.status(500).json({ message: "Something is wrong ", error });
  }
};
const AppointmentStatus = async (req, res) => {
  const UserId = req.params.id;

  try { 
    const data = await Booking.find({ User_id: UserId });
    
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: "Something is wrong ", error });
  }
};


module.exports = {
  fetchApi,
  BookAppointment,
  AppointmentStatus,
};
