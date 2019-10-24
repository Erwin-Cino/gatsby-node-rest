const gatsyExpress = require("gatsby-plugin-express")
const express = require("express")
const app = express()

const dataRoute = require("../api/routes/data")
app.use("/data", dataRoute)
