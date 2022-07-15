const express = require("express")
const fetch = require("node-fetch");
const { Headers } = fetch;

// From docs (http://opendata.smhi.se/apidocs/metfcst/index.html):
// coordinates = [longitude, latitude] This is the nearest grid point to the point you asked for in query parameters.
// approvedTime = When the meteorologist approved the calculated forecast.
// referenceTime = When the forecast was calculated (the start time for the forecast).

// Normally, a new forecast is approved once every hour, but notice that there can be occasions that differ.

const formatWeatherData = (data) => {
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
            date: obj.validTime.split("T")[0],
            time: obj.validTime.slice(11, 13),
            temperatureCelsius: Math.round(temp.values[0]),
            precipitation: precipitation.values[0],
            weatherSymbol: symbol ? symbol.values[0] : null,
        };
    });

    function groupBy(array, key) {
        return array.reduce(function(result, currentValue) {
            if (!result[currentValue[key]]) {
                result[currentValue[key]] = [];
            }
            result[currentValue[key]].push(currentValue);
            return result;
        }, {});
    }

    const forecastsByDate = groupBy(timeIntervals, 'date');

    const dates = Object.keys(forecastsByDate);

    return { coordinates, referenceTime, approvedTime, forecastsByDate, dates };
};

function getAllForecasts(req, res) {
    const url =
        "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json";

    fetch(url)
        .then((res) => res.json())
        .then((data) => formatWeatherData(data))
        .then((data) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(data)
        })
        .catch((err) => {
            res.redirect("/error");
        });
}

module.exports = getAllForecasts;