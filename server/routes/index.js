const express = require("express");
const getAllForecasts = require("../controllers/allForecasts");
let router = express.Router();

router.get('/all', getAllForecasts);

module.exports = router;