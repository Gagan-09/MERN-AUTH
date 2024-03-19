const User = require("../models/user"); //import the users from login.js
const { hashPassword, comparePassword } = require("../helpers/auth"); //
const jwt = require("jsonwebtoken"); //jwt

//
const test = (req, res) => {
  // setIsLoggedIn(true);
  res.json("Test is working");
};

//after db setup
//register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be atleast 6 characters",
      });
    }
    //check email exists or not
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email is already in use" });
    }
    //if everything is fine then save user to
    const hashedPassword = await hashPassword(password); //after writing auth.js
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //return response
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; //email and password is what being requested

    //check if user exits
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "User does not exist. Please create a new account",
      });
    }

    //check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      // res.json("Password matched, Login successful");
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          //check env for JWT_SECRET
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      return res.json({
        error: "Password does not match, please enter correct password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//get profile endpoint
const getProfile = (req, res) => {
  const { token } = req.cookies; //obtain token from the requested cookies ....must be logged in first
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const logoutUser = (req, res) => {
  // Clear the token by setting an empty token cookie
  res.clearCookie("token").json({ message: "Logout successful" });
};

//
module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
