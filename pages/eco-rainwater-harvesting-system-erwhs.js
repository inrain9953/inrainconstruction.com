import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import service11 from './../public/service11.jpg'
import harvesting11 from './../public/services/harvesting7.jpg'
import PopUp from '@/components/popup'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const EcorainRainwater = () => {
  const title =
    'EcoRain Rainwater Harvesting System | How the Ecorain System Works?'
  const desc =
    'Are you searching for EcoRain Rainwater Harvesting System and How the Ecorain System Works? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.'
  const keyword =
    'EcoRain Rainwater Harvesting System, Ecorain System Works, Ecorain advantages, ecorain system in delhi, rainwater harvesting system in delhi, ecorain rainwater harvesting system, Urban Water Sustainability, rainwater harvesting company'
  const canonical =
    'https://www.inrainconstruction.com/eco-rainwater-harvesting-system-erwhs'
  const ogUrl =
    'https://www.inrainconstruction.com/eco-rainwater-harvesting-system-erwhs'
  const ogTitle =
    'EcoRain Rainwater Harvesting System | How the Ecorain System Works?'
  const ogDescription =
    'Are you searching for EcoRain Rainwater Harvesting System and How the Ecorain System Works? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.'
  const twittertitle =
    'EcoRain Rainwater Harvesting System | How the Ecorain System Works?'
  const twitterdescription =
    'Are you searching for EcoRain Rainwater Harvesting System and How the Ecorain System Works? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='UTF-8' />
        <meta name='language' content='en' />
        <meta name='author' content='InRain® Construction Pvt. Ltd.' />
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
        <section className='relative overflow-hidden rounded-3xl shadow-2xl'>
          <Image
            src={service11}
            alt='Eco Rainwater Harvesting System'
            className='w-full h-[220px] md:h-[320px] object-cover'
            loading='eager'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent' />

          <div className='absolute bottom-8 left-6 md:left-12 text-white'>
            <div className='inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20'>
              <p className='text-sm md:text-base'>
                Home / Eco Rainwater Harvesting System
              </p>
            </div>

            <h1 className='mt-4 text-3xl md:text-5xl font-bold'>
              Eco Rainwater Harvesting System
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className='grid lg:grid-cols-2 gap-12 mt-10'>
          {/* Left Content */}
          <div className='bg-white rounded-3xl shadow-xl p-6 md:p-10'>
            <div className='w-24 h-1 bg-green-600 rounded-full mb-6'></div>

            <p className='text-gray-700 text-[17px] md:text-lg leading-relaxed'>
              Water scarcity is a pressing global issue, and as populations
              continue to grow, it becomes imperative to explore alternative
              methods for water conservation. One such method gaining popularity
              is rainwater harvesting. This ancient practice has gained renewed
              attention in recent years due to its potential to mitigate water
              shortages, reduce strain on existing water sources, and promote
              sustainable water management.
            </p>

            {/* Section */}
            <div className='mt-10'>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                The Importance of Rainwater Harvesting
              </h2>

              <div className='mt-4 h-1 w-16 bg-green-500 rounded-full'></div>

              <p className='mt-5 text-gray-700 text-[17px] md:text-lg leading-relaxed'>
                Rainwater is a precious resource that, if properly harnessed,
                can address water scarcity challenges faced by communities
                around the world. Rainwater harvesting offers several advantages
                over conventional water sources...
              </p>
            </div>

            {/* Components */}
            <div className='mt-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                Components of a Rainwater Harvesting System
              </h2>

              <div className='mt-4 h-1 w-16 bg-green-500 rounded-full'></div>

              <p className='mt-5 text-gray-700 text-[17px] md:text-lg leading-relaxed'>
                A Rainwater Harvesting System consists of several key components
                that work together to capture, store, and distribute rainwater.
              </p>

              <div className='mt-6 bg-green-50 border border-green-100 rounded-2xl p-6'>
                <ul className='space-y-4 text-gray-800'>
                  <li>
                    <strong>Gutters and Downspouts:</strong> These channels
                    collect rainwater from the catchment surface and direct it
                    into the storage system.
                  </li>

                  <li>
                    <strong>Leaf Screens and Filters:</strong> These prevent
                    debris, leaves, and contaminants from entering the storage
                    system.
                  </li>

                  <li>
                    <strong>Storage Tanks:</strong> Containers designed to hold
                    and store collected rainwater.
                  </li>

                  <li>
                    <strong>First Flush Diverters:</strong> Divert polluted
                    initial runoff away from the storage system.
                  </li>

                  <li>
                    <strong>Pumps and Distribution Systems:</strong> Used to
                    extract and distribute harvested water.
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className='mt-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                Benefits of Rainwater Harvesting
              </h2>

              <div className='mt-4 h-1 w-16 bg-green-500 rounded-full'></div>

              <p className='mt-5 text-gray-700 text-[17px] md:text-lg leading-relaxed'>
                Implementing a rainwater harvesting system brings numerous
                benefits. Firstly, it reduces the strain on traditional water
                sources...
              </p>
            </div>

            {/* Maintenance */}
            <div className='mt-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                Considerations and Maintenance
              </h2>

              <div className='mt-4 h-1 w-16 bg-green-500 rounded-full'></div>

              <p className='mt-5 text-gray-700 text-[17px] md:text-lg leading-relaxed'>
                When installing a rainwater harvesting system, it is essential
                to consider factors such as local regulations, the size of the
                catchment area, and the intended uses of the harvested water.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className='space-y-8 lg:sticky lg:top-24 h-fit'>
            {/* Image */}
            <div className='overflow-hidden rounded-3xl shadow-2xl'>
              <Link href='/'>
                <Image
                  src={harvesting11}
                  alt='Eco Rainwater Harvesting'
                  className='w-full object-cover hover:scale-105 transition duration-500'
                  loading='eager'
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Working Card */}
            <div className='bg-gradient-to-br from-sky-50 to-green-50 border border-green-100 rounded-3xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-5'>
                How the Ecorain System Works?
              </h2>

              <ul className='space-y-4 text-gray-800'>
                <li>
                  <strong>Catchment Surface</strong> – Usually the rooftop of a
                  building.
                </li>

                <li>
                  <strong>Gutters & Downspouts</strong> – Direct water into
                  storage.
                </li>

                <li>
                  <strong>Leaf Screens & Filters</strong> – Block debris and
                  dirt.
                </li>

                <li>
                  <strong>Storage Tanks</strong> – Above or below ground
                  storage.
                </li>

                <li>
                  <strong>First Flush Diverters</strong> – Remove polluted
                  runoff.
                </li>

                <li>
                  <strong>Pumps & Distribution Units</strong> – Deliver water
                  where needed.
                </li>
              </ul>
            </div>

            {/* Benefits Card */}
            <div className='bg-gradient-to-r from-green-600 to-sky-600 rounded-3xl p-8 text-white shadow-xl'>
              <h3 className='text-2xl font-bold mb-6'>The Ecorain Advantage</h3>

              <div className='space-y-3'>
                <p>✅ Saves Water & Money</p>
                <p>✅ Eco-Friendly</p>
                <p>✅ Ideal for Urban & Rural Spaces</p>
                <p>✅ Low Maintenance</p>
                <p>✅ Empowers Self-Reliance</p>
                <p>✅ Energy Efficient</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default EcorainRainwater
