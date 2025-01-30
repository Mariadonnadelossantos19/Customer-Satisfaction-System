const mongoose = require("mongoose");

const customerEvaluationSchema = new mongoose.Schema({
  speedAndTimeliness: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  qualityOfService: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  relevanceOfService: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  staffCompetence: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  staffAttitude: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  overallPerception: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  likelihoodScore: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  helpUsImprove: {
    type: String,
  },
});

module.exports = customerEvaluationSchema;
