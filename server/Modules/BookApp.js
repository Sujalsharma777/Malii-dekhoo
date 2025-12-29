const mongoose = require("mongoose");

const BookApp = new mongoose.Schema(
  {
    Appointment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },
    User_id: {
      type: mongoose.Types.ObjectId,
      ref: "Auth",
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "cancelled"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: { createdAt: "Book_at", updatedAt: "Modify_at" } }
);
const Booking = mongoose.Schema.Booking || mongoose.model("Booking", BookApp);
module.exports = Booking;
