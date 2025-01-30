const mongoose = require("mongoose");
const service = require("./service.js");
const customerEvaluation = require("./customerEvaluationorFeedaback.js");
const libraryUser = require("./libraryUser.js");

const customerProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  classification: {
    type: String,
    enum: [
      "Student",
      "Owner of a business",
      "Employee of a business",
      "Government employee",
      "Professional",
      "Overseas Filipino Worker",
      "Not employed (retiree/displaced)",
      "Others",
    ],
    required: true,
  },
  specificProfessional: {
    type: String,
    required: function () {
      return this.classification === "Professional";
    },
    default: null,
  },
  otherClassification: {
    type: String,
    required: function () {
      return this.classification === "Others";
    },
    default: null,
  },

  firstVisit: { type: Boolean, default: true },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  age: {
    type: String,
    enum: [
      "15 & below",
      "16-20",
      "21-30",
      "31-40",
      "41-50",
      "51-59",
      "60 & above",
    ],
    required: true,
  },
  withDisability: { type: Boolean, default: true },
  educationLevel: {
    type: String,
    enum: ["Elementary", "High School", "College", "Masters/PhD.", "Others"],
    required: true,
  },
  otherEducation: {
    type: String,
    required: function () {
      return this.educationLevel === "Others";
    },
    default: null,
  },
  service: {
    type: service,
  },
  customerEvaluation: {
    type: customerEvaluation
  },
  libraryUser : {
    type: libraryUser
  }
});

module.exports = mongoose.model("customerProfile", customerProfileSchema);
