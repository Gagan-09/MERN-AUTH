const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      //genSalt makes password secure
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

//for th login api
const comparePassword = (password1, hashed) => {
  return bcrypt.compare(password1, hashed);
};

module.exports = {
  hashPassword,
  comparePassword,
}
