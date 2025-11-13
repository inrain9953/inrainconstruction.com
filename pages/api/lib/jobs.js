import mongoose from "mongoose";

// For Job Model
const jobModel = new mongoose.Schema({
  title: String,
  department: String,
  location: String,
  employmentType: String,
  experienceRequired: String,
  jobDescription: String,
  qualifications: String,
});

export const Job =
  mongoose.models?.inrain_jobs || mongoose.model("inrain_jobs", jobModel);
