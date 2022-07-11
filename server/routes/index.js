const express = require("express");
const getWeather = require("../controllers/weather");
const getDays = require("../controllers/days");
let router = express.Router();

router.get('/all', getWeather);

router.get('/days', getDays);

module.exports = router;