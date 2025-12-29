const express = require("express")
const router = express.Router()

const {fetchApi,BookAppointment,AppointmentStatus} =  require("../Controller/CustomerControler.js")

router.get('/appointment' ,fetchApi)

router.post('/appointment/booking' ,BookAppointment) 
router.get('/appointment/booking/:id',AppointmentStatus )


module.exports=router 