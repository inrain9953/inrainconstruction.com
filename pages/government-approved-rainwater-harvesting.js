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

      <div className='max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed'>
        <h1 className='text-3xl font-bold text-justify mb-3'>
          Government Approved Rainwater Harvesting
        </h1>
        <h2 className='text-xl font-semibold text-justify mb-2'>
          Certified Solutions for Sustainable Water Management
        </h2>

        <p className='text-lg text-justify mb-6'>
          At <strong>InRain Construction Pvt. Ltd.</strong>, we specialize in
          delivering{' '}
          <strong>Government Approved Rainwater Harvesting Systems</strong> that
          meet national standards, environmental guidelines, and compliance
          requirements set by local authorities across India. With years of
          expertise and more than a thousand successful installations, InRain
          has become a trusted name for organizations, industries, institutions,
          and residential developers looking for approved and reliable rainwater
          harvesting solutions.
          <br />
          Our systems are engineered to not only collect rainwater but also
          ensure safe filtration, recharge, and long-term sustainability. Every
          project we undertake strictly follows the norms of{' '}
          <strong>
            CPWD, PWD, NGT, Smart City Guidelines, Jal Shakti Ministry
          </strong>
          , and other regulatory bodies—making InRain one of the most reputable
          and compliant rainwater harvesting companies in the country.
        </p>

        <Image
          className='w-full border-2 border-black p-1'
          src='/service7.jpg'
          alt='Rainwater Harvesting Tank'
          width={200}
          height={200}
        />

        <hr className='my-6' />

        <h2 className='text-2xl font-semibold mb-2'>
          What Is Government Approved Rainwater Harvesting
        </h2>
        <p className='mb-2 text-justify'>
          Government Approved Rainwater Harvesting refers to systems that are
          designed and installed according to official standards and
          environmental policies. These systems must pass checks for:
        </p>

        <ul className='list-disc pl-6 space-y-1 mb-2'>
          <li>Groundwater recharge efficiency</li>
          <li>Filtration quality and safety</li>
          <li>Structural strength and design accuracy</li>
          <li>Environmental compliance</li>
          <li>Proper drainage and overflow planning</li>
        </ul>

        <p className='mb-6 text-justify'>
          InRain ensures that every design, material, and installation process
          aligns perfectly with these requirements, making our solutions both
          legally compliant and environmentally effective.
        </p>

        <hr className='my-6' />

        <h2 className='text-2xl font-semibold mb-2'>
          Why Choose InRain for Government Approved RWH Systems
        </h2>

        <div className='space-y-2'>
          <div>
            <h3 className='font-semibold'>
              1. Certified & Compliant Installations
            </h3>
            <p className='text-justify'>
              Our systems adhere to all government norms, ensuring you meet
              mandatory guidelines for groundwater recharge and environmental
              protection.
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>
              2. Expertise Across 4000+ Projects
            </h3>
            <p className='text-justify'>
              InRain has successfully executed projects for HUL, PepsiCo, Sobha
              Developers, Smart Cities, Government Housing, Institutional
              Campuses, and Supreme Court Judges Bungalows, establishing a
              strong reputation in the water conservation sector.
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>
              3. Advanced Technology & Reliable Materials
            </h3>
            <p className='text-justify'>
              We use high-performance filters, modular recharge systems, and
              geotextile-based solutions that offer long-term durability and
              efficient rainwater absorption.
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>
              4. Support for Approvals & Documentation
            </h3>
            <p className='text-justify'>
              We assist with government submission documents, including
              compliance reports, system drawings, recharge calculations, and
              site inspection guidance.
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>5. End-to-End Execution</h3>
            <p className='text-justify'>
              From design to installation and post-installation maintenance, our
              team handles every part of the process to ensure your RWH system
              performs effectively for years.
            </p>
          </div>
        </div>

        <hr className='my-6' />

        <h2 className='text-2xl font-semibold mb-2'>
          Key Features of InRain’s Government Approved RWH Systems
        </h2>

        <ol className='list-decimal pl-6 space-y-1 mb-6'>
          <li>High-quality filtration units</li>
          <li>Engineered recharge pits and bore recharge systems</li>
          <li>Integrated storage tank options</li>
          <li>Zero contamination recharge pathways</li>
          <li>Low maintenance and long operational life</li>
          <li>
            Custom designs for residential, commercial, and industrial
            applications
          </li>
        </ol>

        <hr className='my-6' />

        <h2 className='text-2xl font-semibold mb-2'>
          Benefits of Installing a Government Approved Rainwater Harvesting
          System
        </h2>

        <ul className='list-disc pl-6 space-y-1 mb-6'>
          <li>Compliance with mandatory RWH guidelines (where applicable)</li>
          <li>Significant water bill reduction</li>
          <li>
            Reliable secondary water source for gardening, flushing, and
            utilities
          </li>
          <li>Increased groundwater levels in surrounding areas</li>
          <li>Enhanced green building rating (IGBC/GRIHA)</li>
          <li>
            Environmental responsibility and improved corporate sustainability
            score
          </li>
        </ul>

        <hr className='my-6' />

        <h2 className='text-2xl font-semibold mb-2'>
          Applications Across Multiple Sectors
        </h2>

        <ul className='list-disc pl-6 space-y-1 mb-6'>
          <li>Residential buildings & large apartments</li>
          <li>Factories, manufacturing units, and industrial parks</li>
          <li>Schools, colleges, universities</li>
          <li>Corporate offices & IT parks</li>
          <li>Government buildings & institutions</li>
          <li>Hospitals & medical campuses</li>
          <li>Hotels, resorts, malls & commercial complexes</li>
        </ul>

        <hr className='my-6' />

        <h2 className='text-2xl font-semibold mb-2'>Why Compliance Matters</h2>
        <p className='mb-1 text-justify'>
          In many cities, installing RWH systems is mandatory for specific plot
          sizes and building categories. A government-approved system not only
          meets these legal requirements but also protects organizations from
          penalties, inspection delays, and compliance risks.
        </p>
        <p className='mb-2 text-justify'>
          InRain’s certified approach ensures your system meets:
        </p>

        <ul className='list-disc pl-6 space-y-1 mb-6'>
          <li>Local Municipal Corporation rules</li>
          <li>Jal Shakti Abhiyan guidelines</li>
          <li>CGWA (Central Ground Water Authority) norms</li>
          <li>Environmental clearance (EC) requirements</li>
          <li>State bye-laws for rainwater harvesting</li>
        </ul>

        <hr className='my-6' />

        <h2 className='text-2xl font-semibold mb-2'>
          InRain – Your Trusted Partner in Government-Approved RWH Solutions
        </h2>
        <p>
          With a deep commitment to innovation, quality, and sustainability,
          InRain Construction Pvt. Ltd. continues to lead the way in India’s
          rainwater harvesting industry. Our government-approved systems empower
          communities and organizations to take responsible steps toward water
          conservation and groundwater revival.
          <br />
          If you are planning to implement a compliant, long-lasting, and
          high-performance Rainwater Harvesting system—InRain is your ideal
          partner.
        </p>
      </div>

      <Footer />
    </>
  )
}

export default GovernmentRWH
