import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import service5 from './../public/service5.jpg'
import harvesting5 from './../public/services/harvesting5.jpg'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'

const Service5 = () => {
  const title =
    'Roof Top Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const desc =
    'Rooftop Rain Water Harvesting System (RRWHS) is the technique through which rain water including water butt, diverter, filter and pump is captured from the roof catchments and stored in reservoirs.'
  const keyword =
    'Roof Top Rainwater Harvesting, Residential Rainwater Harvesting, Commercial Water Conservation, Water Filtration Systems, InRain Construction Pvt. Ltd., Sustainable Water Management, Roof Water Collection, Rainwater Harvesting Installation, Backup Water Supply, Environmental Impact, Water Conservation Solutions, Maintenance Services, Rainwater Filtration Systems'
  const canonical =
    'https://www.inrainconstruction.com/roof-top-rainwater-harvesting-system-RRWHS-InRain'
  const ogUrl =
    'https://www.inrainconstruction.com/roof-top-rainwater-harvesting-system-RRWHS-InRain'
  const ogTitle =
    'Roof Top Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'Rooftop Rain Water Harvesting (RRWHS) is the technique through which rain water including water butt, diverter, filter and pump is captured from the roof catchments and stored in reservoirs.'
  const twittertitle =
    'Roof Top Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Rooftop Rain Water Harvesting (RRWHS) is the technique through which rain water including water butt, diverter, filter and pump is captured from the roof catchments and stored in reservoirs.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charset='UTF-8' />
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
            src={service5}
            alt='Roof Top Rainwater Harvesting System'
            loading='eager'
            priority={true}
            unoptimized={true}
          />
          <div className='absolute md:bottom-2 bottom-0 md:left-5 left-2'>
            <p className='text-xs md:text-lg text-black'>
              <Link href={'/'}>Home</Link> / Roof Top Rainwater Harvesting
              System
            </p>
          </div>
        </div>

        <div className='m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center'>
          <div className='text-left'>
            <h1 className='text-3xl md:text-4xl font-semibold'>
              Roof Top Rainwater Harvesting System
            </h1>

            <p className='text-[17px] text-justify md:text-lg mt-3'>
              Rooftop Rainwater Harvesting Systems (RRWHS) are one of the most
              popular rainwater harvesting systems of current times. Rain is one
              of the most natural source of water. By applying a rooftop
              rainwater harvesting system, we will be able to use natural
              rainwater. The rooftop rainwater harvesting systems are suitable
              for both residential and commercial areas. <br></br>
              <br></br>
              In InRain Construction Pvt. Ltd., we deal with a wide variety of{' '}
              <Link
                href={
                  'https://www.inrainconstruction.com/rainwater-harvesting-system'
                }
                className='text-green-600 hover:text-sky-500 font-semibold'
              >
                Rainwater Harvesting Systems.
              </Link>{' '}
              Our water conservation and management services are very flexible,
              as we provide solutions based on the customer’s needs. We provide
              both complete package installation and management services. In
              case you need to install the rooftop rainwater harvesting system
              in your newly constructed house, we provide a complete package
              along with maintenance services. You can choose specific
              components if you have already installed the rainwater harvesting
              system. Our packages are suitable for both commercial and
              residential areas.
              <br></br>
              <br></br>
              Filtration is the major requirement for rooftop rainwater
              harvesting systems. As the device collects rainwater from the
              rooftop it also collects various harmful pollutants, which can be
              organic or inorganic. Hence, having proper water filtration is
              must; various types of water filters can be used in rooftop
              rainwater harvesting systems depending on the use of water. If you
              intend to use the harvested water for drinking and cooking, then
              filtration needs to be at a micro-level to make the water free
              from any impurities and ready for consumption. At Inrain
              Construction Pvt. Ltd., we can help you with our wide variety of
              water filters depending on your filtration needs.
              <br></br>
              <br></br>A rooftop rainwater harvesting system comes with various
              benefits. Not only does it helps to reduce water bills by
              providing a backup system for your mains supply, but it also helps
              in having a positive impact on the environment.
            </p>
          </div>
          <div className='mt-5'>
            <Link href={'https://www.inrainconstruction.com/'}>
              <Image
                className='w-full'
                src={harvesting5}
                alt='Rainwater Harvesting Module View'
                loading='eager'
                priority={true}
                unoptimized={true}
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Service5
