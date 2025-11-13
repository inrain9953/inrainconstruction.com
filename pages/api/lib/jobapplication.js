import mongoose from "mongoose";

// For Job Application Model
const JobApplication = new mongoose.Schema({
  job: String,
  name: String,
  email: String,
  mobile: String,
  qualification: String,
  experience: String,
  resume: String,
  message: String,
});

export const JobApplicant =
  mongoose.models?.inrain_applicants ||
  mongoose.model("inrain_applicants", JobApplication);
