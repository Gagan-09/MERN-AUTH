// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const {
//   test,
//   registerUser,
//   loginUser,
//   getProfile
// } = require("../controller/authController");

// // Middleware
// router.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// // Define routes
// router.get("/", test); // Test is defined in the controller

// //post for registeration
// router.post("/register", registerUser); // Register

// //post for login
// router.post("/login", loginUser); //1. Login end point  2. After bcrypting password

// //get for profile
// router.get("/profile", getProfile); // Get profile

// logout
// router.get("/logout", logoutUser); // Logout

// // Export the router
// module.exports = router;

const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser, // Import logoutUser from controller
} = require("../controller/authController");

// Middleware
router.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Define routes
router.get("/", test); // Test is defined in the controller
router.post("/register", registerUser); // Register
router.post("/login", loginUser); // Login
router.get("/profile", getProfile); // Get profile
router.get("/logout", logoutUser); // Logout

// Export the router
module.exports = router;