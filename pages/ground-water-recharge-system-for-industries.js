import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import service6 from './../public/service6.jpg'
import harvesting6 from './../public/services/harvesting6.jpg'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'

const Service6 = () => {
  const title =
    'Ground Water Recharge System For Industries | Why Industries Need Groundwater Recharge? | Benefits of Groundwater Recharge for Industries'
  const desc =
    'Ground Water recharge system or deep drainage is a hydrologic process where infiltrated water passes through the unsaturated region of groundwater and joins the water table. '
  const keyword =
    'Groundwater Recharge System for Industries, Benefits of Groundwater Recharge, Industrial Water Conservation, Sustainable Water Management, Artificial Recharge Methods, Surface Water Recharge, Industrial Water Supply, Groundwater Infiltration, Water Scarcity Solutions, Recharge Pits for Industry, Rainwater Harvesting for Industry, Environmental Impact, Water Bill Reduction'
  const canonical =
    'https://www.inrainconstruction.com/ground-water-recharge-system-for-industries'
  const ogUrl =
    'https://www.inrainconstruction.com/ground-water-recharge-system-for-industries'
  const ogTitle =
    'Ground Water Recharge System For Industries | Why Industries Need Groundwater Recharge? | Benefits of Groundwater Recharge for Industries'
  const ogDescription =
    'Ground Water recharge system or deep drainage is a hydrologic process where infiltrated water passes through the unsaturated region of groundwater and joins the water table.'
  const twittertitle =
    'Ground Water Recharge System For Industries | Why Industries Need Groundwater Recharge? | Benefits of Groundwater Recharge for Industries'
  const twitterdescription =
    'Ground Water recharge system or deep drainage is a hydrologic process where infiltrated water passes through the unsaturated region of groundwater and joins the water table.'

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
      <section className='bg-gradient-to-b from-slate-50 to-white'>
        {/* Hero Banner */}
        <div className='relative overflow-hidden rounded-2xl mx-4 md:mx-10 mt-6 shadow-2xl'>
          <Image
            src={service6}
            alt='Ground Water Recharge System For Industries'
            className='w-full h-[180px] md:h-[320px] object-cover'
            loading='eager'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-black/45' />

          <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
            <div className='inline-flex w-fit items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-white text-sm'>
              <Link href='/' className='hover:text-green-300'>
                Home
              </Link>
              <span className='mx-2'>/</span>
              Ground Water Recharge System For Industries
            </div>

            <h1 className='mt-4 text-white text-3xl md:text-5xl font-bold max-w-4xl'>
              Ground Water Recharge System For Industries
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-10'>
          <div className='grid lg:grid-cols-2 gap-10 items-start'>
            {/* Left Content */}
            <div className='bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-10'>
              <div className='h-1 w-24 bg-gradient-to-r from-green-500 to-sky-500 rounded-full mb-6' />

              <p className='text-gray-700 text-[17px] md:text-lg leading-8 text-justify'>
                InRain Construction Pvt. Ltd. is committed to providing
                sustainable water conservation solutions for housing and
                commercial requirements. Industries these days require{' '}
                <Link
                  href='https://www.inrainconstruction.com'
                  className='font-semibold text-green-600 hover:text-sky-500'
                >
                  Groundwater Recharge Systems
                </Link>{' '}
                as there is a huge demand for water supply for industrial use
                and the resources of water are very limited. Having a
                groundwater recharge system in place helps industries to reduce
                their dependency on surface water sources and secure their water
                supplies during periods of drought or water scarcity.
                <br />
                <br />
                InRain Construction Pvt. Ltd. a water conservation and water
                management company, offers groundwater recharge systems for
                industries. Naturally, the groundwater gets recharged when water
                infiltrates through the top surface and reaches the water table.
                An optimized infiltration level is required for natural
                groundwater recharge. The other way to preserve wetlands,
                streams, and lakes is to ensure that they continue to recharge
                groundwater as it can seep through the surface to reach down to
                the water table.
                <br />
                <br />
                Surface recharge and artificial recharge are the other ways that
                can help the industry to reduce their water bills by helping
                them to recharge the groundwater. In surface recharge methods,
                the rainwater is collected and directed through a recharge pit
                where it can be percolated to the ground. This method is highly
                successful in areas that receive a decent amount of rain in a
                year.
                <br />
                <br />
                Artificial recharge methods for industrial groundwater recharge
                can be used effectively in areas that have a scarcity of surface
                water. This methodology requires the use of artificial
                structures to infuse water directly into the ground to recharge
                groundwater. With the help of artificial wells, water storage
                tanks, and water infiltration galleries, the ground can easily
                be recharged.
                <br />
                <br />
                Recharging groundwater will not only have a positive impact on
                the environment, but it will also help in reducing the water
                bills of the industry. It will significantly reduce their
                reliance on the main supply.
              </p>
            </div>

            {/* Right Side */}
            <div className='space-y-6 lg:sticky lg:top-36'>
              {/* Image Card */}
              <div className='overflow-hidden rounded-2xl shadow-xl bg-white'>
                <Link href='https://www.inrainconstruction.com/'>
                  <Image
                    src={harvesting6}
                    alt='InRain Ground Water Recharge System for Industries'
                    className='w-full object-cover hover:scale-105 transition duration-500'
                    loading='eager'
                    priority
                    unoptimized
                  />
                </Link>
              </div>

              {/* Benefits Card */}
              <div className='bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-5'>
                  <div className='h-10 w-2 rounded-full bg-green-500' />
                  <h2 className='text-2xl font-bold text-slate-800'>
                    Why Industries Need Groundwater Recharge
                  </h2>
                </div>

                <p className='text-gray-700 leading-7 text-justify'>
                  Industries consume vast amounts of water for operations, and
                  with surface water sources drying up or becoming unreliable,
                  it's critical to look below the surface. A well-designed
                  groundwater recharge system helps reduce dependence on
                  external water sources, ensures water security during dry
                  seasons, and supports environmental sustainability.
                </p>

                <div className='mt-8'>
                  <h3 className='font-bold text-xl text-slate-800 mb-4'>
                    Benefits of Groundwater Recharge for Industries
                  </h3>

                  <ul className='space-y-4'>
                    <li className='flex gap-3'>
                      <span className='text-green-600 text-xl'>✓</span>
                      <span>
                        <strong>Lower Water Bills</strong> — Reduce reliance on
                        expensive municipal or tanker water.
                      </span>
                    </li>

                    <li className='flex gap-3'>
                      <span className='text-green-600 text-xl'>✓</span>
                      <span>
                        <strong>Year-Round Water Availability</strong> —
                        Maintain consistent water supply even in drought.
                      </span>
                    </li>

                    <li className='flex gap-3'>
                      <span className='text-green-600 text-xl'>✓</span>
                      <span>
                        <strong>Eco-Friendly</strong> — Support natural
                        ecosystems and improve groundwater sustainability.
                      </span>
                    </li>

                    <li className='flex gap-3'>
                      <span className='text-green-600 text-xl'>✓</span>
                      <span>
                        <strong>Regulatory Compliance</strong> — Meet
                        environmental norms and water management standards.
                      </span>
                    </li>

                    <li className='flex gap-3'>
                      <span className='text-green-600 text-xl'>✓</span>
                      <span>
                        <strong>Long-Term Cost Savings</strong> — A one-time
                        investment with lasting returns.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Service6
