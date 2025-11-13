import mongoose from "mongoose";
import { JobApplicant } from "./lib/jobapplication";
import { createClient } from "@supabase/supabase-js";
import formidable from "formidable";
import fs from "fs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const form = formidable({
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("❌ Form parsing error:", err);
          reject(err);
        }
        resolve([fields, files]);
      });
    });

    // Extract field values
    const name = fields.name?.[0];
    const email = fields.email?.[0];
    const mobile = fields.mobile?.[0];
    const qualification = fields.qualification?.[0];
    const experience = fields.experience?.[0];
    const message = fields.message?.[0];
    const job = fields.job?.[0];

    // Validate required fields
    if (!name || !email || !mobile || !qualification || !experience) {
      console.error("❌ Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate file upload
    const uploadedFile = files.resume?.[0];
    if (!uploadedFile) {
      console.error("❌ No resume file found");
      return res.status(400).json({ error: "No resume file uploaded" });
    }

    // Read file as buffer
    const fileBuffer = fs.readFileSync(uploadedFile.filepath);

    // Upload to Supabase Storage
    const fileName = `${Date.now()}_${name}_resume.pdf`;
    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(fileName, fileBuffer, {
        contentType: "application/pdf",
      });

    // Clean up temporary file
    fs.unlinkSync(uploadedFile.filepath);

    if (error) {
      console.error("❌ Supabase upload error:", error);
      return res.status(500).json({ error: "File upload failed" });
    }

    // Get Public URL
    const { data: publicData } = supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .getPublicUrl(fileName);

    const resume = publicData.publicUrl;

    // Save to MongoDB
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

    await applicant.save();

    return res.status(200).json({
      message: "✅ Application saved successfully",
    });
  } catch (err) {
    console.error("❌ Upload/Save error:", err);
    return res.status(500).json({ error: "Failed to upload or save" });
  }
}
