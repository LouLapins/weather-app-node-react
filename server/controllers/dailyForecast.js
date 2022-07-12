const express = require("express")
const fetch = require("node-fetch");
const { Headers } = fetch;

const formatWeatherData = (data, chosenDate) => {
    const {
        geometry: { coordinates },
        referenceTime,
        approvedTime,
        timeSeries,
    } = data;


    let timeIntervals = timeSeries.map(function(obj) {
        const temp = obj.parameters.find((param) => param.name === "t");

        // Precipitation value is "mean precipitation intensity" (mm/h)

        const precipitation = obj.parameters.find(
            (param) => param.name === "pmean"
        );

        const symbol = obj.parameters.find((param) => param.name === "Wsymb2");

        return {
            validTime: obj.validTime,
            date: obj.validTime.split("T")[0],
            time: obj.validTime.slice(11, 16),
            temperatureCelsius: temp.values[0],
            precipitation: precipitation.values[0],
            weatherSymbol: symbol ? symbol.values[0] : null,
        };
    });

    let dailyTimeIntervals = timeIntervals.filter(obj => obj.date === chosenDate);

    return { coordinates, referenceTime, approvedTime, dailyTimeIntervals };
};

function getDailyForecast(req, res) {

    const chosenDate = req.params.day;
    console.log(typeof(chosenDate))
    const url =
        "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json";

    fetch(url)
        .then((res) => res.json())
        .then((data) => formatWeatherData(data, chosenDate))
        .then((data) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(data)
        })
        .catch((err) => {
            res.redirect("/error");
        });
}

module.exports = getDailyForecast;