const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, "..", "..", `${process.env.NODE_ENV}.env`)
});

export default {
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || '192.168.18.6',
  BASE_URL_API: process.env.BASE_URL_API || 'http://192.168.18.6:3000/api/',
  signUpRedirect: process.env.signUpRedirect || 'http://192.168.18.6:5500/auth/signUp' ,
  signInRedirect: process.env.signInRedirect || 'http://192.168.18.6:5500/auth/signIn' 
 
}