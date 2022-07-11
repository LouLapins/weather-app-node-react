const express = require("express")
const fetch = require("node-fetch");
const { Headers } = fetch;

const formatDays = (data) => {
    const {
        geometry: { coordinates },
        referenceTime,
        approvedTime,
        timeSeries,
    } = data;

    let timeIntervals = timeSeries.map(function(obj) {
        const temp = obj.parameters.find((param) => param.name === "t");

        // Precipitation value is mean precipitation intensity (mm/h)

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

    return { coordinates, referenceTime, approvedTime, timeIntervals };
};

function getDays(req, res) {
    const url =

        "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/validTime.json";

    fetch(url)
        .then((res) => res.json())
        .then((data) => formatDays(data))
        .then((data) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(data)
        })
        .catch((err) => {
            res.redirect("/error");
        });
}

module.exports = getDays;