import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import PopUp from '@/components/popup'
import { MailOutline } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Contact = () => {
  const title = 'Contact US | InRain® Construction Pvt. Ltd.'
  const desc =
    'Contact US : The Company has Successfully Installed Morethan 400 Rain Water Harvesting Projects. sales@inrainwaterharvesting.com'
  const canonical = 'https://www.inrainconstruction.com/contact-us'
  const keyword =
    'Contact Us, InRain Water Harvesting, ICPL Contact, InRain® Construction Pvt. Ltd., Rainwater Harvesting for Industries'
  const ogUrl = 'https://www.inrainconstruction.com/contact-us'
  const ogTitle = 'Contact US | InRain™ Construction Pvt. Ltd.'
  const ogDescription =
    'Contact US : The Company has Successfully Installed Morethan 400 Rain Water Harvesting Projects. sales@inrainwaterharvesting.com'
  const twittertitle = 'Contact US | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Contact US : The Company has Successfully Installed Morethan 400 Rain Water Harvesting Projects. sales@inrainwaterharvesting.com'

  const [myname, setMyname] = useState('')
  const [myemail, setMyemail] = useState('')
  const [mymobile, setMymobile] = useState('')
  const [mymessage, setMymessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const GoogleAds = 'This is not from Google Ads'

  const handleMynameChange = e => {
    setMyname(e.target.value)
  }

  const api = 'ab6ca769-e97e-4a70-89fd-4ea195148385'
  const contactapikey = api

  const onFormSubmit = async event => {
    event.preventDefault()
    if (!myname || !myemail || !mymobile || !mymessage) {
      alert('Please fill all the fields')
      return
    }

    setIsSubmitting(true)

    const formData = new FormData(event.target)
    formData.append('access_key', contactapikey)
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then(res => res.json())

    try {
      const response = await axios.post('/api/signup', {
        myname,
        myemail,
        mymobile,
        mymessage,
        GoogleAds
      })
      if (response.data.success) {
        setShowSuccessPopup(true)
      }
    } catch (error) {
      alert(
        'An error occurred while submitting the form. Please try again later.'
      )
    }
    setIsSubmitting(false)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='UTF-8' />
        <meta name='language' content='en' />
        <meta name='author' content='InRain® Construction Pvt. Ltd.' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta name='description' content={desc} />
        <meta name='keywords' content={keyword} />
        <meta name='canonical' content={canonical} />
        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:url' content={ogUrl} />
        <meta name='twitter:title' content={twittertitle} />
        <meta name='twitter:description' content={twitterdescription} />
        <meta
          property='og:site_name'
          content='InRain® Construction Pvt. Ltd.'
        />
        <meta
          name='google-site-verification'
          content='Vger2ATzpz22dMQGSECVrk-fiHzoT9KVObqb1m9k3HA'
        />
      </Head>
      <Navbar />
      <PopUp />
      <div className='bg-slate-50'>
        {/* Hero Section */}
        <section className='relative'>
          <Image
            src={'/contact_bg.jpg'}
            alt='Contact Us'
            className='w-full h-[250px] md:h-[300px] object-cover'
            width={1920}
            height={500}
          />

          <div className='absolute inset-0 bg-black/50'></div>

          <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>Contact Us</h1>

            <p className='max-w-3xl text-sm md:text-lg'>
              The Company has Successfully Installed More than 4000+ Rainwater
              Harvesting Projects.
            </p>

            <p className='mt-4 text-sm md:text-base'>
              <Link href='/' className='hover:text-green-400'>
                Home
              </Link>{' '}
              / Contact Us
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className='max-w-7xl mx-auto px-5 -mt-14 relative z-10'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-2xl shadow-xl p-6 text-center'>
              <MailOutline
                sx={{ fontSize: 40 }}
                className='text-green-600 mb-3'
              />

              <h3 className='font-bold text-lg mb-2'>Email Address</h3>

              <a
                href='mailto:sales@inrainwaterharvesting.com'
                className='text-gray-600 hover:text-green-600'
              >
                sales@inrainwaterharvesting.com
              </a>
            </div>

            <div className='bg-white rounded-2xl shadow-xl p-6 text-center'>
              <CallIcon sx={{ fontSize: 40 }} className='text-green-600 mb-3' />

              <h3 className='font-bold text-lg mb-2'>Phone Number</h3>

              <a
                href='tel:+919910220794'
                className='text-gray-600 hover:text-green-600'
              >
                +91-9910220794
              </a>
            </div>

            <div className='bg-white rounded-2xl shadow-xl p-6 text-center'>
              <LocationOnIcon
                sx={{ fontSize: 40 }}
                className='text-green-600 mb-3'
              />

              <h3 className='font-bold text-lg mb-2'>Office Address</h3>

              <a
                href='https://maps.app.goo.gl/QSZoYkgd8GufagvC6'
                target='_blank'
                className='text-gray-600 hover:text-green-600'
              >
                Plot No 06, KH431, 1st Floor, Chattarpur-Satbari Road, New Delhi
                - 110074
              </a>
            </div>
          </div>
        </section>

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center'>
            <div className='bg-white rounded-3xl p-8 shadow-2xl text-center max-w-md w-[90%]'>
              <div className='text-4xl mb-4'>✅</div>

              <h3 className='text-2xl font-bold text-green-600'>
                Thank You {myname}
              </h3>

              <p className='text-gray-600 mt-3 mb-6'>
                Our team will reach out to you shortly.
              </p>

              <Link href='/'>
                <Button variant='contained' color='success'>
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section className='max-w-7xl mx-auto px-5 py-20'>
          <div className='grid lg:grid-cols-2 gap-8 items-center'>
            {/* Left Image */}
            <div className='hidden lg:block'>
              <Image
                src={'/tree.png'}
                alt='Contact InRain'
                className='w-full rounded-3xl shadow-2xl'
                width={600}
                height={400}
              />
            </div>

            {/* Form */}
            <div className='bg-white rounded-3xl shadow-2xl p-8'>
              <div className='text-center mb-4'>
                <Image
                  src={'/logo.png'}
                  alt='InRain Logo'
                  width={100}
                  height={100}
                  className='mx-auto mb-4'
                />

                <h2 className='text-3xl font-bold'>Get In Touch</h2>

                <p className='text-gray-500 mt-2'>
                  We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={onFormSubmit} className='space-y-4'>
                <input
                  type='text'
                  placeholder='Name'
                  value={myname}
                  onChange={handleMynameChange}
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500'
                />

                <input
                  type='email'
                  placeholder='Email'
                  value={myemail}
                  onChange={e => setMyemail(e.target.value)}
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500'
                />

                <input
                  type='tel'
                  placeholder='Mobile Number'
                  value={mymobile}
                  onChange={e => setMymobile(e.target.value)}
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500'
                />

                <textarea
                  rows={4}
                  placeholder='Message'
                  value={mymessage}
                  onChange={e => setMymessage(e.target.value)}
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500'
                />

                <div className='flex items-start gap-3'>
                  <input type='checkbox' className='mt-1' />

                  <label className='text-sm text-gray-600'>
                    Yes, I would like to receive communications by call / email
                    about Company's services.
                  </label>
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl cursor-pointer font-semibold transition duration-300 shadow-lg ${
                    isSubmitting
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Query'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Contact
