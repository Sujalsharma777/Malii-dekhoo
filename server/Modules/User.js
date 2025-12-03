const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  houseNum: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
    district: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    require: true,
  },
  Booking: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

const Auth = mongoose.models.Auth || mongoose.model("Auth", UserSchema);
module.exports = Auth;
