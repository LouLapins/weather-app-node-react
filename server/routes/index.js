const express = require("express");
const getForecasts = require("../controllers/allForecasts");
let router = express.Router();

router.get('/all', getForecasts);

module.exports = router;