import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import service3 from './../public/service3.jpg'
import harvesting3 from './../public/services/harvesting3.jpg'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'

const Service3 = () => {
  const title =
    'Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const desc =
    'Modular Rainwater Harvesting: We, at InRain® Construction Pvt. Ltd. have adopted world-class and the most Infusing Modular technologies to store or reuse rain water in order to realize the needs of an enriched tomorrow with abundant water resources in place.'
  const keyword =
    'Modular Rainwater Harvesting in Delhi, Modular Rainwater Harvesting Service Provider, Modular Rainwater Harvesting, Modular Rainwater Harvesting Service Provider in Delhi, Modular Rainwater Harvesting System'
  const canonical =
    'https://www.inrainconstruction.com/modular-rainwater-harvesting'
  const ogUrl =
    'https://www.inrainconstruction.com/modular-rainwater-harvesting'
  const ogTitle =
    'Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'Modular Rainwater Harvesting: We, at InRain® Construction Pvt. Ltd. have adopted world-class and the most Infusing Modular technologies to store or reuse rain water in order to realize the needs of an enriched tomorrow with abundant water resources in place.'
  const twittertitle =
    'Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Modular Rainwater Harvesting: We, at InRain® Construction Pvt. Ltd. have adopted world-class and the most Infusing Modular technologies to store or reuse rain water in order to realize the needs of an enriched tomorrow with abundant water resources in place.'

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
      <section className='bg-gradient-to-b from-slate-50 via-white to-slate-50'>
        {/* Hero Banner */}
        <div className='relative mx-4 md:mx-10 mt-6 overflow-hidden rounded-2xl shadow-2xl'>
          <Image
            src={service3}
            alt='Rainwater Harvesting Banner'
            className='w-full h-[180px] md:h-[350px] object-cover'
            loading='eager'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-black/50' />

          <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
            <div className='inline-flex w-fit items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-sm text-white'>
              <Link href='/' className='hover:text-green-300'>
                Home
              </Link>
              <span className='mx-2'>/</span>
              Modular Rainwater Harvesting
            </div>

            <h1 className='mt-4 text-3xl md:text-5xl font-bold text-white'>
              Modular Rainwater Harvesting
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-12'>
          <div className='grid lg:grid-cols-2 gap-10 items-start'>
            {/* Left Content */}
            <div className='bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-10'>
              <div className='h-1 w-24 rounded-full bg-gradient-to-r from-green-500 to-sky-500 mb-6' />

              <p className='text-[17px] text-gray-700 leading-8 text-justify'>
                Infusing{' '}
                <Link
                  href='https://www.inrainconstruction.com/'
                  className='text-green-600 hover:text-sky-500 font-semibold'
                >
                  Modular Rainwater Harvesting
                </Link>{' '}
                technologies to store or recharge the groundwater in order to
                realize the needs of an enriched tomorrow with abundant water
                resources in place.
              </p>

              {/* Feature Highlights */}
              <div className='grid md:grid-cols-2 gap-4 my-8'>
                {[
                  'Polymer as strong as metal.',
                  'Load bearing and top surface utilization.',
                  'Time-saving during installation.',
                  'Accident-free.',
                  'Less maintenance cost than a civil pit.',
                  'Maintenance time and resource utilization.',
                  'Alteration and reuse advantage.',
                  'Cost advantage.'
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 p-4 rounded-xl border border-green-100 bg-green-50'
                  >
                    <span className='text-green-600 font-bold'>✓</span>
                    <span className='font-medium'>{item}</span>
                  </div>
                ))}
              </div>

              <p className='text-[17px] text-gray-700 leading-8 text-justify'>
                Urbanization has led to an increase in water consumption in
                various activities. The demand for water supply is quite high.
                However, our natural resources are very limited. There have been
                many reports of declining water levels around the world.
                Rainwater harvesting is one of the best solutions to keep
                sustainable development going. InRain® Construction Pvt. Ltd., a
                water conservation and management organization, offers various
                rainwater harvesting methods using the latest technology.
                <br />
                <br />
                In recent years, modular rainwater harvesting has become
                increasingly popular due to its various advantages over
                traditional rainwater harvesting methods. Modular rainwater
                harvesting effectively addresses two major concerns: budget and
                space. Not only it is easy on the pocket, but it also allows the
                use of space for various purposes.
                <br />
                <br />
                Polymer-based modular structures are used in this technique.
                Strength and load-bearing capacity are both excellent
                characteristics of these structures. Water harvesting areas
                prepared with modular structures can even be used for parking
                vehicles. The installation takes less time compared to a
                traditional rainwater harvesting system. Here are some
                advantages it offers:
              </p>

              <div className='mt-8'>
                <h2 className='text-2xl font-bold text-slate-800 mb-5'>
                  Key Advantages
                </h2>

                <ol className='space-y-4 text-[17px]'>
                  <li className='flex gap-3'>
                    <span className='font-bold text-green-600'>1.</span>
                    <span>
                      The eco-friendly and economical solution is that a polymer
                      can be recycled or reused.
                    </span>
                  </li>

                  <li className='flex gap-3'>
                    <span className='font-bold text-green-600'>2.</span>
                    <span>
                      It ensures excellent filtration as the percolation tank
                      remains covered with the geotextile sheet.
                    </span>
                  </li>

                  <li className='flex gap-3'>
                    <span className='font-bold text-green-600'>3.</span>
                    <span>
                      Safety: In this technique, we place the percolation tank
                      underground to ensure no easy access to the water tank.
                    </span>
                  </li>

                  <li className='flex gap-3'>
                    <span className='font-bold text-green-600'>4.</span>
                    <span>
                      Cost Savings on Maintenance: Low or almost no maintenance
                      compared to traditional rainwater harvesting systems.
                    </span>
                  </li>

                  <li className='flex gap-3'>
                    <span className='font-bold text-green-600'>5.</span>
                    <span>
                      Higher recharge capacity as water comes from five sides.
                    </span>
                  </li>

                  <li className='flex gap-3'>
                    <span className='font-bold text-green-600'>6.</span>
                    <span>Co-polymer-based modules have a high lifespan.</span>
                  </li>

                  <li className='flex gap-3'>
                    <span className='font-bold text-green-600'>7.</span>
                    <span>
                      Portability is one of the main properties of these
                      copolymer-based stackable modules, as these modules can be
                      easily shifted and installed at different locations.
                    </span>
                  </li>
                </ol>
              </div>

              <p className='mt-8 text-[17px] text-gray-700 leading-8 text-justify'>
                The modular rainwater harvesting method helps in restoring and
                reusing the rainwater within your budget. It allows you to
                contribute to your social and environmental causes without
                compromising on your budget and space.
              </p>
            </div>

            {/* Right Sidebar */}
            <div className='space-y-6 lg:sticky lg:top-36'>
              <div className='overflow-hidden rounded-2xl shadow-xl bg-white'>
                <Link href='https://www.inrainconstruction.com/'>
                  <Image
                    src={'/services/harvesting3.jpg'}
                    alt='Modular Rainwater Harvesting'
                    className='w-full object-cover hover:scale-105 transition duration-500'
                    width={600}
                    height={400}
                  />
                </Link>
              </div>

              <div className='bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-5'>
                  <div className='h-10 w-2 rounded-full bg-green-500' />
                  <h2 className='text-2xl font-bold text-slate-800'>
                    Smart Use of Limited Resources
                  </h2>
                </div>

                <p className='text-gray-700 leading-8 text-justify'>
                  With rapid urban development, our natural water resources are
                  under immense pressure, and water tables are depleting at an
                  alarming rate. Modular rainwater harvesting systems are an
                  intelligent, space-saving solution that helps meet rising
                  water demands without putting a strain on the environment—or
                  your wallet.
                  <br />
                  <br />
                  Whether you’re planning a new project or looking to retrofit
                  an existing space, our team at InRain® provides end-to-end
                  modular rainwater harvesting solutions that are scalable,
                  customizable, and built to last.
                </p>

                <h3 className='text-xl font-bold mt-8 mb-4'>
                  Why Choose Modular Rainwater Harvesting?
                </h3>

                <ul className='space-y-3'>
                  <li>
                    <strong>Strong & Durable</strong> — High-quality co-polymer
                    that offers the strength of metal.
                  </li>
                  <li>
                    <strong>Quick Installation</strong> — Saves time and
                    workforce with simple modular setup.
                  </li>
                  <li>
                    <strong>Safe & Accident-Free</strong> — Underground systems
                    reduce hazards and keep water secure.
                  </li>
                  <li>
                    <strong>Low Maintenance</strong> — No algae, no rust, and
                    barely any upkeep needed.
                  </li>
                  <li>
                    <strong>Cost-Efficient</strong> — Lower cost than
                    conventional concrete systems.
                  </li>
                  <li>
                    <strong>Reusable & Relocatable</strong> — Can be easily
                    moved and reused as per future requirements.
                  </li>
                  <li>
                    <strong>Efficient Filtration</strong> — Geo-textile covered
                    percolation tanks ensure clean recharge.
                  </li>
                  <li>
                    <strong>Maximized Recharge</strong> — Water enters from five
                    sides for higher infiltration.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Highlight Section */}
          <div className='mt-12 bg-gradient-to-r from-sky-50 to-green-50 border border-sky-200 rounded-2xl shadow-lg p-8 md:p-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-800 mb-5'>
              Additional Benefits
            </h2>

            <p className='text-[17px] leading-8 text-gray-700 text-justify'>
              Precious land over the modular tank is not wasted, since it is a
              load-bearing structure and can bear tons of loads, thereby making
              the whole system truly economical as compared with the case of
              having a civil pit. 95% of the capacity of the tank is usable as
              compared to only 50-55% usability in the case of a civil pit.
              There is no risk of accidents, as no one can fall into this kind
              of tank, whereas having an RCC civil tank is highly
              accident-prone. Easily removable and transportable to any other
              location, which is not possible in the case of a civil pit.
              Holding/Recharge Capacity begins from 1 cubic meter to any
              imaginable size within significantly less time.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Service3
