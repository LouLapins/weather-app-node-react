const express = require('express');
const fetch = require('node-fetch');
const { Headers } = fetch;
let router = express.Router();

router.get('/all', (req, res) => {

    const url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(data);
        })
        .catch(err => {
            res.redirect('/error');
        });
});

module.exports = router;