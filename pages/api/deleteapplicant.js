import mongoose from "mongoose";
import { JobApplicant } from "./lib/jobapplication";

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.url);

    // Handle DELETE request
    if (req.method === "DELETE") {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: "Missing applicant ID" });
      }

      const deletedApplicant = await JobApplicant.findByIdAndDelete(id);

      if (!deletedApplicant) {
        return res.status(404).json({ error: "Applicant not found" });
      }

      return res.status(200).json({ message: "Applicant deleted successfully" });
    }

    // Handle unsupported methods
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error("Error deleting applicant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
