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
      <div className='mt-5 md:m-10'>
        <div>
          <Image
            className='w-full h-28 md:h-72 md:rounded-xl md:shadow-2xl relative'
            src={service3}
            alt='Rainwater Harvesting Banner'
            loading='eager'
            priority={true}
            unoptimized={true}
          />
          <div className='absolute md:bottom-2 bottom-0 md:left-5 left-2'>
            <p className='text-xs md:text-lg text-green-600'>
              <Link href={'/'}>Home</Link> / Rainwater Harvesting Pit
            </p>
          </div>
        </div>

        <div className='m-5 md:grid md:grid-cols-2 md:gap-10 md:items-start'>
          <div className='text-left'>
            <h1 className='text-2xl md:text-2xl font-semibold'>
              Rainwater Harvesting Pit—A Smart Solution by InRain Construction
              Pvt. Ltd.
            </h1>

            <p className='text-[17px] text-justify mt-2'>
              India is one of the fastest-developing nations in the world, but
              it also faces a critical challenge: water scarcity, Rapid
              urbanization, growing populations, and excessive dependence on
              groundwater have created a pressing need for sustainable water
              management systems. In this context, Rainwater Harvesting is no
              longer an option — it is a necessity.
              <br />
              Among the different techniques available, one of the most
              practical, cost-effective, and widely adopted methods is the
              Rainwater Harvesting Pit. At InRain Construction Pvt. Ltd., we
              specialize in designing and implementing modern,{' '}
              <Link
                className='text-green-600 font-semibold hover:text-sky-500'
                href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
                target='_blank'
              >
                {' '}
                modular rainwater harvesting
              </Link>{' '}
              pits that not only capture and store rainwater but also recharge
              aquifers and stabilize groundwater levels.
            </p>

            <h2 className='text-2xl mt-5 md:text-2xl font-semibold'>
              What is Rainwater Harvesting Pit?
            </h2>

            <p className='text-[17px] text-justify mt-2'>
              A{' '}
              <Link
                className='text-green-600 font-semibold hover:text-sky-500'
                href='https://www.inrainconstruction.com/'
                target='_blank'
              >
                Rainwater Harvesting Pit
              </Link>{' '}
              is a specially designed structure built to collect, filter, and
              store rainwater. Typically constructed underground, it allows
              rainwater runoff from rooftops, paved surfaces, and open areas to
              be directed into the pit, where it percolates into the soil,
              replenishing groundwater reserves.
              <br />
              <br />
              <bold className='font-semibold'>
                This method is simple, cost-effective, and highly efficient for
                both residential and large-scale projects.
              </bold>
            </p>

            <h2 className='text-2xl mt-5 md:text-2xl font-semibold'>
              Benefits of Rainwater Harvesting Pit
            </h2>
            <p className='text-[17px] text-justify mt-2'>
              At InRain Construction, we emphasize why installing a rainwater
              harvesting pit is one of the smartest water management choices:
            </p>

            <ul className='list-disc m-2 text-[17px] text-justify'>
              <li>
                <bold className='font-semibold'>Groundwater Recharge</bold> –
                Helps replenish aquifers and balance water tables.
              </li>
              <li>
                <bold className='font-semibold'>Prevents Waterlogging</bold> –
                Reduces flooding and surface runoff during heavy rains.
              </li>
              <li>
                <bold className='font-semibold'>Cost Savings</bold> – Decreases
                dependency on municipal or tanker water supply.
              </li>
              <li>
                <bold className='font-semibold'>Eco-Friendly</bold> – Conserves
                water resources and supports sustainability.
              </li>
              <li>
                <bold className='font-semibold'>Customizable Design</bold> – Can
                be adapted to residential, commercial, and industrial needs.
              </li>
            </ul>
          </div>
          <div className='mt-5'>
            <Image
              className='w-full md:h-[275px] h-[200px] rounded-xl'
              src={harvesting12}
              alt='Modular Rainwater Harvesting'
              loading='eager'
              priority={true}
              unoptimized={true}
            />
            <div className='mt-5 text-justify'>
              <h3 className='text-xl font-semibold'>
                Why Choose InRain Construction for Rainwater Harvesting Pits?
              </h3>
              <p className='text-[17px] mt-1'>
                With more than 4,000 successful rainwater harvesting
                installations across India, InRain Construction Pvt. Ltd. is a
                trusted name in sustainable water solutions.
              </p>
              <p className='text-[17px] mt-4 font-semibold'>
                Our rainwater harvesting pits stand out because:
              </p>
              <ul className='m-5 list-disc text-[17px] mt-2'>
                <li>
                  <bold className='font-semibold'>
                    Modular & Load-Bearing Technology
                  </bold>{' '}
                  — Unlike traditional stone-filled pits, our modular structures
                  are durable, reusable, and space-efficient.
                </li>
                <li>
                  <bold className='font-semibold'>End-to-End Service</bold> —
                  From site surveys and hydrological analysis to design,
                  construction, and maintenance, we provide turnkey solutions.
                </li>
                <li>
                  <bold className='font-semibold'>
                    Trusted by Industry Leaders
                  </bold>{' '}
                  — Our clients include Hindustan Unilever, PepsiCo, CPWD, Smart
                  City projects, and more.
                </li>
                <li>
                  <bold className='font-semibold'>Long-Term Performance</bold> —
                  Engineered for efficiency with minimal maintenance
                  requirements.
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl mt-5 md:text-2xl font-semibold'>
                Applications of Rainwater Harvesting Pits
              </h3>
              <p className='text-[17px] text-justify mt-2'>
                Our rainwater harvesting pits are ideal for:
              </p>

              <ul className='list-disc font-semibold m-5 text-[17px] text-justify'>
                <li>🏢 Commercial complexes & IT parks</li>
                <li>🏘️ Residential societies & towns</li>
                <li>🏭 Industrial plants & factories</li>
                <li>🏫 Schools, colleges & institutions</li>
                <li>🏛️ Government buildings & infrastructure projects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='m-5 md:m-10 bg-sky-300 rounded-lg'>
          <p className='text-[17px] text-justify mt-3 p-5'>
            A Rainwater Harvesting Pit is more than just a water conservation
            structure — it’s an investment in the future. With InRain
            Construction’s expertise in modular rainwater harvesting systems,
            you can ensure sustainable water management while contributing to
            environmental preservation.
            <br />
            <br />
            If you are planning to install a rainwater harvesting pit in India,
            partner with InRain Construction Pvt. Ltd. for reliable, efficient,
            and future-ready solutions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RainwaterHarvestingPit
