import mongoose from "mongoose";
import { Job } from "./lib/jobs";

export default async function JobSubmition(req, res) {
  try {
    if (req.method === "POST") {
      const {
        title,
        department,
        location,
        employmentType,
        experienceRequired,
        jobDescription,
        qualifications,
      } = req.body;

      await mongoose.connect(process.env.url);
      let job = new Job({
        title: title,
        department: department,
        location: location,
        employmentType: employmentType,
        experienceRequired: experienceRequired,
        jobDescription: jobDescription,
        qualifications: qualifications,
      });
      const result = await job.save();
      res.status(200).json({
        success: true,
        message: "Job Posted Successfully",
      });
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
