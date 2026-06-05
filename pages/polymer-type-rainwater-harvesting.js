import { Footer } from '@/components/Footer/Footer'
import { Hero1 } from '@/components/Hero/Hero1'
import { Hero2 } from '@/components/Hero/Hero2'
import { Navbar } from '@/components/Navbar/Navbar'
import harvesting2 from './../public/services/harvesting2.jpg'
import service2 from './../public/service2.jpg'
import Image from 'next/image'
import PopUp from '@/components/popup'
import React from 'react'
import Head from 'next/head'

const PolyRain = () => {
  const title =
    'Polymer Type Rainwater Harvesting | InRain® Construction Pvt. Ltd.'
  const desc =
    'Are you searching for a rainwater harvesting system in Delhi? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.'
  const keyword =
    'rainwater harvesting system in Delhi, polyrain rainwater harvesting system, Urban Water Sustainability, rainwater harvesting company, Polymer Type Rainwater Harvesting'
  const canonical =
    'https://www.inrainconstruction.com/polymer-type-rainwater-harvesting'
  const ogUrl =
    'https://www.inrainconstruction.com/polymer-type-rainwater-harvesting'
  const ogTitle =
    'Polymer Type Rainwater Harvesting | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'Are you searching for a rainwater harvesting system in Delhi? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.'
  const twittertitle =
    'Polymer Type Rainwater Harvesting | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Are you searching for a rainwater harvesting system in Delhi? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.'

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
      <Hero1 />
      <Hero2 />
      <div className=''>
        {/* Hero Banner */}
        <section className='relative mx-auto max-w-7xl px-4 md:px-8 pt-6'>
          <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
            <Image
              src={'/services/harvesting2.jpg'}
              alt='Polymer Type Rainwater Harvesting System'
              className='w-full h-[220px] md:h-[320px] object-cover'
              width={1200}
              height={600}
            />

            <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent' />

            <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-12'>
              <span className='inline-flex w-fit items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white text-sm font-medium'>
                Water Conservation Solutions
              </span>

              <h1 className='mt-4 max-w-3xl text-white text-3xl md:text-5xl font-bold leading-tight'>
                Polymer Type Rainwater Harvesting System
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16'>
          <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-start'>
            {/* Left Content */}
            <div className='bg-white rounded-3xl shadow-lg p-6 md:p-10'>
              <h2 className='text-2xl md:text-4xl font-bold text-slate-900 mb-6'>
                Polymer Type Rainwater Harvesting System
              </h2>

              <div className='space-y-6 text-slate-700 leading-8 text-[17px]'>
                <p>
                  <span className='text-green-700 font-semibold'>
                    InRain<sup>®</sup>
                  </span>{' '}
                  Construction Private Limited offers co-polymer based rainwater
                  harvesting system services for water conservation and
                  management. This is a modern-day technique of harvesting
                  natural rainwater. This technique is cost-effective and easy
                  to maintain compared to traditional rainwater harvesting. This
                  technique is also known as the modular rainwater harvesting
                  technique, as it uses multiple stackable modules for building
                  the structure of the rainwater harvesting system; this makes
                  construction and installation faster and easier.
                </p>

                <p>
                  The co-polymer based rainwater harvesting system uses a
                  structure that offers an economical and eco-friendly solution
                  compared to traditional rainwater harvesting systems.
                  Co-polymer products are less expensive when compared to the
                  cost of building brick and reinforced cement concrete or plain
                  cement concrete storage. Moreover, cement concrete storage
                  that is used in traditional systems will require maintenance
                  as it has the chance of developing of infestation algae and
                  fungi. Co-polymer modules are not only economical but also
                  come with the option of portability, which allows the top
                  surface to be used for a variety of purposes, like parking
                  vehicles, floriculture and kids' playground etc.
                </p>

                <p>
                  Co-polymer based rainwater harvesting system comes with
                  certain advantages over the traditional method of rainwater
                  harvesting. Some of the major advantages of this system are
                </p>

                <div className='bg-slate-50 border border-slate-200 rounded-2xl p-6'>
                  <ol className='space-y-3 list-decimal pl-5 font-medium'>
                    <li>Eco-friendly and economical solution.</li>
                    <li>
                      Geo sheet-covered percolation storage tank to ensure
                      excellent filtration.
                    </li>
                    <li>
                      Underground placement of the percolation tank ensures no
                      easy access to the water tank, making it absolutely safe.
                    </li>
                    <li>
                      Low or almost no maintenance in comparison to traditional
                      rainwater harvesting system.
                    </li>
                    <li>
                      Higher recharge capacity as water comes from five sides.
                    </li>
                    <li>Co-polymer based modules have a high lifespan.</li>
                    <li>
                      Portability is one of the main properties of these
                      co-polymer based stackable modules, as these modules can
                      be easily shifted and installed at different locations.
                    </li>
                  </ol>
                </div>

                <p>
                  A Modular rainwater harvesting system meets the modern-day
                  requirements and comes with safety assurance with an option of
                  portability which makes it one of the most sought-after water
                  conservation and management systems.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className='space-y-6 lg:sticky lg:top-36'>
              <div className='overflow-hidden rounded-3xl bg-white shadow-xl'>
                <Image
                  src={harvesting2}
                  alt='Polymer Type Rainwater Harvesting System'
                  className='w-full object-cover'
                  loading='eager'
                  priority
                  unoptimized
                />
              </div>

              <div className='bg-gradient-to-br from-green-50 to-sky-50 border border-green-200 rounded-3xl p-6 shadow-lg'>
                <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                  Key Benefits
                </h3>

                <ul className='space-y-3 text-slate-700'>
                  <li>✓ Eco-friendly and economical solution</li>
                  <li>✓ Excellent filtration performance</li>
                  <li>✓ Safe underground installation</li>
                  <li>✓ Minimal maintenance requirements</li>
                  <li>✓ Higher groundwater recharge capacity</li>
                  <li>✓ Long operational lifespan</li>
                  <li>✓ Portable and reusable design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Highlight Section */}
          <div className='mt-12 md:mt-16'>
            <div className='rounded-3xl bg-gradient-to-r from-sky-600 to-green-600 p-[1px] shadow-xl'>
              <div className='rounded-3xl bg-white p-6 md:p-10'>
                <h3 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>
                  Why Modular Polymer Systems Are Better
                </h3>

                <p className='text-[17px] text-slate-700 leading-8'>
                  Unlike conventional RWH systems, the recharge chamber in
                  modular RWH need not be PCC/ RCC, thereby saving cost.
                  Further, the PCC/ RCC Storage-cum-Recharge Tank, after a few
                  years, gets infested with algae/cobwebs and is very difficult
                  to clean, whereas modular RWH with polypropylene blocks
                  wrapped on all sides with geo-textile is almost maintenance
                  free and its useful life is more with an option of portability
                  if there is a need to use the occupied land for some
                  construction purposes. Also, it has been the experience that
                  the conventional RWH system always goes dysfunctional after
                  2–3 seasons, whereas a modular RWH system in its concept and
                  design has addressed several factors that help it have many
                  relative advantages over the conventional RWH system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default PolyRain
