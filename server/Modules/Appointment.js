const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    service_name: { type: String, required: true },
    service_description: { type: String, required: true },
    category: { type: String },
    service_category: { type: String },
    service_price: { type: String },
    contact: { type: String },
    city: { type: String },
    district: { type: String },
    state: { type: String },
    pincode: { type: String },
    service_image: { type: String },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true, index: { expires: "0s" } },
    publicId: { type: String },
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auths",
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);
const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;
