const express = require("express")
const fetch = require("node-fetch")
const { Headers } = fetch
const nodecache = require('node-cache')
const appCache = new nodecache({ stdTTL: 60 })

// Docs (http://opendata.smhi.se/apidocs/metfcst/index.html)

const formatWeatherData = (data) => {
    const {
        approvedTime,
        timeSeries,
    } = data

    let timeIntervals = timeSeries.map(function(obj) {
        const temp = obj.parameters.find((param) => param.name === "t")

        // Precipitation value is "mean precipitation intensity" (mm/h)

        const precipitation = obj.parameters.find(
            (param) => param.name === "pmean"
        )

        const symbol = obj.parameters.find((param) => param.name === "Wsymb2")

        return {
            date: obj.validTime.split("T")[0],
            time: obj.validTime.slice(11, 13),
            temperatureCelsius: Math.round(temp.values[0]),
            precipitation: precipitation.values[0],
            weatherSymbol: symbol ? symbol.values[0] : null,
        }
    })

    function groupBy(array, key) {
        return array.reduce(function(result, currentValue) {
            if (!result[currentValue[key]]) {
                result[currentValue[key]] = []
            }
            result[currentValue[key]].push(currentValue)
            return result
        }, {})
    }

    const forecastsByDate = groupBy(timeIntervals, 'date')

    const dates = Object.keys(forecastsByDate)

    return { approvedTime, forecastsByDate, dates }
}

async function getAllForecasts(req, res) {
    const url =
        "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json"

    if (appCache.has('forecasts')) {
        return res.send(appCache.get('forecasts'))
    } else {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => formatWeatherData(data))
            .then((data) => {
                res.setHeader("Access-Control-Allow-Origin", "*")
                appCache.set("forecasts", data)
                res.send(data)
            })
            .catch((err) => {
                res.redirect("/error")
                console.log(err)
            })

    }

}

module.exports = getAllForecasts