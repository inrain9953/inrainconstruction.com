import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'
import ICPLCertification from '@/components/ICPL/ICPLCertification'

const Products = () => {
  const title =
    'Rainwater Harvesting Modules | Rainwater Harvesting Filtration System | InRain® Construction Pvt. Ltd.'
  const desc =
    'Are you looking for Rainwater Harvesting products? InRain® construction provides high quality product Rainwater Harvesting Filtration, Rainwater Harvesting Modules, Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, EPDM Liner, Geo Textile.'
  const keyword =
    'Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, Rainwater Harvesting Filter, Rainwater Harvesting Products, Self Cleaning Mesh Filter System, rainwater harvesting system, rainwater harvesting technology'
  const canonical = 'https://www.inrainconstruction.com/products'
  const ogUrl = 'https://www.inrainconstruction.com/products'
  const ogTitle = 'InRain® Rainwater Harvesting System | InRain® Construction'
  const ogDescription =
    'InRain Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.'
  const twittertitle =
    'InRain® Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'InRain® Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.'

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
        <section className='relative overflow-hidden'>
          <Image
            className='w-full h-[220px] md:h-[350px] object-cover'
            src='/banner4.jpg'
            alt='InRain Banner'
            width={1920}
            height={500}
            priority
          />

          <div className='absolute inset-0 bg-black/40 flex items-center'>
            <div className='max-w-7xl mx-auto px-6 md:px-10 w-full'>
              <h1 className='text-3xl md:text-6xl font-bold text-white'>
                Our Products
              </h1>

              <p className='mt-3 text-sm md:text-lg text-gray-200'>
                <Link href='/' className='hover:text-green-400 transition'>
                  Home
                </Link>{' '}
                / Our Products
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className='max-w-7xl mx-auto px-5 md:px-10 py-10 space-y-24'>
          {/* Product 1 */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                Rainwater Harvesting Modules
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                A rainwater harvesting module is a permeation stormwater tank
                intended for filtration, transitory maintenance, and ensuing
                release. It is utilized in waste channel applications. It is
                developed utilizing our restrictive plastic infusion-shaped
                boards. We provide a range of modules as per the requirements.
              </p>
            </div>

            <div className='group overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                className='w-full transition duration-700 group-hover:scale-105'
                src='/product/product1.jpeg'
                alt='Rainwater Harvesting Modules'
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='group order-2 md:order-1 overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                className='w-full transition duration-700 group-hover:scale-105'
                src='/product/product3.png'
                alt='Rainwater Harvesting Filtration System'
                width={500}
                height={500}
              />
            </div>

            <div className='order-1 md:order-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                Rainwater Harvesting Filtration System
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                The filter channel is used to remove suspended impurities from
                the rainwater collected on rooftops. It consists of a chamber
                filled with filtering media that helps trap dust, debris, and
                other particles. At InRain® Construction, we offer a variety of
                high-quality filtration units designed for domestic and
                industrial rainwater harvesting needs, ensuring clean and safe
                water collection.
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                EPDM Liner
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                <span className='text-green-700 font-semibold'>
                  InRain<sup>®</sup>
                </span>{' '}
                Construction's Ethylene Propylene Diene Monomer (EPDM) Liner has
                been figured to be perfect for amphibian life. It is suggested
                that clients test the EPDM liner before using it to guarantee it
                is good for the particular oceanic species for the proposed
                application.
              </p>
            </div>

            <div className='group overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                className='w-full transition duration-700 group-hover:scale-105'
                src='/product/black-sheet.png'
                alt='EPDM Liner'
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product 4 */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='group order-2 md:order-1 overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                className='w-full transition duration-700 group-hover:scale-105'
                src='/product/white-sheet.png'
                alt='Geo Textile'
                width={500}
                height={500}
              />
            </div>

            <div className='order-1 md:order-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                Geo Textile
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                Geo-textile is essentially a porous texture that, when utilized
                in relationship with soil, can isolate, channel, strengthen,
                secure, or channel. Ordinarily produced using polypropylene or
                polyester, geotextile textures come in three fundamental
                structures: woven, needle-punched, or heat-reinforced.
              </p>
            </div>
          </div>

          {/* Product 5 */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                Self Cleaning Mesh Filter System
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                1. Time-saving — The filtration process is not interrupted
                during the cleaning cycle, eliminating the need to shut down the
                irrigation system.
                <br />
                2. Low water and energy consumption.
                <br />
                3. Sturdy and durable.
                <br />
                4. Easy installation and low maintenance.
                <br />
                5. Compact design and small footprint.
              </p>
            </div>

            <div className='group flex justify-center overflow-hidden rounded-3xl shadow-2xl bg-white p-6'>
              <Image
                className='h-72 w-auto object-contain transition duration-700 group-hover:scale-105'
                src='/product/motor.jpg'
                alt='Self Cleaning Mesh Filter System'
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>
      <ICPLCertification />
      <Footer />
    </>
  )
}

export default Products
