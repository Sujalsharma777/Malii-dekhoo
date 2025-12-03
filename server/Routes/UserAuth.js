const express = require("express")


const {NewUser,LoginUser} = require("../Controller/AuthController.js")

const router = express.Router();


router.post('/register',NewUser);
router.post('/logins', LoginUser)


module.exports = router
