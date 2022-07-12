const express = require("express");
const getAllForecasts = require("../controllers/allForecasts");
const getDailyForecast = require("../controllers/dailyForecast");
let router = express.Router();

router.get('/all', getAllForecasts);

router.get('/:day', getDailyForecast);

module.exports = router;