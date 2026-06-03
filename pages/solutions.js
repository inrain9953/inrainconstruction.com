import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'
import ICPLCertification from '@/components/ICPL/ICPLCertification'

const Solutions = () => {
  const title =
    'Reuse of Rain Water | Rainwater Harvesting Recharge | InRain® Construction Pvt. Ltd.'
  const desc =
    'Explore the potential of rainwater reuse. From innovative pond development to sustainable rainwater harvesting, we specialize in the design, implementation, and management of water conservation projects.'
  const keyword =
    'Reuse of Rain Water, Rainwater Harvesting Recharge, Rain Water harvesting solution, Rainwater Harvesting, Ground Water Management, Pond Development, Rain Water Harvesting Recharge, Rainwater solution, ICPL'
  const canonical = 'https://www.inrainconstruction.com/solutions'
  const ogUrl = 'https://www.inrainconstruction.com/solutions'
  const ogTitle =
    'Reuse of Rain Water | Rainwater Harvesting Recharge | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'Explore the potential of rainwater reuse. From innovative pond development to sustainable rainwater harvesting, we specialize in the design, implementation, and management of water conservation projects.'
  const twittertitle =
    'Reuse of Rain Water | Rainwater Harvesting Recharge | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Explore the potential of rainwater reuse. From innovative pond development to sustainable rainwater harvesting, we specialize in the design, implementation, and management of water conservation projects.'

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
      <div className=''>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          <Image
            className='w-full h-[220px] md:h-[300px] object-cover'
            src='/solution_water.jpg'
            alt='Conserve Water'
            width={1200}
            height={400}
            priority
          />

          <div className='absolute inset-0 bg-black/45 flex items-center'>
            <div className='max-w-7xl mx-auto px-6 md:px-10 w-full'>
              <h1 className='text-3xl md:text-6xl font-bold text-white'>
                Solutions
              </h1>

              <p className='mt-3 text-sm md:text-lg text-gray-200'>
                <Link href='/' className='hover:text-green-400 transition'>
                  Home
                </Link>{' '}
                / Solutions
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Container */}
        <section className='max-w-7xl mx-auto px-5 md:px-10 py-10 space-y-24'>
          {/* Solution 1 */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='group overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                className='w-full transition duration-700 group-hover:scale-105'
                src='/solution1.jpg'
                alt='Reuse of Rain Water'
                width={500}
                height={500}
              />
            </div>

            <div className='bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                Reuse of Rainwater
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                Reuse of rainwater is the key benefactor towards securing and
                abnormally using water resources.
                <br />
                <br />
                We have a solid nearness in the design, implementation, and
                management of such activities. Our center organizations are held
                up by administrations for rainwater harvesting and groundwater
                management and broad research and development.
              </p>
            </div>
          </div>

          {/* Solution 2 */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='order-2 md:order-1 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                Pond Development
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                Water bodies are like life in Indian culture. This is a standout
                among the best revival-cum-holding structures, which require the
                least venture and give the most noteworthy return. At{' '}
                <Link
                  target='_blank'
                  href='https://www.inrainconstruction.com/about_icpl'
                  className='text-sky-600 hover:text-green-600 font-medium'
                >
                  ICPL
                </Link>{' '}
                we utilize the most trend-setting innovation to protect water
                assets in their unique state. We work past to make the lakes
                look great.
                <br />
                <br />
                Our work incorporates purification, creation, and the board of
                lakes securely following every single required guideline and
                rule of the government. In order to maintain a standard, each
                water body needs to undergo certain processes like desalting,
                water augmentation, bioremediation, decentralization, visual
                attraction, and monitoring. We make sure that the entire process
                is professionally and smoothly managed.
              </p>
            </div>

            <div className='order-1 md:order-2 group overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                className='w-full transition duration-700 group-hover:scale-105'
                src='/solution2.jpg'
                alt='Pond Development'
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Solution 3 */}
          <div
            data-aos='fade-up'
            className='grid md:grid-cols-2 gap-10 items-center'
          >
            <div className='group overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                className='w-full transition duration-700 group-hover:scale-105'
                src='/solution3.jpg'
                alt='Rainwater Harvesting Recharge'
                width={500}
                height={500}
              />
            </div>

            <div className='bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-800'>
                Rainwater Harvesting Recharge
              </h2>

              <div className='w-20 h-1 bg-green-600 rounded-full mt-5 mb-6'></div>

              <p className='text-gray-700 leading-relaxed text-base text-justify'>
                <Link
                  href='https://www.inrainconstruction.com/rainwater-harvesting-system'
                  className='text-sky-600 hover:text-green-600 font-medium'
                >
                  Rainwater Harvesting
                </Link>{' '}
                recharge involves capturing rainwater that would otherwise run
                off impermeable surfaces like roads, parking lots, rooftops, and
                compacted soil. These surfaces prevent rain from seeping into
                the ground, leading to higher runoff compared to natural,
                undeveloped areas.
                <br />
                <br />
                Effective rainwater recharge not only helps restore groundwater
                levels but also plays a crucial role in reducing the risks of
                urban flooding and soil erosion. At{' '}
                <span className='text-green-700 font-semibold'>
                  InRain®
                </span>{' '}
                Construction Pvt. Ltd., we design durable, low-maintenance
                rainwater harvesting systems that help reduce dependence on
                municipal water supplies—promoting both environmental and
                financial sustainability for your community.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-gradient-to-r from-sky-700 to-green-700 py-10 mt-10'>
          <div className='max-w-5xl mx-auto text-center px-5'>
            <h2 className='text-2xl md:text-4xl font-bold text-white'>
              Sustainable Water Solutions for a Better Tomorrow
            </h2>

            <p className='text-white/90 text-lg mt-6 max-w-3xl mx-auto'>
              We help industries, institutions, residential communities, and
              government organizations implement innovative rainwater harvesting
              and water conservation solutions across India.
            </p>

            <Link
              href='/contact-us'
              className='inline-flex mt-8 bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg'
            >
              Contact Us Today
            </Link>
          </div>
        </section>

        <ICPLCertification />
      </div>
      <Footer />
    </>
  )
}

export default Solutions
