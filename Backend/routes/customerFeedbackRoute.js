const express = require("express");
const router = express.Router();
const {
  submitCustomerFeedback,
  fetchHistory,
  deleteAllFeedback,
} = require("../controllers/customerFeedback");

router.get("/get-history", fetchHistory);
router.post("/submit-feedback", submitCustomerFeedback);
router.delete("/delete-feedback", deleteAllFeedback);

module.exports = router;
