import mongoose from "mongoose";
import { JobApplicant } from "./lib/jobapplication";
import { createClient } from "@supabase/supabase-js";
import formidable from "formidable";
import { connectToDatabase } from "./lib/db";
import fs from "fs";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
      console.log("Step 1");
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

      console.log("Step 2");
    const form = formidable({
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
    });
      console.log("Step 3");

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("❌ Form parsing error:", err);
          reject(err);
        }
        resolve([fields, files]);
      });
    });
      console.log("Step 4");

    // Extract field values
    const name = fields.name?.[0];
    const email = fields.email?.[0];
    const mobile = fields.mobile?.[0];
    const qualification = fields.qualification?.[0];
    const experience = fields.experience?.[0];
    const message = fields.message?.[0];
    const job = fields.job?.[0];
      console.log("Step 5");

    // Validate required fields
    if (!name || !email || !mobile || !qualification || !experience) {
      console.error("❌ Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }
  console.log("Step 6");
    // Validate file upload
    const uploadedFile = files.resume?.[0];
    if (!uploadedFile) {
      console.error("❌ No resume file found");
      return res.status(400).json({ error: "No resume file uploaded" });
    }
      console.log("Step 7");

    // Read file as buffer
    const fileBuffer = fs.readFileSync(uploadedFile.filepath);

      console.log("Step 8");
    // Upload to Supabase Storage
    const fileName = `${Date.now()}_${name}_resume.pdf`;
    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(fileName, fileBuffer, {
        contentType: "application/pdf",
      });
        console.log("Step 9");

    // Clean up temporary file
    fs.unlinkSync(uploadedFile.filepath);
      console.log("Step 10");

    if (error) {
      console.error("❌ Supabase upload error:", error);
      return res.status(500).json({ error: "File upload failed" });
    }
      console.log("Step 11");

    // Get Public URL
    const { data: publicData } = supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .getPublicUrl(fileName);

        console.log("Step 12");
    const resume = publicData.publicUrl;

      console.log("Step 13");
    // Save to MongoDB
    await connectToDatabase();
      console.log("Step 14");
    const applicant = new JobApplicant({
      job,
      name,
      email,
      mobile,
      message,
      qualification,
      experience,
      resume,
    });
      console.log("Step 15");

    await applicant.save();
      console.log("Step 16");

    return res.status(200).json({
      message: "✅ Application saved successfully",
    });
  } catch (err) {
    console.error("❌ Upload/Save error:", err);
    return res.status(500).json({ error: "Failed to upload or save" });
  }
}
