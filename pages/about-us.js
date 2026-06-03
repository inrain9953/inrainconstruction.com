import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'
import ICPLCertification from '@/components/ICPL/ICPLCertification'

const About = () => {
  const title =
    'About ICPL | About Our Rainwater Harvesting(RWH) Technology | InRain® Construction Pvt. Ltd.'
  const desc =
    'InRain® Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.'
  const keyword =
    'About ICPL, About Our Rainwater Harvesting(RWH) Technology, Water Conservation in Delhi, Modular Tank Systems in Delhi, Rainwater Harvesting in Delhi, Sustainable Water Management, Monolithic Structures, RWH Technology, Clean Energy Solutions, Modular Technology RWH, Water Table Recharge'
  const canonical = 'https://www.inrainconstruction.com/about-us'
  const ogUrl = 'https://www.inrainconstruction.com/about-us'
  const ogTitle =
    'About Us | About Our Rainwater Harvesting(RWH) Technology | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'InRain® Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.'
  const twittertitle =
    'About US | About Our Rainwater Harvesting(RWH) Technology | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'InRain Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.'

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
      <div className='bg-white'>
        {/* ================= HERO SECTION ================= */}
        <section className='relative'>
          <Image
            src={'/banner4.jpg'}
            alt='About InRain'
            className='w-full h-[250px] md:h-[300px] object-cover'
            width={1920}
            height={600}
          />

          <div className='absolute inset-0 bg-black/50' />

          <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-5'>
            <p className='text-white text-sm md:text-base mb-3'>
              <Link href='/'>Home</Link> / About Us
            </p>

            <h1 className='text-white text-3xl md:text-6xl font-bold'>
              About InRain® Construction
            </h1>

            <p className='text-white/90 max-w-3xl mt-4 text-sm md:text-lg'>
              Building Sustainable Water Conservation Solutions Across India
            </p>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className='max-w-7xl mx-auto px-6 py-12'>
          <div className='grid lg:grid-cols-2 gap-14 items-center'>
            <div className='overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                src={'/abt.jpg'}
                alt='About InRain'
                className='w-full object-cover hover:scale-105 transition duration-700'
                width={800}
                height={600}
              />
            </div>

            <div>
              <span className='text-sky-600 font-semibold uppercase tracking-wider'>
                Who We Are
              </span>

              <h2 className='text-4xl md:text-5xl font-bold mt-3 mb-6'>
                About ICPL
              </h2>

              <a
                href='https://www.inrainconstruction.com/about_icpl'
                target='_blank'
                className='text-2xl font-bold text-green-600 hover:text-sky-600'
              >
                ICPL
              </a>

              <p className='text-gray-600 leading-7 text-base text-justify mt-4'>
                We are a subsidiary company of “Singh & Singh Construction,” a
                firm with a strong presence in India with more than 30 years of
                experience in the civil construction industry. We have completed
                numerous projects for Bridges Construction under PWD/RWD, the
                Irrigation & Flood Control Department, Bihar Rajya Pool Nirman
                Nigam etc., and constructed roads under Pradhan Mantri Gramin
                Sadark Yojana, and continued to undertake construction projects
                for more than 30 years.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ICPL ================= */}
        <section className='py-8'>
          <div className='max-w-5xl mx-auto px-6'>
            <div className='text-center'>
              <span className='text-sky-600 font-semibold uppercase'>
                About ICPL
              </span>

              <h2 className='md:text-4xl text-2xl font-bold mt-3'>
                InRain® Construction Pvt. Ltd.
              </h2>
            </div>

            <div className='bg-white rounded-3xl shadow-xl p-5 md:p-10'>
              <p className='text-gray-600 leading-8 text-justify'>
                <Link
                  href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
                  className='text-green-600 font-semibold hover:text-sky-600'
                >
                  Modular Rainwater Harvesting
                </Link>{' '}
                Company with a strong presence all over India. The company has
                successfully installed more than 4000+ rainwater harvesting
                projects to enable it to conserve billions of gallons of water
                from being wasted. We are privileged to introduce the next level
                of scientific rainwater harvesting technology with more than a
                50-ton/sq. m load-bearing structure for the first time in the
                world. We are proud partners of the "Make in India" movement,
                having our own products and manufacturing.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className='max-w-7xl mx-auto px-6 py-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              'Clean Energy',
              'Project Assistance',
              'Action Research',
              'Long-term Planning'
            ].map((item, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-green-600 to-green-800 text-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition'
              >
                <Image
                  src={'/renewable-energy.png'}
                  alt={item}
                  width={100}
                  height={100}
                  className='h-10 w-auto mx-auto mb-4'
                />

                <h3 className='font-semibold text-lg'>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section className='py-10'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-5'>
              <span className='text-sky-600 font-semibold uppercase'>
                Vision For The Future
              </span>

              <h2 className='text-2xl md:text-4xl font-bold mt-3'>
                About Our Rainwater Harvesting Technology
              </h2>
              <p className='max-w-3xl m-auto text-gray-600 leading-7 mt-2'>
                At InRain® , we are engaged in making RWH System based on the
                modular technology.
                <br />
                It is indeed entirely different from conventional rainwater
                harvesting systems that were made using cement and brick walls.
                A few benefits of our scientific RWH system are highlighted as
                follows.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='bg-white rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-600 leading-8'>
                  Monolithic structures are quick to install, and the same turns
                  into a rainwater holding tank below the ground in no time as
                  compared to making a civil pit. Modular tanks can be used for
                  holding/reusing the rainwater, recharging the water table, and
                  percolating.
                </p>
              </div>

              <div className='bg-white rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-600 leading-8'>
                  Using the InRain® filtration system, developed in-house by the{' '}
                  <Link
                    className='text-green-600 hover:text-sky-600 font-semibold'
                    href='/about-nishant-gaurav-singh'
                  >
                    ICPL R&D team
                  </Link>
                  , clean rainwater is trapped in the tank, thereby saving on
                  maintenance parts tremendously, as it is very easy & handy
                  with negligible maintenance costs as compared to conventional
                  systems. Precious land over the modular tank is not wasted,
                  since it is a load-bearing structure and can bear tons of
                  loads, thereby making the whole system truly economical as
                  compared with the case of having a civil pit.
                </p>
              </div>

              <div className='bg-white rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-600 leading-8'>
                  95% of the capacity of the tank is usable, as compared to only
                  50-55% usability in the case of a civil pit. There is no risk
                  of accidents, as no one can fall into this kind of tank,
                  whereas having an RCC civil tank is highly accident-prone.
                  Removable and transportable to any other location, which is
                  not possible in the case of a civil pit. Holding/recharge
                  capacity begins from 1 cubic meter to any imaginable size
                  within significantly less time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW WE WORK ================= */}
        <section className='max-w-7xl mx-auto px-6 py-10'>
          <div className='text-center mb-10'>
            <span className='text-sky-600 font-semibold uppercase'>
              Our Research
            </span>

            <h2 className='text-4xl font-bold mt-3'>How We Work</h2>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* STRATEGY */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden border'>
              <div className='bg-sky-600 text-white text-center py-4 font-bold'>
                STRATEGY
              </div>

              <ul className='p-6 space-y-4 list-disc'>
                <li>
                  Concur on the project value and plan the project controls to
                  be connected.
                </li>
                <li>Recognize important partners.</li>
                <li>Survey venture hazard and vulnerability.</li>
                <li>Set up a venture control execution plan.</li>
              </ul>
            </div>

            {/* TARGET */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden border'>
              <div className='bg-green-600 text-white text-center py-4 font-bold'>
                TARGET & ASSURANCE
              </div>

              <ul className='p-6 space-y-4 list-disc'>
                <li>Complete expense and calendar gauge surveys.</li>
                <li>
                  Review of undertaking control abilities versus control
                  execution plan.
                </li>
                <li>Issue a whole examination dependent on the review.</li>
                <li>Refresh the undertaking control execution plan.</li>
              </ul>
            </div>

            {/* CONTROL */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden border'>
              <div className='bg-indigo-600 text-white text-center py-4 font-bold'>
                CONTROL
              </div>

              <ul className='p-6 space-y-4 list-disc'>
                <li>Roll out the project execution plan.</li>
                <li>Prepare an integrated baseline schedule and budget.</li>
                <li>Mobilize site-based resources.</li>
                <li>Monitor, control, and report.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= INSTALLATION ================= */}
        <section className='py-10'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <Image
                src={'/bottom_about.jpg'}
                alt='Installation'
                className='rounded-3xl shadow-2xl'
                width={800}
                height={800}
              />

              <div>
                <h2 className='text-4xl font-bold mb-6'>
                  Installation & Project Development
                </h2>

                <p className='text-gray-600 leading-8'>
                  Our team has done more than 4000+ rainwater harvesting
                  projects across India. The technology we are using has been
                  globally adopted in advanced countries like Germany, Japan,
                  Singapore, the USA, and Australia.
                </p>
              </div>
            </div>

            <div className='text-center mt-12'>
              <div className='text-7xl font-bold text-green-700'>
                <CountUp duration={5} end={4000} enableScrollSpy />+
              </div>

              <p className='text-2xl font-semibold mt-4'>Projects Completed</p>
            </div>
          </div>
        </section>

        <ICPLCertification />
      </div>
      <Footer />
    </>
  )
}

export default About
