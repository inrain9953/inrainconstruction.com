import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import withAuth from '@/components/withauth'
import CircularProgress from '@mui/material/CircularProgress'
import PopUp from '@/components/popup'
import { Button } from '@mui/material'
import axios from 'axios'

function UserData () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showJobForm, setShowJobForm] = useState(false)
  const [showClientForm, setShowClientForm] = useState(true)
  const [showPostedJobForm, setShowPostedJobForm] = useState(false)
  const [showApplicantsData, setShowApplicantsData] = useState(false)
  const [jobs, setJobs] = useState([])
  const [applicants, setApplicants] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [jobData, setJobData] = useState({
    title: '',
    department: '',
    location: '',
    employmentType: '',
    experienceRequired: '',
    jobDescription: '',
    qualifications: ''
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const handleChange = e => {
    const { name, value } = e.target
    setJobData({ ...jobData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    if (
      jobData.title === '' ||
      jobData.department === '' ||
      jobData.location === '' ||
      jobData.employmentType === '' ||
      jobData.experienceRequired === '' ||
      jobData.jobDescription === '' ||
      jobData.qualifications === ''
    ) {
      alert('Please fill all the fields')
      setLoading(false)
      return
    }
    try {
      const res = await axios.post('/api/jobsubmition', jobData)
      alert('Job posted successfully!')
    } catch {
      alert('Failed to post job')
    } finally {
      setLoading(false)
    }
    setJobData({
      title: '',
      department: '',
      location: '',
      employmentType: '',
      experienceRequired: '',
      jobDescription: '',
      qualifications: ''
    })
  }

  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true)

        const response = await fetch(`/api/hello?page=${currentPage}&limit=50`)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setProducts(data.products)
        setTotalPages(data.pagination.totalPages)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage, refresh])

  async function toggleJobForm () {
    setShowJobForm(true)
    setShowClientForm(false)
    setShowPostedJobForm(false)
    setShowApplicantsData(false)
  }
  async function toggleClientForm () {
    setShowJobForm(false)
    setShowClientForm(true)
    setShowPostedJobForm(false)
    setShowApplicantsData(false)
  }
  async function togglePostedJobForm () {
    setShowJobForm(false)
    setShowClientForm(false)
    setShowPostedJobForm(true)
    setShowApplicantsData(false)
    await fetchJobData()
  }

  async function toggleApplicantsData () {
    setShowJobForm(false)
    setShowClientForm(false)
    setShowPostedJobForm(false)
    setShowApplicantsData(true)
    await fetchApplicantsData()
  }

  async function fetchJobData () {
    setLoading(true)
    try {
      const response = await fetch('/api/jobfetch')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setLoading(false)
      setJobs(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  async function fetchApplicantsData () {
    setLoading(true)
    try {
      const response = await fetch('/api/fetchapplicants')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setLoading(false)
      setApplicants(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  async function deleteCandidate (id) {
    setLoading(true)
    try {
      const res = await fetch(`/api/deleteapplicant`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()
      await fetchApplicantsData()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  async function deleteJob (id) {
    try {
      const res = await fetch(`/api/jobdeletion`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()
      console.log(data)

      if (res.status === 200) {
        alert('Job deleted successfully')
        window.location.reload() // or remove item from state
      } else {
        alert(data.error || 'Failed to delete job')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async id => {
    if (!confirm('Delete this lead? This cannot be undone.')) return
    try {
      const response = await fetch('/api/deleteLead', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        setRefresh(!refresh)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <PopUp />

      <div className='flex justify-center items-center gap-16 mt-10'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <Button variant='contained' size='small' onClick={toggleJobForm}>
            Post a Job
          </Button>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <Button variant='contained' size='small' onClick={toggleClientForm}>
            Client's Lead
          </Button>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <Button
            variant='contained'
            size='small'
            onClick={togglePostedJobForm}
          >
            Active Jobs
          </Button>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <Button
            variant='contained'
            size='small'
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
        <div className='min-h-screen py-10 px-6 flex justify-center'>
          <form
            onSubmit={handleSubmit}
            className='bg-white shadow-lg rounded-xl p-6 max-w-2xl w-full space-y-4'
          >
            <h2 className='text-2xl font-bold mb-4 text-center'>
              Post a New Job
            </h2>

            <input
              type='text'
              name='title'
              placeholder='Job Title'
              value={jobData.title}
              onChange={handleChange}
              required
              className='w-full p-2 border rounded-lg'
            />

            <input
              type='text'
              name='department'
              placeholder='Department'
              value={jobData.department}
              onChange={handleChange}
              required
              className='w-full p-2 border rounded-lg'
            />

            <input
              type='text'
              name='location'
              placeholder='Job Location'
              value={jobData.location}
              onChange={handleChange}
              required
              className='w-full p-2 border rounded-lg'
            />

            <select
              name='employmentType'
              value={jobData.employmentType}
              onChange={handleChange}
              className='w-full p-2 border rounded-lg'
              required
            >
              <option value=''>Employment Type</option>
              <option value='Full-Time'>Full-Time</option>
              <option value='Part-Time'>Part-Time</option>
              <option value='Internship'>Internship</option>
              <option value='Contract'>Contract</option>
            </select>

            <input
              type='text'
              name='experienceRequired'
              placeholder='Experience Required'
              value={jobData.experienceRequired}
              onChange={handleChange}
              required
              className='w-full p-2 border rounded-lg'
            />

            <textarea
              name='jobDescription'
              placeholder='Job Description'
              value={jobData.jobDescription}
              onChange={handleChange}
              required
              className='w-full p-2 border rounded-lg h-20'
            />

            <textarea
              name='qualifications'
              placeholder='Qualifications'
              value={jobData.qualifications}
              onChange={handleChange}
              required
              className='w-full p-2 border rounded-lg h-20'
            />

            <button
              type='submit'
              className='w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700'
            >
              Publish Job
            </button>
          </form>
        </div>
      )}

      {showClientForm && (
        <div className='px-6 py-4'>
          {/* Header */}
          <div className='flex items-center justify-between mb-6'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>Client Leads</h2>
              <p className='text-sm text-gray-500 mt-0.5'>
                {products?.length > 0
                  ? `${products.length} leads on this page`
                  : 'No leads found'}
              </p>
            </div>
            <span className='text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full'>
              Live Data
            </span>
          </div>

          {loading ? (
            <div className='flex flex-col items-center justify-center py-20 gap-3'>
              <CircularProgress color='success' />
              <p className='text-sm text-gray-400'>Fetching latest leads...</p>
            </div>
          ) : products && products.length > 0 ? (
            <>
              <div className='rounded-xl border border-gray-200 overflow-hidden shadow-sm'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='bg-gray-50 border-b border-gray-200'>
                      {[
                        'Date & Time',
                        'Name',
                        'Email',
                        'Mobile',
                        'Message',
                        'Action'
                      ].map(col => (
                        <th
                          key={col}
                          className='text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3'
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {products.map((product, index) => (
                      <tr
                        key={product._id || product.email}
                        className={`hover:bg-blue-50 transition-colors duration-150 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                        }`}
                      >
                        <td className='px-4 py-3 text-gray-500 whitespace-nowrap'>
                          <div className='flex flex-col'>
                            <span className='font-medium text-gray-700 text-xs'>
                              {new Date(product.createdAt).toLocaleDateString(
                                'en-IN',
                                {
                                  timeZone: 'Asia/Kolkata',
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric'
                                }
                              )}
                            </span>
                            <span className='text-xs text-gray-400'>
                              {new Date(product.createdAt).toLocaleTimeString(
                                'en-IN',
                                {
                                  timeZone: 'Asia/Kolkata',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                }
                              )}
                            </span>
                          </div>
                        </td>
                        <td className='px-2 py-3'>
                          <div className=''>
                            <span className='font-medium text-gray-800'>
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td className='px-2 py-3 text-gray-600'>
                          {product.email}
                        </td>
                        <td className='px-2 py-3 text-gray-600'>
                          {product.mobile}
                        </td>
                        <td className='px-3 py-3 text-gray-500 max-w-xs text-xs'>
                          <p title={product.message}>
                            {product.message}
                          </p>
                        </td>
                        <td className='px-4 py-3'>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className='flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-white hover:bg-red-500 border border-red-200 hover:border-red-500 px-3 py-1.5 rounded-lg transition-all duration-150'
                          >
                            {/* Trash icon (inline SVG, no import needed) */}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-3.5 h-3.5'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <polyline points='3 6 5 6 21 6' />
                              <path d='M19 6l-1 14H6L5 6' />
                              <path d='M10 11v6M14 11v6' />
                              <path d='M9 6V4h6v2' />
                            </svg>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className='flex items-center justify-between mt-5 px-1'>
                <p className='text-sm text-gray-500'>
                  Page{' '}
                  <span className='font-semibold text-gray-700'>
                    {currentPage}
                  </span>{' '}
                  of{' '}
                  <span className='font-semibold text-gray-700'>
                    {totalPages}
                  </span>
                </p>
                <div className='flex items-center gap-2'>
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    className='flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition'
                  >
                    ← Previous
                  </button>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className='flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition'
                  >
                    Next →
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className='flex flex-col items-center justify-center py-20 text-center'>
              <div className='w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                  />
                </svg>
              </div>
              <p className='text-gray-700 font-semibold text-base'>
                No leads yet
              </p>
              <p className='text-gray-400 text-sm mt-1'>
                Client submissions will appear here.
              </p>
            </div>
          )}
        </div>
      )}

      {showPostedJobForm && (
        <div className='m-5 mt-10 flex justify-center items-center'>
          {jobs.length === 0 ? (
            <p className='text-center text-gray-500 text-lg'>No Active Jobs.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {jobs.map(job => (
                <div
                  key={job._id}
                  className='bg-white border max-w-[500px] border-gray-200 shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-300'
                >
                  <h3 className='text-xl font-semibold text-red-500'>
                    {job.title}
                  </h3>
                  <p className='text-sm text-gray-600 mt-1'>
                    <strong>Department:</strong> {job.department}
                  </p>
                  <p className='text-sm text-gray-600'>
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className='text-sm text-gray-600'>
                    <strong>Employment Type:</strong> {job.employmentType}
                  </p>
                  <p className='text-sm text-gray-600'>
                    <strong>Experience Required:</strong>{' '}
                    {job.experienceRequired}
                  </p>
                  <p className='text-sm text-justify text-gray-600'>
                    <strong>Description:</strong> {job.jobDescription}
                  </p>
                  <p className='text-sm text-gray-600'>
                    <strong>Qualifications:</strong> {job.qualifications}
                  </p>

                  <Button
                    onClick={() => deleteJob(job._id)}
                    className='mt-3 bg-red-500 hover:bg-red-600 text-white'
                    size='small'
                    variant='contained'
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
        <div className='px-6 py-8'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>
            Applicants Data
          </h2>

          {applicants.length === 0 ? (
            <div className='text-center text-gray-500 text-lg font-medium bg-gray-50 py-10 rounded-lg shadow-inner'>
              No Applicants Data Found
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {applicants.map(applicant => (
                <div
                  key={applicant._id}
                  className='bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5'
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-gray-900 capitalize'>
                      {applicant.name}
                    </h3>
                    <span className='px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full'>
                      {applicant.job || 'General'}
                    </span>
                  </div>

                  <div className='mt-4 space-y-2 text-sm text-gray-700'>
                    <p>
                      <strong className='text-gray-900'>Email:</strong>{' '}
                      <span className='text-gray-600 text-sm'>
                        {applicant.email}
                      </span>
                    </p>
                    <p>
                      <strong className='text-gray-900'>Mobile:</strong>{' '}
                      <span className='text-gray-600 text-sm'>
                        {applicant.mobile}
                      </span>
                    </p>
                    <p>
                      <strong className='text-gray-900'>Email:</strong>{' '}
                      <span className='text-gray-600 text-sm'>
                        {applicant.email}
                      </span>
                    </p>
                    <p>
                      <strong className='text-gray-900'>Qualification:</strong>{' '}
                      <span className='text-gray-600 text-sm'>
                        {applicant.qualification}
                      </span>
                    </p>
                    <p>
                      <strong className='text-gray-900'>Experience:</strong>{' '}
                      <span className='text-gray-600 text-sm'>
                        {applicant.experience}
                      </span>
                    </p>
                    {applicant.message && (
                      <p className='mt-2 text-gray-700 border-t pt-2 text-xs'>
                        <strong className='text-gray-900 block mb-1'>
                          About Candidate:
                        </strong>
                        {applicant.message}
                      </p>
                    )}
                  </div>

                  {applicant.resume && (
                    <div className='mt-3 flex gap-2 justify-center items-center'>
                      <a
                        href={applicant.resume}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:cursor-pointer hover:bg-blue-700 transition-all duration-200 text-sm font-medium'
                      >
                        View Resume
                      </a>
                      <button
                        onClick={e => deleteCandidate(applicant._id)}
                        className='inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:cursor-pointer hover:bg-blue-700 transition-all duration-200 text-sm font-medium'
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
  )
}

export default withAuth(UserData)
