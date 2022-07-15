# Stockholm Royal Palace Weather App #
### About
A company gave me this assignment as part of a job application process. 
It is a weather app serving data from [SMHI](https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json). It is built with React, Node.js and Typescript.

****
### Instructions for assignment
This test will assess your abilities in React, modern JavaScript, Node.js and interacting with an API. If you are able to, utilize typescript. Try to ensure a reasonable level of error handling.

Create a Node.js webservice that fetches, caches and serves a weather forecast for the Royal Palace in Stockholm. I recommend using SMHI. Discard all superfluous information; information not displayed by the frontend.

Create a React SPA that displays the data from your webservice. On the landing page, display the weather for a given day (by default, the current date), in whatever way you deem fit. Make a reasonable attempt to make the page attractive.

You are welcome to use weather-icons-react, but you are not required or limited to use it. Add navigation buttons to view the previous/following day.

Implement routing in your SPA. 

A user should be able to bookmark a given day, and, if the data is still available via the API, open this bookmark back up to check the forecast for that day.

### Run locally
To run locally, clone repo, open project and terminal.

### Project setup
```
npm install
```
### Run backend
```
cd server && npm run start
```
### Run frontend
```
cd client && npm run start
```
The frontend server will run on http://localhost:3000, where you can try the app.
