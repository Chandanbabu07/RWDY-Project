const express = require("express");
const connectDB = require("./Config/database");
const userAuthRoutes = require("./Routes/userAuthRoutes");

const server = express();

server.use(express.json());

server.use("/authentication", userAuthRoutes);

connectDB().then(() => {
  console.log("Database Connected Success Fully");
  server.listen(1700, () => {
    console.log("Server running successfully in 1700 port");
  });
});
