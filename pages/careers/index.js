import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobHeading, setJobHeading] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    experience: "",
    resume: null,
    message: "",
  });

  const validateForm = () => {
    if (!formData.resume) {
      setMessage("❌ Please select a resume file");
      return false;
    }

    // Validate file type
    if (formData.resume.type !== "application/pdf") {
      setMessage("❌ Please upload only PDF files");
      return false;
    }

    // Validate file size (5MB limit)
    if (formData.resume.size > 5 * 1024 * 1024) {
      setMessage("❌ File size should be less than 5MB");
      return false;
    }

    // Validate mobile number (basic validation)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setMessage("❌ Please enter a valid 10-digit mobile number");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("resume", formData.resume);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("mobile", formData.mobile);
      data.append("qualification", formData.qualification);
      data.append("experience", formData.experience);
      data.append("message", formData.message);
      data.append("job", jobHeading);

      const res = await fetch("/api/jobapplicant", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Application submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          qualification: "",
          experience: "",
          resume: null,
          message: "",
        });

        e.target.reset();
        // Reset file input
        if (e.target.resume) {
          e.target.resume.value = "";
        }
      } else {
        setMessage(
          `❌ ${result.error || "Failed to upload. Please try again."}`
        );
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  async function ApplyJob(title) {
    setShowJobForm(true);
    setJobHeading(title);
  }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobfetch");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Head>
        <title>
          Join Our Team | Career Opportunities at InRain Construction Pvt. Ltd.
        </title>
        <meta charSet="UTF-8" />
        <meta name="language" content="en" />
        <meta name="author" content="InRain® Construction Pvt. Ltd." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="description"
          content="Explore exciting career opportunities at InRain Construction Pvt. Ltd., a leading provider of Rainwater Harvesting and Sustainable Water Management Solutions in India. Join our team of innovators dedicated to building a greener, water-secure future."
        />
        <meta
          name="keywords"
          content="InRain Construction careers, job openings InRain, rainwater harvesting jobs, environmental jobs India, sustainability careers, construction jobs Delhi, InRain hiring, water conservation jobs, green building jobs, eco-friendly company careers"
        />
        <meta
          name="canonical"
          content="https://www.inrainconstruction.com/careers"
        />
        <meta
          property="og:title"
          content="Join Our Team | Career Opportunities at InRain Construction Pvt. Ltd."
        />
        <meta
          property="og:description"
          content="Explore exciting career opportunities at InRain Construction Pvt. Ltd., a leading provider of Rainwater Harvesting and Sustainable Water Management Solutions in India. Join our team of innovators dedicated to building a greener, water-secure future."
        />
        <meta
          property="og:url"
          content="https://www.inrainconstruction.com/careers"
        />
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
        <meta
          name="google-site-verification"
          content="Vger2ATzpz22dMQGSECVrk-fiHzoT9KVObqb1m9k3HA"
        />
      </Head>
      <Navbar />
      <PopUp />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="mt-3 text-lg">
            Build your career with InRain Construction Pvt. Ltd.
          </p>
        </section>

        {/* Job Openings */}
        <section className="py-14 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Current Open Positions
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {loading ? (
              // 🔹 Show loading spinner while fetching
              <div className="col-span-3 flex justify-center m-10">
                <CircularProgress color="success" />
              </div>
            ) : jobs && jobs.length > 0 ? (
              // 🔹 Show job cards when data is ready
              jobs.map((job) => (
                <div
                  key={job._id || job.title}
                  className="bg-white p-6 shadow-md rounded-lg border hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-blue-700">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 mt-2">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-gray-700">
                    <strong>Job Type:</strong> {job.employmentType}
                  </p>
                  <p className="text-gray-700">
                    <strong>Experience:</strong> {job.experienceRequired}
                  </p>
                  <p className="text-gray-700">
                    <strong>Qualifications:</strong> {job.qualifications}
                  </p>
                  <p className="text-gray-700 text-justify">
                    <strong>Job Description:</strong>{" "}
                    <bold className="text-sm">{job.jobDescription}</bold>
                  </p>

                  <button
                    onClick={() => ApplyJob(job.title)}
                    className="mt-4 w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
                  >
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              // 🔹 Show message when no jobs found
              <p className="text-center text-gray-500 col-span-3 mt-5">
                No active job postings available.
              </p>
            )}
          </div>
        </section>

        {/* Application Form */}
        {showJobForm && (
          <section className="py-16 bg-white px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
                Submit Your Application
              </h2>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
                Apply For: {jobHeading}
              </h3>
              <form
                onSubmit={handleSubmit}
                className="grid gap-6 md:grid-cols-2 bg-gray-100 p-8 rounded-lg shadow-md"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded w-full"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded w-full"
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded w-full"
                />

                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded w-full"
                />

                <input
                  type="text"
                  name="experience"
                  placeholder="Experience (Years)"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded w-full"
                />

                <input
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white"
                />

                <textarea
                  name="message"
                  placeholder="Why should we hire you?"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded w-full md:col-span-2 h-24"
                ></textarea>

                {/* <button
                  type="submit"
                  className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded text-lg font-semibold transition"
                >
                  Submit Application
                </button> */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`md:col-span-2 text-white py-3 rounded text-lg font-semibold transition ${
                    loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

                {message && (
                  <p className="text-center mt-4 text-sm font-medium text-gray-700">
                    {message}
                  </p>
                )}
              </form>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}
