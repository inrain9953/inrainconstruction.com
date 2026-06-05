import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import harvesting4 from './../public/services/harvesting4.jpg'
import service4 from './../public/service4.jpg'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'

const Service4 = () => {
  const title =
    'FRP Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const desc =
    'FRP Based Rainwater Harvesting System: InRain® Construction Pvt. Ltd. solutions are in form of Pre Cast modular systems that can adapt itself to various site conditions and are highly reliable & efficient.'
  const keyword =
    'FRP Rainwater Harvesting System, Fiber Reinforced Polymer, Sustainable Water Conservation, Lightweight Water Tanks, Eco-Friendly Rainwater Harvesting, Cost-Effective Water Solutions, Corrosion-Resistant Water Tanks, Low-Maintenance Rainwater Systems, Portable Water Harvesting Tanks, Modern Rainwater Harvesting Technology, Environmental Sustainability, Industrial Water Conservation'
  const canonical =
    'https://www.inrainconstruction.com/frp-based-rainwater-harvesting-system'
  const ogUrl =
    'https://www.inrainconstruction.com/frp-based-rainwater-harvesting-system'
  const ogTitle =
    'FRP Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'FRP Based Rainwater Harvesting System: InRain® Construction Pvt. Ltd. solutions are in form of Pre Cast modular systems that can adapt itself to various site conditions and are highly reliable & efficient.'
  const twittertitle =
    'FRP Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'FRP Based Rainwater Harvesting System: InRain® Construction Pvt. Ltd. solutions are in form of Pre Cast modular systems that can adapt itself to various site conditions and are highly reliable & efficient..'

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
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
        {/* Hero Section */}
        <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
          <Image
            src={service4}
            alt='FRP Based Rainwater Harvesting System'
            className='w-full h-[180px] md:h-[280px] object-cover'
            loading='eager'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent' />

          <div className='absolute bottom-6 left-6 md:left-10 text-white'>
            <div className='backdrop-blur-md bg-white/10 px-4 py-2 rounded-full inline-block mb-3'>
              <p className='text-xs md:text-sm font-medium'>
                <Link href='/' className='hover:text-green-400'>
                  Home
                </Link>{' '}
                / FRP Based Rainwater Harvesting System
              </p>
            </div>

            <h1 className='text-2xl md:text-5xl font-bold leading-tight'>
              FRP Based Rainwater Harvesting System
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className='grid lg:grid-cols-2 gap-12 mt-10'>
          {/* Left Content */}
          <div className='bg-white rounded-3xl shadow-lg p-6 md:p-10 border border-slate-100'>
            <p className='text-[17px] md:text-lg leading-8 text-gray-700 text-justify'>
              <span className='text-green-700 font-bold'>InRain®</span>{' '}
              Construction Pvt. Ltd. is helping communities and industries by
              providing sustainable and cost-effective water conservation
              methods. Rainwater harvesting is no longer looked at as a
              time-consuming and costly solution with high maintenance. Advanced
              technology has quickly started to revolutionize the industry with
              its cost-effective solutions. We at Inrain Construction Pvt. Ltd.
              offer a wide range of solutions that are not only cost-effective
              but also environmentally friendly.
            </p>

            <p className='mt-6 text-[17px] md:text-lg leading-8 text-gray-700 text-justify'>
              The FRP-based rainwater harvesting system offers an economic
              solution to modern-day economic requirements. Fiber-reinforced
              polymer-based systems are becoming popular very fast as they are
              not only lightweight but also very sturdy. Its ability to resist
              corrosion and ultraviolet light makes it the material of choice
              for rainwater harvesting systems.
            </p>

            <p className='mt-6 text-[17px] md:text-lg leading-8 text-gray-700 text-justify'>
              In the traditional methods of{' '}
              <Link
                href='https://www.inrainconstruction.com/rainwater-harvesting-system'
                className='font-semibold text-green-600 hover:text-sky-500'
              >
                Rainwater Harvesting Systems
              </Link>
              , installation cost and maintenance are the major challenges. As
              it was using concrete or metal to construct the water collection
              tank or pit. These pits are not only expensive but also have high
              maintenance, as they are prone to corrosion and developing
              infestations.
            </p>

            <p className='mt-6 text-[17px] md:text-lg leading-8 text-gray-700 text-justify'>
              However, fiber-reinforced polymers, on the other hand, are very
              durable and low on maintenance. This has increased the interest of
              people in FRP-based rainwater harvesting systems.
            </p>

            <p className='mt-6 text-[17px] md:text-lg leading-8 text-gray-700 text-justify'>
              These FRP-based rainwater harvesting systems are portable and
              recyclable, which helps in reducing waste and cost. Thereby
              encouraging more and more people to adopt sustainable water
              conservation methods and reduce their dependency on mains water
              supply, as a result, helping the environment in an eco-friendly
              way.
            </p>

            <p className='mt-6 text-[17px] md:text-lg leading-8 text-gray-700 text-justify'>
              For all those housing societies and businesses that are looking to
              contribute to the environment positively, the FRP-based rainwater
              harvesting system is a perfect choice. So, whether you are
              building a new house, looking to reduce the water bill of your
              business, or trying to include sustainable water conservation in
              your renovated accommodation, FRP-based rainwater harvesting
              offers the complete solution.
            </p>
          </div>

          {/* Right Side */}
          <div className='space-y-8'>
            {/* Image Card */}
            <div className='overflow-hidden rounded-3xl shadow-2xl group'>
              <Link href='https://www.inrainconstruction.com/'>
                <Image
                  src={harvesting4}
                  alt='Rainwater Harvesting Filtration System'
                  className='w-full object-cover transition duration-700 group-hover:scale-105'
                  loading='eager'
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Benefits Card */}
            <div className='bg-gradient-to-br from-green-50 to-sky-50 rounded-3xl shadow-xl border border-green-100 p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-1 h-8 bg-green-600 rounded-full' />
                <h2 className='text-2xl font-bold text-gray-900'>
                  Key Benefits of FRP-Based Rainwater Harvesting Systems
                </h2>
              </div>

              <ul className='space-y-4 text-gray-700'>
                <li className='flex gap-3'>
                  <span>✓</span>
                  <span>
                    <strong>Durable & Long-Lasting</strong> — Built to withstand
                    corrosion, weather, and time.
                  </span>
                </li>

                <li className='flex gap-3'>
                  <span>✓</span>
                  <span>
                    <strong>Lightweight & Portable</strong> — Easy to transport,
                    install, and reposition.
                  </span>
                </li>

                <li className='flex gap-3'>
                  <span>✓</span>
                  <span>
                    <strong>Low Maintenance</strong> — No rusting, no cracking,
                    no constant repairs.
                  </span>
                </li>

                <li className='flex gap-3'>
                  <span>✓</span>
                  <span>
                    <strong>Recyclable & Eco-Friendly</strong> — Promotes
                    sustainability with minimal waste.
                  </span>
                </li>

                <li className='flex gap-3'>
                  <span>✓</span>
                  <span>
                    <strong>Cost-Effective</strong> — Saves on both installation
                    and long-term maintenance costs.
                  </span>
                </li>

                <li className='flex gap-3'>
                  <span>✓</span>
                  <span>
                    <strong>Ideal for Residential & Commercial Use</strong> —
                    Perfect for homes, housing societies, schools, offices, and
                    industries.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Service4
