import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import service8 from './../public/service8.jpg'
import harvesting8 from './../public/blog4.jpg'
import Image from 'next/image'
import Head from 'next/head'
import PopUp from '@/components/popup'
import Link from 'next/link'

const Service8 = () => {
  const title =
    'Box Type Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const desc =
    'Rain Box Harvesting Systems are ideal for supplying water for toilet flushing, washing machines, and outdoor uses such as garden irrigation, car washing '
  const keyword =
    'box type rainwater harvesting system, storm water management, Cost-Effective Water Solutions, Economical Rainwater Systems, Sustainable Water Management, Water Supply Mechanism, Filtration System, rainwater harvesting solution, Water Conservation Solutions, Rainwater Filtration Systems'
  const canonical =
    'https://www.inrainconstruction.com/box-type-rainwater-harvesting'
  const ogUrl =
    'https://www.inrainconstruction.com/box-type-rainwater-harvesting'
  const ogTitle =
    'Box Type Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'Rain Box Harvesting Systems are ideal for supplying water for toilet flushing, washing machines, and outdoor uses such as garden irrigation, car washing '
  const twittertitle =
    'Box Type Rainwater Harvesting System | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Rain Box Harvesting Systems are ideal for supplying water for toilet flushing, washing machines, and outdoor uses such as garden irrigation, car washing '

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
        {/* Hero Section */}
        <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
          <Image
            src={service8}
            alt='Box Type Rainwater Harvesting System'
            className='w-full h-[220px] md:h-[320px] object-cover'
            loading='eager'
            priority
            unoptimized
          />

          <div className='absolute inset-0 bg-black/40'></div>

          <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
            <h1 className='text-3xl md:text-5xl font-bold text-white mb-3'>
              Box Type Rainwater Harvesting System
            </h1>

            <p className='text-sm md:text-lg text-white/90'>
              <Link href='/' className='hover:text-green-400 transition'>
                Home
              </Link>{' '}
              / Box Type Rainwater Harvesting System
            </p>
          </div>
        </div>

        {/* Main Section */}
        <div className='grid lg:grid-cols-[1.65fr_1fr] gap-12 mt-10'>
          {/* Left Content */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
              Box Type Rainwater Harvesting System
            </h2>

            <div className='w-24 h-1 bg-green-600 rounded-full mb-8'></div>

            <div className='space-y-6 text-slate-600 leading-8 text-base md:text-lg text-justify'>
              <p>
                Rainwater harvesting is a need of the modern world. By
                practicing rainwater harvesting, we can help in improving global
                water reserves. Inrain Construction Pvt. Ltd. is a leading
                company in providing water conservation and management
                solutions, offering various varieties of rainwater harvesting
                solutions. We use modern-day technology and excel in providing
                economical water conservation methods to our clients as per
                their needs.
              </p>

              <p>
                Among the various methods of{' '}
                <Link
                  href='https://www.inrainconstruction.com/rainwater-harvesting-system'
                  className='text-green-600 hover:text-sky-600 font-semibold transition'
                >
                  Rainwater Harvesting Systems,
                </Link>{' '}
                box-Type Rainwater Harvesting is one that helps you in saving
                the rainwater. Since in this methodology, rainwater collected
                from the roof doesn’t go through rigorous filtration and
                purification, it is majorly suited for outdoor activities like
                car washing and watering your garden area. The rainwater stored
                through this method can also be utilized for laundry and
                flushing the toilet.
              </p>

              <p>
                InRain Construction Pvt. Ltd., a water conservation and
                management company, is one of the leading water conservation and
                management service providers. We are well known for providing
                technology-based modern solutions that fit today’s requirements.
                We are the topmost rainwater harvesting vendors in
                Delhi-Gurgaon. We completely understand the challenges of
                modern-day industries and housing societies. Therefore, we offer
                technologically advanced but cost-effective solutions for water
                conservation needs.
              </p>

              <p>
                As the name suggests, a box-type rainwater harvesting system
                uses a box to store water. A water collector is attached to the
                rooftop for collecting water; the collected water then goes
                through a filter system that removes impurities collected from
                the rooftop. The filtered water then goes to the box for
                storage.
              </p>

              <p>
                The installation and the water supply mechanism are the main
                features of box type rainwater harvesting system. The water
                supply mechanism of this system is maintained in such a way that
                it always ensures water supply from the rain box before your
                main supply. It has been designed in a way that in case your
                rain box runs out of water, your supply will be maintained
                through mains, ensuring a continuous water supply for autonomous
                systems. This helps in reducing your water bills significantly
                by effectively utilizing the stored rainwater.
              </p>

              <p>
                Box-type rainwater harvesting systems use a very compact-sized
                box; they are easily installable and cost-effective and address
                the specific needs of our customers. Our skilled team provides
                help to our customers in choosing the correct rainwater
                harvesting systems as per their requirements and budget.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Product Image */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100'>
              <Link href='https://www.inrainconstruction.com/'>
                <Image
                  src={harvesting8}
                  alt='Box Type Rainwater Harvesting'
                  className='w-full hover:scale-105 transition duration-500'
                  loading='eager'
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Info Card */}
            <div className='bg-gradient-to-br from-green-50 via-white to-green-50 border border-green-100 rounded-3xl shadow-xl p-8'>
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold'>
                  ✓
                </div>

                <h3 className='text-2xl font-bold text-slate-900'>
                  How Does It Work?
                </h3>
              </div>

              <p className='text-slate-600 leading-7 mb-6'>
                The box is intelligently connected to your water supply system.
                It’s designed to use the stored rainwater first and only switch
                to the main water line when the box is empty. This smart
                mechanism ensures a continuous, autonomous water supply—with
                zero disruption.
              </p>

              <div className='border-t border-slate-200 pt-6'>
                <h4 className='text-lg font-semibold text-slate-900 mb-4'>
                  Since this system doesn’t involve complex purification, the
                  stored water is ideal for:
                </h4>

                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <span className='w-2.5 h-2.5 bg-green-600 rounded-full'></span>
                    Garden irrigation
                  </li>

                  <li className='flex items-center gap-3'>
                    <span className='w-2.5 h-2.5 bg-green-600 rounded-full'></span>
                    Car washing
                  </li>

                  <li className='flex items-center gap-3'>
                    <span className='w-2.5 h-2.5 bg-green-600 rounded-full'></span>
                    Toilet flushing
                  </li>

                  <li className='flex items-center gap-3'>
                    <span className='w-2.5 h-2.5 bg-green-600 rounded-full'></span>
                    Laundry
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Service8
