const express = require("express");
const router = express.Router();
const { submitCustomerFeedback } = require("../controllers/customerFeedback");


router.post("/submit-feedback", submitCustomerFeedback);

module.exports = router;
