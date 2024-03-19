const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors"); // connect to different host(here, frontend 5173)
const app = express();
const { mongoose } = require("mongoose"); //after setting up database
const cookieParser = require("cookie-parser");

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser()); // for jwt authentication
app.use(express.urlencoded({ extended: false })); // jwt authentication
app.use("/", require("./Routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`listening on port ${port}`));
