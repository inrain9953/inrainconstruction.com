import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import service3 from './../public/service3.jpg'
import harvesting12 from './../public/services/harvesting12.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

const RainwaterHarvestingPit = () => {
  const title = 'Rainwater Harvesting Pit | InRain® Construction Pvt. Ltd.'
  const desc =
    'Learn how InRain Construction designs advanced rainwater harvesting pits for groundwater recharge and sustainable water management across India.'
  const keyword =
    'Rainwater Harvesting Pit, Rainwater Harvesting Pit in India, Modular Rainwater Harvesting Pit, Best Rainwater Harvesting Company in India, Groundwater Recharge Pit, Groundwater Recharge System, Rainwater Harvesting System'
  const canonical =
    'https://www.inrainconstruction.com/rainwater-harvesting-pit'
  const ogUrl = 'https://www.inrainconstruction.com/rainwater-harvesting-pit'
  const ogTitle =
    'Rainwater Harvesting Pit Solutions by InRain Construction Pvt. Ltd.'
  const ogDescription =
    'Discover how InRain Construction builds advanced rainwater harvesting pits that recharge groundwater, prevent waterlogging, and ensure sustainable water security in India.'
  const twittertitle =
    'Rainwater Harvesting Pit | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Discover how InRain Construction builds advanced rainwater harvesting pits that recharge groundwater, prevent waterlogging, and ensure sustainable water security in India.'

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
      <div className=''>
        {/* Hero Section */}
        <section className='max-w-7xl mx-auto px-4 md:px-8 pt-6'>
          <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
            <Image
              className='w-full h-[220px] md:h-[320px] object-cover'
              src={service3}
              alt='Rainwater Harvesting Banner'
              loading='eager'
              priority
              unoptimized
            />

            <div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent' />

            <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
              <div className='mb-4'>
                <p className='text-white/90 text-sm md:text-base'>
                  <Link href='/' className='hover:text-green-300'>
                    Home
                  </Link>{' '}
                  / Rainwater Harvesting Pit
                </p>
              </div>

              <h1 className='max-w-4xl text-3xl md:text-5xl font-bold text-white leading-tight'>
                Rainwater Harvesting Pit
              </h1>

              <p className='text-white/90 mt-3 text-lg'>
                Smart Groundwater Recharge & Sustainable Water Management
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='max-w-7xl mx-auto px-4 md:px-8 py-10'>
          <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-start'>
            {/* Left Content */}
            <div className='bg-white rounded-3xl shadow-lg p-6 md:p-10'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-900 mb-6'>
                Rainwater Harvesting Pit—A Smart Solution by InRain Construction
                Pvt. Ltd.
              </h2>

              <div className='space-y-6 text-slate-700 leading-8 text-[17px]'>
                <p>
                  India is one of the fastest-developing nations in the world,
                  but it also faces a critical challenge: water scarcity, Rapid
                  urbanization, growing populations, and excessive dependence on
                  groundwater have created a pressing need for sustainable water
                  management systems. In this context, Rainwater Harvesting is
                  no longer an option — it is a necessity.
                  <br />
                  <br />
                  Among the different techniques available, one of the most
                  practical, cost-effective, and widely adopted methods is the
                  Rainwater Harvesting Pit. At InRain Construction Pvt. Ltd., we
                  specialize in designing and implementing modern,
                  <Link
                    className='text-green-600 font-semibold hover:text-sky-500'
                    href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
                    target='_blank'
                  >
                    {' '}
                    modular rainwater harvesting
                  </Link>{' '}
                  pits that not only capture and store rainwater but also
                  recharge aquifers and stabilize groundwater levels.
                </p>

                <div className='border-l-4 border-green-600 pl-5'>
                  <h2 className='text-2xl font-bold text-slate-900 mb-3'>
                    What is Rainwater Harvesting Pit?
                  </h2>

                  <p>
                    A{' '}
                    <Link
                      className='text-green-600 font-semibold hover:text-sky-500'
                      href='https://www.inrainconstruction.com/'
                      target='_blank'
                    >
                      Rainwater Harvesting Pit
                    </Link>{' '}
                    is a specially designed structure built to collect, filter,
                    and store rainwater. Typically constructed underground, it
                    allows rainwater runoff from rooftops, paved surfaces, and
                    open areas to be directed into the pit, where it percolates
                    into the soil, replenishing groundwater reserves.
                    <br />
                    <br />
                    <span className='font-semibold text-slate-900'>
                      This method is simple, cost-effective, and highly
                      efficient for both residential and large-scale projects.
                    </span>
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl font-bold text-slate-900 mb-4'>
                    Benefits of Rainwater Harvesting Pit
                  </h2>

                  <p className='mb-4'>
                    At InRain Construction, we emphasize why installing a
                    rainwater harvesting pit is one of the smartest water
                    management choices:
                  </p>

                  <div className='bg-slate-50 rounded-2xl border border-slate-200 p-6'>
                    <ul className='space-y-4'>
                      <li>
                        <span className='font-semibold text-slate-900'>
                          Groundwater Recharge
                        </span>{' '}
                        – Helps replenish aquifers and balance water tables.
                      </li>

                      <li>
                        <span className='font-semibold text-slate-900'>
                          Prevents Waterlogging
                        </span>{' '}
                        – Reduces flooding and surface runoff during heavy
                        rains.
                      </li>

                      <li>
                        <span className='font-semibold text-slate-900'>
                          Cost Savings
                        </span>{' '}
                        – Decreases dependency on municipal or tanker water
                        supply.
                      </li>

                      <li>
                        <span className='font-semibold text-slate-900'>
                          Eco-Friendly
                        </span>{' '}
                        – Conserves water resources and supports sustainability.
                      </li>

                      <li>
                        <span className='font-semibold text-slate-900'>
                          Customizable Design
                        </span>{' '}
                        – Can be adapted to residential, commercial, and
                        industrial needs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className='space-y-6 lg:sticky lg:top-36'>
              <div className='overflow-hidden rounded-3xl shadow-xl bg-white'>
                <Image
                  className='w-full h-[280px] md:h-[350px] object-cover'
                  src={harvesting12}
                  alt='Modular Rainwater Harvesting'
                  loading='eager'
                  priority
                  unoptimized
                />
              </div>

              <div className='bg-white rounded-3xl shadow-lg p-6'>
                <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                  Why Choose InRain Construction?
                </h3>

                <p className='text-slate-700 leading-7'>
                  With more than 4,000 successful rainwater harvesting
                  installations across India, InRain Construction Pvt. Ltd. is a
                  trusted name in sustainable water solutions.
                </p>

                <ul className='mt-6 space-y-4 text-slate-700'>
                  <li>
                    <span className='font-semibold text-slate-900'>
                      Modular & Load-Bearing Technology
                    </span>{' '}
                    — Unlike traditional stone-filled pits, our modular
                    structures are durable, reusable, and space-efficient.
                  </li>

                  <li>
                    <span className='font-semibold text-slate-900'>
                      End-to-End Service
                    </span>{' '}
                    — From site surveys and hydrological analysis to design,
                    construction, and maintenance.
                  </li>

                  <li>
                    <span className='font-semibold text-slate-900'>
                      Trusted by Industry Leaders
                    </span>{' '}
                    — Hindustan Unilever, PepsiCo, CPWD, Smart Cities and more.
                  </li>

                  <li>
                    <span className='font-semibold text-slate-900'>
                      Long-Term Performance
                    </span>{' '}
                    — Engineered for efficiency with minimal maintenance.
                  </li>
                </ul>
              </div>

              <div className='bg-gradient-to-br from-green-50 to-sky-50 border border-green-200 rounded-3xl p-6 shadow-lg'>
                <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                  Applications
                </h3>

                <ul className='space-y-3 text-slate-700 font-medium'>
                  <li>🏢 Commercial complexes & IT parks</li>
                  <li>🏘️ Residential societies & towns</li>
                  <li>🏭 Industrial plants & factories</li>
                  <li>🏫 Schools, colleges & institutions</li>
                  <li>🏛️ Government buildings & infrastructure projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Highlight Section */}

          <div className='mt-12 md:mt-16'>
            <div className='rounded-3xl bg-gradient-to-r from-sky-600 to-green-600 p-[1px] shadow-2xl'>
              <div className='rounded-3xl bg-white p-6 md:p-10'>
                <h3 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
                  Sustainable Water Management for the Future
                </h3>

                <p className='text-[17px] text-slate-700 leading-8'>
                  A Rainwater Harvesting Pit is more than just a water
                  conservation structure — it’s an investment in the future.
                  With InRain Construction’s expertise in modular rainwater
                  harvesting systems, you can ensure sustainable water
                  management while contributing to environmental preservation.
                  <br />
                  If you are planning to install a rainwater harvesting pit in
                  India, partner with InRain Construction Pvt. Ltd. for
                  reliable, efficient, and future-ready solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default RainwaterHarvestingPit
