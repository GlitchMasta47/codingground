/* Node.js Express server with Bulma */
var colors = require("colors") // Colored console logs
colors.setTheme({
  info: ["bgGreen","white"],
  warn: ["bgYellow","white"]
}) // Set info and warn presets
var express = require("express") // Express server module
var server = express() // Initialize server
var bulma = require("bulma") // Even though Bulma isn't an "interactive module," this will remind the user to install the bulma module if it isn't already installed

