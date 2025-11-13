import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import withAuth from "@/components/withauth";
import CircularProgress from "@mui/material/CircularProgress";
import PopUp from "@/components/popup";
import { Button } from "@mui/material";
import axios from "axios";

function UserData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showClientForm, setShowClientForm] = useState(true);
  const [showPostedJobForm, setShowPostedJobForm] = useState(false);
  const [showApplicantsData, setShowApplicantsData] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [jobData, setJobData] = useState({
    title: "",
    department: "",
    location: "",
    employmentType: "",
    experienceRequired: "",
    jobDescription: "",
    qualifications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      jobData.title === "" ||
      jobData.department === "" ||
      jobData.location === "" ||
      jobData.employmentType === "" ||
      jobData.experienceRequired === "" ||
      jobData.jobDescription === "" ||
      jobData.qualifications === ""
    ) {
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post("/api/jobsubmition", jobData);
      alert("Job posted successfully!");
    } catch {
      alert("Failed to post job");
    } finally {
      setLoading(false);
    }
    setJobData({
      title: "",
      department: "",
      location: "",
      employmentType: "",
      experienceRequired: "",
      jobDescription: "",
      qualifications: "",
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/hello");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    // setTimeout(() => {
    //   localStorage.removeItem("token");
    // }, 3000);

    fetchData();
  }, []);

  async function toggleJobForm() {
    setShowJobForm(true);
    setShowClientForm(false);
    setShowPostedJobForm(false);
    setShowApplicantsData(false);
  }
  async function toggleClientForm() {
    setShowJobForm(false);
    setShowClientForm(true);
    setShowPostedJobForm(false);
    setShowApplicantsData(false);
  }
  async function togglePostedJobForm() {
    setShowJobForm(false);
    setShowClientForm(false);
    setShowPostedJobForm(true);
    setShowApplicantsData(false);
    await fetchJobData();
  }

  async function toggleApplicantsData() {
    setShowJobForm(false);
    setShowClientForm(false);
    setShowPostedJobForm(false);
    setShowApplicantsData(true);
    await fetchApplicantsData();
  }

  async function fetchJobData() {
    setLoading(true);
    try {
      const response = await fetch("/api/jobfetch");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLoading(false);
      setJobs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchApplicantsData() {
    setLoading(true);
    try {
      const response = await fetch("/api/fetchapplicants");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLoading(false);
      setApplicants(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function deleteCandidate(id) {
    setLoading(true);
    try {
      const res = await fetch(`/api/deleteapplicant`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      await fetchApplicantsData();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  async function deleteJob(id) {
    try {
      const res = await fetch(`/api/jobdeletion`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        alert("Job deleted successfully");
        window.location.reload(); // or remove item from state
      } else {
        alert(data.error || "Failed to delete job");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />
      <PopUp />

      <div className="flex justify-center items-center gap-16 mt-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <Button variant="contained" size="small" onClick={toggleJobForm}>
            Post a Job
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Button variant="contained" size="small" onClick={toggleClientForm}>
            Client's Lead
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Button
            variant="contained"
            size="small"
            onClick={togglePostedJobForm}
          >
            Active Jobs
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Button
            variant="contained"
            size="small"
            onClick={toggleApplicantsData}
          >
            Applicants Data
          </Button>
        </div>
      </div>

      {/* {loading && (
        <div className="flex justify-center m-5">
          <CircularProgress color="success" />
        </div>
      )} */}

      {showJobForm && (
        <div className="min-h-screen py-10 px-6 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 max-w-2xl w-full space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Post a New Job
            </h2>

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={jobData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={jobData.department}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />

            <input
              type="text"
              name="location"
              placeholder="Job Location"
              value={jobData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />

            <select
              name="employmentType"
              value={jobData.employmentType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Employment Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>

            <input
              type="text"
              name="experienceRequired"
              placeholder="Experience Required"
              value={jobData.experienceRequired}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />

            <textarea
              name="jobDescription"
              placeholder="Job Description"
              value={jobData.jobDescription}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg h-20"
            />

            <textarea
              name="qualifications"
              placeholder="Qualifications"
              value={jobData.qualifications}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg h-20"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              Publish Job
            </button>
          </form>
        </div>
      )}

      {showClientForm && (
        <div className="text-center flex justify-center m-5">
          {loading ? (
            // 🔹 Show loading spinner while fetching
            <div className="flex justify-center items-center m-10">
              <CircularProgress color="success" />
            </div>
          ) : products && products.length > 0 ? (
            // 🔹 Show table when data is loaded
            <table className="w-full border-collapse border border-gray-300">
              <caption className="text-2xl font-semibold text-gray-800 my-5">
                User Data
              </caption>
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-lg p-3 border border-gray-400">Name</th>
                  <th className="text-lg p-3 border border-gray-400">Email</th>
                  <th className="text-lg p-3 border border-gray-400">
                    Mobile No.
                  </th>
                  <th className="text-lg p-3 border border-gray-400">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product._id || product.email}
                    className="text-center hover:bg-gray-100 transition"
                  >
                    <td className="border border-gray-300 p-3">
                      {product.name}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {product.email}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {product.mobile}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {product.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            // 🔹 Show message when no users found
            <p className="text-gray-500 text-lg mt-10">
              No user data available.
            </p>
          )}
        </div>
      )}

      {showPostedJobForm && (
        <div className="m-5 mt-10 flex justify-center items-center">
          {jobs.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">No Active Jobs.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white border max-w-[500px] border-gray-200 shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-red-500">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Department:</strong> {job.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Employment Type:</strong> {job.employmentType}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Experience Required:</strong>{" "}
                    {job.experienceRequired}
                  </p>
                  <p className="text-sm text-justify text-gray-600">
                    <strong>Description:</strong> {job.jobDescription}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Qualifications:</strong> {job.qualifications}
                  </p>

                  <Button
                    onClick={() => deleteJob(job._id)}
                    className="mt-3 bg-red-500 hover:bg-red-600 text-white"
                    size="small"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {showApplicantsData && (
        <div className="px-6 py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Applicants Data
          </h2>

          {applicants.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-medium bg-gray-50 py-10 rounded-lg shadow-inner">
              No Applicants Data Found
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicants.map((applicant) => (
                <div
                  key={applicant._id}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 capitalize">
                      {applicant.name}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                      {applicant.job || "General"}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <p>
                      <strong className="text-gray-900">Email:</strong>{" "}
                      <span className="text-gray-600 text-sm">
                        {applicant.email}
                      </span>
                    </p>
                    <p>
                      <strong className="text-gray-900">Mobile:</strong>{" "}
                      <span className="text-gray-600 text-sm">
                        {applicant.mobile}
                      </span>
                    </p>
                    <p>
                      <strong className="text-gray-900">Email:</strong>{" "}
                      <span className="text-gray-600 text-sm">
                        {applicant.email}
                      </span>
                    </p>
                    <p>
                      <strong className="text-gray-900">Qualification:</strong>{" "}
                      <span className="text-gray-600 text-sm">
                        {applicant.qualification}
                      </span>
                    </p>
                    <p>
                      <strong className="text-gray-900">Experience:</strong>{" "}
                      <span className="text-gray-600 text-sm">
                        {applicant.experience}
                      </span>
                    </p>
                    {applicant.message && (
                      <p className="mt-2 text-gray-700 border-t pt-2 text-xs">
                        <strong className="text-gray-900 block mb-1">
                          About Candidate:
                        </strong>
                        {applicant.message}
                      </p>
                    )}
                  </div>

                  {applicant.resume && (
                    <div className="mt-3 flex gap-2 justify-center items-center">
                      <a
                        href={applicant.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:cursor-pointer hover:bg-blue-700 transition-all duration-200 text-sm font-medium"
                      >
                        View Resume
                      </a>
                      <button
                        onClick={(e) => deleteCandidate(applicant._id)}
                        className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:cursor-pointer hover:bg-blue-700 transition-all duration-200 text-sm font-medium"
                      >
                        Delete Candidate
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}

export default withAuth(UserData);
