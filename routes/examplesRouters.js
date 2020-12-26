const express = require('express')

const route = express.Router()

const method = require("../controller/example")
route.get('/ex',method)

module.exports = route