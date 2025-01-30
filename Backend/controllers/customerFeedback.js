const dotenv = require("dotenv");
dotenv.config();
const CustomerProfile = require("../models/customerProfile");

const submitCustomerFeedback = async (req, res) => {
  try {
    const {
      name,
      institution,
      address,
      contact,
      classification,
      specificProfessional,
      otherClassification,
      firstVisit,
      gender,
      age,
      withDisability,
      educationLevel,
      otherEducation,
      service,
      customerEvaluation,
      libraryUser
    } = req.body;

    if (
      !name ||
      !institution ||
      !address ||
      !contact ||
      !classification ||
      !gender ||
      !age ||
      !educationLevel ||
      !service || 
      !customerEvaluation ||
      !libraryUser
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (educationLevel === "Others" && !otherEducation) {
      return res.status(400).json({ message: "Please specify other education level." });
    }

    const customerProfile = new CustomerProfile({
      name,
      institution,
      address,
      contact,
      classification,
      specificProfessional,
      otherClassification,
      firstVisit,
      gender,
      age,
      withDisability,
      educationLevel,
      otherEducation,
      service,
      customerEvaluation,
      libraryUser
    });
    await customerProfile.save();

    return res.status(201).json({
      message: "Feedback submitted successfully",
      customerProfile,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { submitCustomerFeedback };
