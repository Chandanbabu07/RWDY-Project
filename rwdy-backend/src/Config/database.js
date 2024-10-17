const mongoose = require("mongoose");

const URI =
  "mongodb+srv://chandanbabu705:Chandan17@rwdy.ncvzj.mongodb.net/rwdy";
const connectDB = async () => {
  await mongoose.connect(URI);
};

module.exports = connectDB;
