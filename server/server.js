const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8000

const router = require('./routes')

app.use("/weather/", router)

app.use(express.static('public'))

app.listen(PORT, (err) => {
    if (err) { console.log(err) }
    console.log(`Server is running on http://localhost:${PORT}`)
})