const express = require("express")

const router = express.Router();

const validation  = require('../Middleware/Validation.js')

router.post('/app',SuppAuth);
