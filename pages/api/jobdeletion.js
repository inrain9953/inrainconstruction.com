import mongoose from "mongoose";
import { Job } from "./lib/jobs";

export default async function handler(req, res) {
  const { id } = req.body;

  try {
    await mongoose.connect(process.env.url);

    if (req.method === "DELETE") {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid Job ID" });
      }

      const deletedJob = await Job.findByIdAndDelete(id);

      if (!deletedJob) {
        return res.status(404).json({ error: "Job not found" });
      }

      return res.status(200).json({
        message: "Job deleted successfully",
        job: deletedJob,
      });
    }

    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
