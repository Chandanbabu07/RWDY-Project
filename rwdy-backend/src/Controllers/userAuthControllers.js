const asyncHandler = require("express-async-handler");

const signupAuth = asyncHandler(async (req, res) => {
    const { name, email, phoneNumber, referalCode, dateOfBirth } = req.body;
    
    
});

module.exports = { signupAuth };
