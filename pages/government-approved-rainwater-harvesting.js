import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const GovernmentRWH = () => {
  const title =
    'Government Approved Rainwater Harvesting | Certified RWH Solutions by InRain Construction'
  const desc =
    'Get fully Government Approved Rainwater Harvesting systems by InRain Construction Pvt. Ltd. Our certified, compliant, and sustainable RWH solutions meet CPWD, PWD, CGWA, and Smart City guidelines. Trusted by leading industries, institutions, and developers across India.'
  const keyword =
    'government approved rainwater harvesting, certified rainwater harvesting system, compliant RWH system India, approved rainwater harvesting solutions, InRain Construction rainwater harvesting, CPWD approved RWH system, CGWA rainwater harvesting guidelines, government compliant rainwater harvesting, sustainable water management India, rainwater harvesting contractors India'
  const canonical =
    'https://www.inrainconstruction.com/government-approved-rainwater-harvesting'
  const ogUrl =
    'https://www.inrainconstruction.com/government-approved-rainwater-harvesting'
  const ogTitle =
    'Government Approved Rainwater Harvesting | Certified RWH Solutions by InRain Construction'
  const ogDescription =
    'Get fully Government Approved Rainwater Harvesting systems by InRain Construction Pvt. Ltd. Our certified, compliant, and sustainable RWH solutions meet CPWD, PWD, CGWA, and Smart City guidelines. Trusted by leading industries, institutions, and developers across India.'
  const twittertitle =
    'Government Approved Rainwater Harvesting | Certified RWH Solutions by InRain Construction'
  const twitterdescription =
    'Get fully Government Approved Rainwater Harvesting systems by InRain Construction Pvt. Ltd. Our certified, compliant, and sustainable RWH solutions meet CPWD, PWD, CGWA, and Smart City guidelines. Trusted by leading industries, institutions, and developers across India.'

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

      <div className='max-w-7xl mx-auto px-4 md:px-8 py-10'>
        {/* Hero Section */}
        <div className='relative overflow-hidden rounded-3xl shadow-2xl mb-10'>
          <Image
            src='/service7.jpg'
            alt='Rainwater Harvesting Tank'
            width={1600}
            height={700}
            className='w-full h-[250px] md:h-[300px] object-cover'
          />

          <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent' />

          <div className='absolute bottom-8 left-6 md:left-12 text-white max-w-3xl'>
            <div className='inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4'>
              Government Approved Solutions
            </div>

            <h1 className='text-3xl md:text-6xl font-bold leading-tight'>
              Government Approved Rainwater Harvesting
            </h1>

            <p className='mt-4 text-lg md:text-xl text-gray-200'>
              Certified Solutions for Sustainable Water Management
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <div className='bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6'>
            Certified Solutions for Sustainable Water Management
          </h2>

          <p className='text-gray-700 leading-8 text-justify text-lg'>
            At <strong>InRain Construction Pvt. Ltd.</strong>, we specialize in
            delivering{' '}
            <strong>Government Approved Rainwater Harvesting Systems</strong>{' '}
            that meet national standards, environmental guidelines, and
            compliance requirements set by local authorities across India. With
            years of expertise and more than a thousand successful
            installations, InRain has become a trusted name for organizations,
            industries, institutions, and residential developers looking for
            approved and reliable rainwater harvesting solutions.
            <br />
            <br />
            Our systems are engineered to not only collect rainwater but also
            ensure safe filtration, recharge, and long-term sustainability.
            Every project we undertake strictly follows the norms of
            <strong>
              {' '}
              CPWD, PWD, NGT, Smart City Guidelines, Jal Shakti Ministry
            </strong>
            , and other regulatory bodies—making InRain one of the most
            reputable and compliant rainwater harvesting companies in the
            country.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-lg p-8 border border-green-100'>
            <h2 className='text-2xl font-bold mb-5'>
              What Is Government Approved Rainwater Harvesting
            </h2>

            <p className='text-gray-700 mb-5 text-justify'>
              Government Approved Rainwater Harvesting refers to systems that
              are designed and installed according to official standards and
              environmental policies. These systems must pass checks for:
            </p>

            <ul className='space-y-3'>
              <li>✓ Groundwater recharge efficiency</li>
              <li>✓ Filtration quality and safety</li>
              <li>✓ Structural strength and design accuracy</li>
              <li>✓ Environmental compliance</li>
              <li>✓ Proper drainage and overflow planning</li>
            </ul>
          </div>

          <div className='bg-gradient-to-br from-sky-50 to-white rounded-3xl shadow-lg p-8 border border-sky-100'>
            <h2 className='text-2xl font-bold mb-5'>Why Compliance Matters</h2>

            <p className='text-gray-700 text-justify mb-5'>
              In many cities, installing RWH systems is mandatory for specific
              plot sizes and building categories.
            </p>

            <ul className='space-y-3'>
              <li>✓ Local Municipal Corporation rules</li>
              <li>✓ Jal Shakti Abhiyan guidelines</li>
              <li>✓ CGWA norms</li>
              <li>✓ Environmental clearance requirements</li>
              <li>✓ State bye-laws compliance</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className='bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 mb-12'>
          <div className='flex items-center gap-4 mb-8'>
            <div className='w-2 h-12 bg-green-600 rounded-full'></div>
            <h2 className='text-3xl font-bold'>
              Why Choose InRain for Government Approved RWH Systems
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='font-bold text-lg mb-3'>
                1. Certified & Compliant Installations
              </h3>
              <p>
                Our systems adhere to all government norms, ensuring you meet
                mandatory guidelines for groundwater recharge and environmental
                protection.
              </p>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='font-bold text-lg mb-3'>
                2. Expertise Across 4000+ Projects
              </h3>
              <p>
                InRain has successfully executed projects for HUL, PepsiCo,
                Sobha Developers, Smart Cities, Government Housing,
                Institutional Campuses, and Supreme Court Judges Bungalows.
              </p>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='font-bold text-lg mb-3'>
                3. Advanced Technology & Reliable Materials
              </h3>
              <p>
                We use high-performance filters, modular recharge systems, and
                geotextile-based solutions that offer long-term durability.
              </p>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='font-bold text-lg mb-3'>
                4. Support for Approvals & Documentation
              </h3>
              <p>
                We assist with compliance reports, drawings, calculations, and
                site inspection guidance.
              </p>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6 md:col-span-2'>
              <h3 className='font-bold text-lg mb-3'>
                5. End-to-End Execution
              </h3>
              <p>
                From design to installation and post-installation maintenance,
                our team handles every part of the process.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          <div className='bg-gradient-to-br from-green-600 to-green-700 text-white rounded-3xl p-8 shadow-xl'>
            <h2 className='text-3xl font-bold mb-6'>
              Benefits of Installing a Government Approved Rainwater Harvesting
              System
            </h2>

            <ul className='space-y-4'>
              <li>✓ Compliance with mandatory RWH guidelines</li>
              <li>✓ Significant water bill reduction</li>
              <li>✓ Reliable secondary water source</li>
              <li>✓ Increased groundwater levels</li>
              <li>✓ Enhanced green building ratings</li>
              <li>✓ Improved sustainability score</li>
            </ul>
          </div>

          <div className='bg-white rounded-3xl shadow-xl border border-slate-100 p-8'>
            <h2 className='text-3xl font-bold mb-6'>
              Applications Across Multiple Sectors
            </h2>

            <ul className='space-y-4'>
              <li>Residential buildings & apartments</li>
              <li>Factories & industrial parks</li>
              <li>Schools & universities</li>
              <li>Corporate offices & IT parks</li>
              <li>Government institutions</li>
              <li>Hospitals & medical campuses</li>
              <li>Hotels, malls & commercial complexes</li>
            </ul>
          </div>
        </div>

        {/* Closing CTA */}
        <div className='bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            InRain – Your Trusted Partner in Government-Approved RWH Solutions
          </h2>

          <p className='text-lg leading-8 text-gray-300'>
            With a deep commitment to innovation, quality, and sustainability,
            InRain Construction Pvt. Ltd. continues to lead the way in India’s
            rainwater harvesting industry. Our government-approved systems
            empower communities and organizations to take responsible steps
            toward water conservation and groundwater revival.
            <br />
            <br />
            If you are planning to implement a compliant, long-lasting, and
            high-performance Rainwater Harvesting system—InRain is your ideal
            partner.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default GovernmentRWH
