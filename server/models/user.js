const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  //for defining schema
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;
