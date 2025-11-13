import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const JobName = () => {
  return (
    <>
    <Navbar />
    <PopUp />

    <div>
        <div>
            <h1>Job Name Page</h1>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default JobName