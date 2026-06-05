import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import Head from 'next/head'
import service3 from './../public/service7.jpg'
import harvesting12 from './../public/services/harvesting13.svg'
import Link from 'next/link'
import Image from 'next/image'

const RainwaterHarvestingRechargePit = () => {
  const title =
    'Rainwater Harvesting Recharge Pit | InRain® Construction Pvt. Ltd.'
  const desc =
    'Discover how InRain Construction designs advanced Rainwater Harvesting Recharge Pits to replenish groundwater, prevent flooding, and ensure water sustainability in India.'
  const keyword =
    'Rainwater Harvesting Recharge Pit, Rainwater Harvesting Recharge Pit in India, Recharge Pit for Rainwater Harvesting, Modular Rainwater Harvesting Recharge Pit, Rainwater Recharge Solutions India, Best Rainwater Harvesting Company in India, Groundwater Recharge Pit, Groundwater Recharge System, Rainwater Harvesting System'
  const canonical =
    'https://www.inrainconstruction.com/rainwater-harvesting-recharge-pit'
  const ogUrl =
    'https://www.inrainconstruction.com/rainwater-recharge-harvesting-pit'
  const ogTitle =
    'Rainwater Harvesting Recharge Pit Solutions by InRain Construction Pvt. Ltd.'
  const ogDescription =
    'Discover how InRain Construction designs advanced Rainwater Harvesting Recharge Pits to replenish groundwater, prevent flooding, and ensure water sustainability in India.'
  const twittertitle =
    'Rainwater Harvesting Recharge Pit | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Discover how InRain Construction designs advanced Rainwater Harvesting Recharge Pits to replenish groundwater, prevent flooding, and ensure water sustainability in India.'
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
      <div className='mt-5 md:m-10'>
        <section className='relative overflow-hidden'>
          <Image
            src={service3}
            alt='Rainwater Harvesting Banner'
            className='w-full h-[220px] md:h-[320px] object-cover rounded-2xl'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-black/45 rounded-2xl' />

          <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-16'>
            <p className='text-white/90 text-sm md:text-base mb-3'>
              <Link href='/' className='hover:text-green-300'>
                Home
              </Link>{' '}
              / Rainwater Harvesting Recharge Pit
            </p>

            <h1 className='text-white text-3xl md:text-5xl font-bold max-w-4xl leading-tight'>
              Rainwater Harvesting Recharge Pit – A Sustainable Way to Replenish
              Groundwater
            </h1>
          </div>
        </section>

        <div className='m-5 md:grid md:grid-cols-2 md:gap-10 md:items-start'>
          <div className='text-left'>
            <p className='text-[17px] text-justify mt-2'>
              India faces a severe challenge of depleting groundwater levels due
              to urbanization, over-extraction, and climate change. One of the
              most effective solutions to counter this is the{' '}
              <Link
                target='_blank'
                href={'https://www.inrainconstruction.com/'}
                className='text-sky-500 hover:text-green-500'
              >
                Rainwater Harvesting
              </Link>{' '}
              Recharge Pit — a system designed not just to store rainwater but
              to directly replenish groundwater aquifers.
              <br />
              At InRain Construction Pvt. Ltd., we specialize in creating
              advanced recharge pits that help restore the natural balance of
              water underground while also mitigating the risks of waterlogging
              and urban flooding.
            </p>

            <h2 className='text-2xl mt-5 md:text-2xl font-semibold'>
              What is a Rainwater Harvesting Recharge Pit?
            </h2>

            <p className='text-[17px] text-justify mt-2'>
              A Rainwater Harvesting Recharge Pit is an engineered structure
              that allows rainwater to percolate into the soil and recharge
              depleted aquifers. Unlike storage pits that hold water for later
              use, recharge pits are built with filter media and percolation
              layers to ensure water is absorbed quickly and effectively into
              the ground.
              <br />
              <bold className='font-semibold'>
                These pits are especially important in cities where natural
                groundwater recharge areas are sealed due to concrete, asphalt,
                and urban infrastructure.
              </bold>
            </p>

            <h2 className='text-2xl mt-5 md:text-2xl font-semibold'>
              How a Recharge Pit Works
            </h2>

            <ul className='list-decimal m-2 text-[17px] text-justify'>
              <li>
                <bold className='font-semibold'>Collection</bold> – Rainwater is
                collected from rooftops, paved areas, or stormwater drains.
              </li>
              <li>
                <bold className='font-semibold'>Filtration</bold> – The water
                passes through layers of gravel, sand, or modular filters to
                remove debris and pollutants.
              </li>
              <li>
                <bold className='font-semibold'>Percolation</bold> – Filtered
                water enters the recharge pit and seeps into deeper soil strata.
              </li>
              <li>
                <bold className='font-semibold'>Groundwater Recharge</bold> –
                Aquifers are replenished, improving groundwater levels and
                long-term water security.
              </li>
            </ul>

            <div className='mt-5 text-justify'>
              <h3 className='text-xl font-semibold'>
                Advantages of a Rainwater Harvesting Recharge Pit
              </h3>
              <p className='text-[17px] mt-2'>
                A recharge pit is more than just a water-saving structure. It
                provides a range of benefits:
              </p>
              <ul className='m-2 list-disc text-[17px] mt-2'>
                <li>
                  <bold className='font-semibold'>Groundwater Restoration</bold>{' '}
                  — Boosts aquifer levels and ensures water availability for
                  borewells.
                </li>
                <li>
                  <bold className='font-semibold'>Improved Water Quality</bold>{' '}
                  — Natural filtration reduces contaminants and improves
                  groundwater quality.
                </li>
                <li>
                  <bold className='font-semibold'>Eco-Friendly</bold> — Reduces
                  runoff, prevents soil erosion, and supports sustainable urban
                  development.
                </li>
                <li>
                  <bold className='font-semibold'>Flood Prevention</bold> —
                  Diverts stormwater into the soil, reducing pressure on city
                  drainage systems.
                </li>
                <li>
                  <bold className='font-semibold'>Low-Cost Maintenance</bold> —
                  Once installed, recharge pits require minimal upkeep compared
                  to other systems.
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-5'>
            <Image
              className='w-full rounded-xl'
              src={harvesting12}
              alt='Modular Rainwater Harvesting'
              loading='eager'
              priority={true}
              unoptimized={true}
            />

            <div className='mt-5 text-justify'>
              <h3 className='text-xl font-semibold'>
                Why Choose InRain Construction for Recharge Pits?
              </h3>
              <p className='text-[17px] mt-2'>
                At InRain Construction Pvt. Ltd., we bring innovation and
                expertise to every project. Our{' '}
                <Link
                  target='_blank'
                  href={
                    'https://www.inrainconstruction.com/rainwater-harvesting-pit'
                  }
                  className='text-sky-500 hover:text-green-500'
                >
                  Rainwater Harvesting Recharge Pits
                </Link>{' '}
                stand out because:
              </p>
              <ul className='m-2 list-disc text-[17px] mt-2'>
                <li>
                  <bold className='font-semibold'>
                    Modular, Load-Bearing Design
                  </bold>{' '}
                  — Strong, durable structures that can be installed under
                  parking areas or driveways.
                </li>
                <li>
                  <bold className='font-semibold'>Custom Engineering</bold> —
                  Each pit is designed based on soil type, rainfall patterns,
                  and site conditions.
                </li>
                <li>
                  <bold className='font-semibold'>Turnkey Execution</bold> —
                  From site survey to construction and maintenance, we handle it
                  all.
                </li>
                <li>
                  <bold className='font-semibold'>Proven Success</bold> — Over
                  4,000 systems installed for leading corporates, industries,
                  and government bodies across India.
                </li>
                <li>
                  <bold className='font-semibold'>Sustainability Focus</bold> —
                  Every recharge pit is designed to maximize groundwater
                  replenishment while minimizing space usage.
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl mt-5 md:text-2xl font-semibold'>
                Applications of Recharge Pits
              </h3>
              <p className='text-[17px] text-justify mt-2'>
                Our rainwater harvesting recharge pits are suitable for:
              </p>

              <ul className='list-disc font-semibold m-2 text-[17px] text-justify'>
                <li>🏘️ Residential colonies & apartments</li>
                <li>🏭 Industrial facilities & factories</li>
                <li>🏢 Corporate parks & commercial spaces</li>
                <li>🏛️ Government offices & institutions</li>
                <li>🏫 Educational campuses</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='m-5 bg-sky-300 rounded-lg md:w-[550px] md:m-auto'>
          <p className='text-[17px] text-justify mt-3 p-5'>
            A Rainwater Harvesting Recharge Pit is not just a rainwater
            collection method — it is a long-term solution to groundwater
            depletion. By choosing InRain Construction Pvt. Ltd., you partner
            with India’s leading rainwater harvesting company that delivers
            innovative, durable, and efficient recharge systems.
            <br />
            <br />
            If you’re looking to restore groundwater levels and secure your
            water future, an InRain Construction recharge pit is the smartest
            investment you can make.
          </p>
        </div>
      </div>
      <PopUp />
      <Footer />
    </>
  )
}

export default RainwaterHarvestingRechargePit
