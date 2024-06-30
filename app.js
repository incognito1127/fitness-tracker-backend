// DEPENDENCIES
const express = require("express");
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json())

// CONTROLLERS
const workoutsController = require("./controllers/workoutsController")