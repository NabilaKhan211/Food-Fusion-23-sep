
// ----------------------------------- Main.js -------------------------------------------

const express = require("express");
const bodyParser = require("body-parser");
const cashierRoute = require("./app/routes/cashier/cashierRoute");
// const amdminRoute = require("./app/routes/cashier/adminRoute");
const connectDB = require("./app/config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// Connect to the database
connectDB();

// Initiate express app
const app = express();

const port = process.env.PORT || 9001;

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// cashier
app.use("/food-fusion/cashier", cashierRoute);

// admin
// app.use("/food-fusion/admin", amdminRoute);


// Starting the server

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});







