import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import service10 from './../public/service10.jpg'
import harvesting10 from './../public/harvesting11.jpg'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'

const Service10 = () => {
  const title = 'Bioswale for Rainwater Drain | Why Choose Bioswales?'
  const desc =
    'Bioswales work on the same principle as rain gardens. Unlike rain gardens, which are depressions, bioswales are channels, planted with the same hardy, water-tolerant species as that for rain gardens. '
  const canonical =
    'https://www.inrainconstruction.com/bioswale-for-rainwater-drain'
  const ogUrl =
    'https://www.inrainconstruction.com/bioswale-for-rainwater-drain'
  const keyword =
    'Bioswale Rainwater Drain, Why Choose Bioswales, Stormwater Management, Rainwater Harvesting Solutions, Water Conservation Techniques, Groundwater Recharge, Erosion Control Methods, Sustainable Water Management, Urban Green Infrastructure, Bioswale Installation Services, Inrain Construction Pvt. Ltd'
  const ogTitle = 'Bioswale for Rainwater Drain | Why Choose Bioswales?'
  const ogDescription =
    'Bioswales work on the same principle as rain gardens. Unlike rain gardens, which are depressions, bioswales are channels, planted with the same hardy, water-tolerant species as that for rain gardens.'
  const twittertitle = 'Bioswale for Rainwater Drain | Why Choose Bioswales?'
  const twitterdescription =
    'Bioswales work on the same principle as rain gardens. Unlike rain gardens, which are depressions, bioswales are channels, planted with the same hardy, water-tolerant species as that for rain gardens.'

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
      <section className='max-w-7xl mx-auto px-4 md:px-8 py-10'>
        {/* Hero Banner */}
        <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
          <Image
            src={service10}
            alt='Bioswale for Rainwater Drain'
            className='w-full h-[220px] md:h-[320px] object-cover'
            loading='eager'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-black/40'></div>

          <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
            <h1 className='text-3xl md:text-5xl font-bold text-white mb-3'>
              Bioswale for Rainwater Drain
            </h1>

            <p className='text-sm md:text-lg text-white/90'>
              <Link href='/' className='hover:text-green-400 transition'>
                Home
              </Link>{' '}
              / Bioswale for Rainwater Drain
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-[1.6fr_1fr] gap-12 mt-16'>
          {/* Left Content */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
              Bioswale for Rainwater Drain
            </h2>

            <div className='w-24 h-1 bg-green-600 rounded-full mb-8'></div>

            <div className='space-y-6 text-slate-600 leading-8 text-base md:text-lg text-justify'>
              <p>
                InRain Construction Pvt. Ltd. is leading a socio-economic cause
                by helping people effectively utilize rainwater. We offer
                various solutions for rainwater conservation and management.
                Rainwater harvesting is a need of the modern-day world, and it
                needs to be practiced to save our fast-declining natural ground
                resources. Bioswale is one of the popular methods in water
                conservation and management. After rain, stormwater runoff, if
                not managed carefully, can do some serious damage, can damage
                public property & private property, can cause erosion, pollute
                lake water, and creates water logging that can lead to an
                infestation that can spread diseases.
              </p>

              <p>
                At InRain Construction Pvt. Ltd., we help in creating bioswales
                for rainwater drainage. Bioswale is an excellent solution for{' '}
                <Link
                  href='https://www.inrainconstruction.com/storm-water-recharge-and-management'
                  className='font-semibold text-green-600 hover:text-sky-600 transition'
                >
                  managing stormwater runoff.
                </Link>{' '}
                Since it uses green plants for filtration and management of
                water conservation through a channel, a bioswale looks very
                pleasing to the eyes. The stormwater runoff gets conveyed
                through a sloped channel, helping to remove pollutants from the
                water. Plants and species used in bioswales depend on the
                climate and the size of the place.
              </p>

              <p>
                Bioswale is an excellent solution for new-age residential
                societies and industries. Not only does it help in managing the
                excess water flow after the rain but it also helps in recharging
                groundwater and with improved greenery at the location. These
                are designed in such a way that they help in reducing the
                stormwater runoff velocity which not only helps in cleaning the
                water before infiltration but also helps in avoiding soil
                erosion.
              </p>

              <p>
                Bioswales can easily be installed in modern infrastructure. Some
                of the popular areas where bioswales are used are parking lots,
                near the sidewalks, kids' parks, streets, and green open areas.
                Bioswale installation requires soil testing, as it has to meet
                the required infiltration rate before it can be installed.
                InRain Construction Pvt. Ltd., with its advanced technology and
                professional team, helps in providing an end-to-end solution
                from consultation and{' '}
                <Link
                  href='https://www.inrainconstruction.com/rainwater-harvesting-installation-company'
                  className='font-semibold text-green-600 hover:text-sky-600 transition'
                >
                  installation to maintenance.
                </Link>
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className='space-y-8'>
            {/* Image Card */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100'>
              <Link href='https://www.inrainconstruction.com/'>
                <Image
                  src={harvesting10}
                  alt='Bioswale'
                  className='w-full hover:scale-105 transition duration-500'
                  loading='eager'
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Benefits Card */}
            <div className='bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-3xl shadow-xl p-8'>
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold'>
                  ✓
                </div>

                <h3 className='text-2xl font-bold text-slate-900'>
                  Why Choose Bioswales?
                </h3>
              </div>

              <p className='text-slate-600 leading-7 mb-6'>
                Apart from being highly functional, bioswales are visually
                appealing and can easily blend into the modern landscape of
                residential societies, industries, and commercial spaces. They
                not only manage excess rainwater but also support groundwater
                recharge and enhance the green cover of the space.
              </p>

              <h4 className='font-semibold text-lg text-slate-900 mb-4'>
                These systems are especially useful in areas like
              </h4>

              <ul className='space-y-3'>
                <li className='flex items-center gap-3'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Parking lots
                </li>

                <li className='flex items-center gap-3'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Roadside edges and sidewalks
                </li>

                <li className='flex items-center gap-3'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Parks and play areas
                </li>

                <li className='flex items-center gap-3'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Open green community spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Service10
