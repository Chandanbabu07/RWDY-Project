const express = require("express");
const { signupAuth } = require("../Controllers/userAuthControllers");

const router = express.Router();

router.route("/signup").post(signupAuth);

module.exports = router;
