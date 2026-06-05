import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import harvesting2 from './../public/services/harvesting2.jpg'
import service2 from './../public/service2.jpg'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'

const Service2 = () => {
  const title =
    'Co-Polymer Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const desc =
    'Co-polymer based rainwater harvesting system uses a structure that offers an economical and eco-friendly solution compared to traditional rainwater harvesting systems.'
  const keyword =
    'Co-polymer based rainwater harvesting system, Polymer Type Rainwater Harvesting System Service Provider, Polymer Type Rainwater Harvesting System, rainwater harvesting system'
  const canonical =
    'https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system'
  const ogUrl =
    'https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system'
  const ogTitle =
    'Co-Polymer Based Rainwater Harvesting System | InRain® Construction'
  const ogDescription =
    'Co-polymer based rainwater harvesting system uses a structure that offers an economical and eco-friendly solution compared to traditional rainwater harvesting systems.'
  const twittertitle =
    'Co-Polymer Based Rainwater Harvesting System | InRain™ Construction'
  const twitterdescription =
    'Co-polymer based rainwater harvesting system uses a structure that offers an economical and eco-friendly solution compared to traditional rainwater harvesting systems.'

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
        {/* Hero Banner */}
        <section className='relative overflow-hidden rounded-3xl shadow-2xl'>
          <Image
            src={service2}
            alt='Water is source of life'
            className='w-full h-[220px] md:h-[320px] object-cover'
            loading='eager'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent' />

          <div className='absolute bottom-8 left-6 md:left-12 text-white'>
            <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 inline-block'>
              <p className='text-sm md:text-base'>
                <Link href='/' className='hover:text-green-400'>
                  Home
                </Link>{' '}
                / Co-Polymer Based Rainwater Harvesting System
              </p>
            </div>

            <h1 className='mt-4 text-3xl md:text-5xl font-bold leading-tight'>
              Co-Polymer Based Rainwater Harvesting System
            </h1>
          </div>
        </section>

        {/* Main Section */}
        <section className='grid lg:grid-cols-2 gap-12 mt-10'>
          {/* Content */}
          <div className='bg-white rounded-3xl shadow-xl p-6 md:p-10'>
            <div className='w-20 h-1 bg-green-600 rounded-full mb-6' />

            <p className='text-[17px] md:text-lg leading-relaxed text-gray-700 text-justify'>
              <span className='text-green-700 font-semibold'>InRain®</span>{' '}
              Construction Private Limited offers co-polymer-based rainwater
              harvesting system services for water conservation and management.
              This is a modern-day technique of harvesting natural rainwater.
              This technique is cost-effective and easy to maintain compared to
              traditional rainwater harvesting. This technique is also known as
              the modular rainwater harvesting technique, as it uses multiple
              stackable modules for building the structure of the rainwater
              harvesting system; this makes construction and installation faster
              and easier.
            </p>

            <p className='text-[17px] md:text-lg leading-relaxed text-gray-700 text-justify mt-6'>
              The co-polymer-based rainwater harvesting system uses a structure
              that offers an economical and eco-friendly solution compared to
              traditional rainwater harvesting systems. Co-polymer products are
              less expensive when compared to the cost of building brick and
              reinforced cement concrete or plain cement concrete storage.
              Moreover, cement concrete storage that is used in traditional
              systems will require maintenance, as it has the chance of
              developing infestations of algae and fungi.
            </p>

            <p className='text-[17px] md:text-lg leading-relaxed text-gray-700 text-justify mt-6'>
              The co-polymer-based{' '}
              <Link
                className='text-sky-600 hover:text-green-600 font-semibold'
                href='https://www.inrainconstruction.com/rainwater-harvesting-system'
              >
                Rainwater Harvesting System
              </Link>{' '}
              comes with certain advantages over the traditional method of
              rainwater harvesting. Some of the major advantages of this system
              are
            </p>

            <div className='bg-green-50 border border-green-200 rounded-2xl p-6 mt-6'>
              <ol className='list-decimal pl-5 space-y-3 font-medium text-gray-800'>
                <li>Eco-friendly and economical solutions.</li>
                <li>
                  Geo sheet-covered percolation storage tank to ensure excellent
                  filtration.
                </li>
                <li>
                  Underground placement of the percolation tank ensures no easy
                  access to the water tank, making it absolutely safe.
                </li>
                <li>
                  Low or almost no maintenance in comparison to traditional
                  rainwater harvesting systems.
                </li>
                <li>
                  Higher recharge capacity as water comes from five sides.
                </li>
                <li>Co-polymer-based modules have a high lifespan.</li>
                <li>
                  Portability is one of the main properties of these
                  co-polymer-based stackable modules, as these modules can be
                  easily shifted and installed at different locations.
                </li>
              </ol>
            </div>

            <p className='text-[17px] md:text-lg leading-relaxed text-gray-700 text-justify mt-8'>
              A{' '}
              <Link
                className='text-sky-600 hover:text-green-600 font-semibold'
                href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
              >
                Modular Rainwater Harvesting System
              </Link>{' '}
              meets the modern-day requirements and comes with safety assurance
              and an option of portability, which makes it one of the most
              sought-after water conservation and management systems.
            </p>
          </div>

          {/* Right Side */}
          <div className='space-y-6 lg:sticky lg:top-36 h-fit'>
            <div className='overflow-hidden rounded-3xl shadow-2xl'>
              <Link href='https://www.inrainconstruction.com/'>
                <Image
                  src={harvesting2}
                  alt='Co-polymer based rainwater harvesting system'
                  className='w-full object-cover hover:scale-105 transition duration-500'
                  loading='eager'
                  priority
                  unoptimized
                />
              </Link>
            </div>

            <div className='bg-gradient-to-br from-green-50 to-sky-50 border border-green-100 rounded-3xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Why Co-Polymer Over Traditional Methods?
              </h2>

              <p className='text-gray-700 leading-relaxed'>
                Traditional concrete tanks can be bulky, expensive, and
                high-maintenance. Over time, they may develop cracks, algae, or
                fungal growth. Our co-polymer modules, on the other hand, offer
                a smarter alternative:
              </p>

              <ul className='mt-5 space-y-3 text-gray-800'>
                <li>✓ More affordable than RCC or PCC constructions.</li>
                <li>✓ Algae and fungus-resistant.</li>
                <li>✓ Portable and modular.</li>
                <li>✓ Easy relocation and reconfiguration.</li>
                <li>✓ Suitable for parking, gardening, and play zones.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Highlight Section */}
        <section className='mt-16'>
          <div className='bg-gradient-to-r from-sky-600 to-green-600 rounded-3xl p-8 md:p-12 shadow-2xl'>
            <p className='text-white text-[17px] md:text-lg leading-relaxed text-justify'>
              Unlike conventional RWH systems, the recharge chamber in modular
              RWH need not be PCC/RCC, thereby saving cost. Further, the PCC/RCC
              storage-cum-recharge tank, after a few years, gets infested with
              algae/cobwebs and is very difficult to clean, whereas modular RWH
              with polypropylene blocks wrapped on all sides with geo-textile is
              almost maintenance-free, and its useful life is longer with an
              option of portability if there is a need to use the occupied land
              for some construction purposes.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Service2
