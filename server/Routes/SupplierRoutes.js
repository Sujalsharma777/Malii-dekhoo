const express = require("express")

const routers = express.Router();

const {CreateAppointment , uploadImage ,GetSuppAppoinment ,DeleteAppointment} = require('../Controller/supplierController.js')
const {isSupplier} = require("../Middleware/SupplierVarification.js")
const {authMiddleware} = require("../Middleware/Validation.js")
routers.post("/createAppointment",isSupplier, uploadImage, CreateAppointment)
routers.get("/GetAppointment",authMiddleware, GetSuppAppoinment)
routers.delete("/deleteAppointment/:id", isSupplier , DeleteAppointment)
module.exports = routers