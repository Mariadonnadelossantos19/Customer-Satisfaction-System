const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  wereQueriesAnswered: {
    type: Boolean,
  },
  subjectInterest: {
    type: String,
    enum: [
      "Food Processing",
      "Gifts, Housewares, Decors",
      "Agriculture/ Horticulture",
      "Aquaculture/Marine",
      "Furniture",
      "Metals & Engineering",
      "Health and Pharma.",
      "ICT",
      "Others",
    ],
    default: null,
  },
  othersubjectInterest: {
    type: String,
    required: function () {
      return this.subjectInterest === "Others";
    },
    default: null,
  },
  mainReasonforUsing: {
    type: String,
    enum: [
      "To support course of study/school requirement",
      "Leisure/general enjoyment",
      "Independent learning/research",
      "Others",
    ],
    default: null,
  },
  otherReasonforUsing : {
    type: String,
    required: function () {
      return this.mainReasonforUsing === "Others";
    },
    default: null,
  },
});

module.exports = librarySchema;
