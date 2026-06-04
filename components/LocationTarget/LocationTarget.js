import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ICPLProducts from '../ICPL/ICPLProducts'
import ICPLCertification from '../ICPL/ICPLCertification'

const LocationTarget = ({ location }) => {
  return (
    <>
      {/* =========================
    COMPANY OVERVIEW
========================= */}
      <section className='max-w-7xl mx-auto px-4 md:px-8 py-10'>
        <div className='grid lg:grid-cols-[1.8fr_1fr] gap-10 items-start'>
          {/* Content */}
          <div>
            <span className='inline-block text-green-600 font-semibold tracking-wide uppercase text-sm'>
              InRain® Construction Pvt Ltd.
            </span>

            <h1 className='text-xl md:text-4xl font-bold text-slate-900 mt-3 mb-4'>
              Rainwater Harvesting System in {location}
            </h1>

            <div className='w-24 h-1 bg-green-600 rounded-full mb-5'></div>

            <p className='text-slate-600 leading-8 text-base text-justify'>
              <span className='text-green-600 font-semibold'>InRain®</span>{' '}
              Construction Private Limited is a top provider of{' '}
              <span className='font-semibold text-slate-900'>
                Rainwater Harvesting Systems in {location}
              </span>
              , offering advanced solutions for water management, with a proven
              track record. We have successfully installed over{' '}
              <span className='font-semibold text-slate-900'>
                4000+ Rainwater Harvesting (RWH)
              </span>{' '}
              systems for prestigious clients, including{' '}
              <span className='font-semibold text-slate-900'>
                TATA | Hindustan Unilever | PepsiCo | Larsen & Toubro | CPWD |
                NHAI | Smart Cities | Fujita | Denso | Supreme Court Judges
                Bungalows, and many more.
              </span>{' '}
              Our focus on innovation, quality, and sustainability has
              established us as a trusted industry leader.
              <br />
              <br />
              <span className='text-green-600 font-semibold'>InRain®</span>{' '}
              Construction also provides{' '}
              <span className='font-semibold text-slate-900'>
                <Link
                  target='_blank'
                  href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
                  className='text-green-600 hover:text-sky-600 transition'
                >
                  Modular Rainwater Harvesting System
                </Link>{' '}
                services
              </span>
              , helping clients efficiently manage water resources while
              supporting environmental conservation.
            </p>
          </div>

          {/* Certifications */}
          <div className='grid grid-cols-2 gap-5'>
            <div className='bg-white rounded-2xl border border-slate-200 shadow-lg p-5 text-center hover:-translate-y-1 transition-all'>
              <Image
                src='/approved.png'
                alt='ISO 9001'
                width={70}
                height={70}
                className='mx-auto mb-3'
              />
              <p className='text-sm text-slate-500'>ISO 9001 : 2015</p>
              <p className='font-bold text-slate-900 mt-1'>CERTIFIED COMPANY</p>
            </div>

            <div className='bg-white rounded-2xl border border-slate-200 shadow-lg p-5 text-center hover:-translate-y-1 transition-all'>
              <Image
                src='/trophyImg.png'
                alt='Solution Provider'
                width={70}
                height={70}
                className='mx-auto mb-3'
              />
              <p className='text-sm text-slate-500'>Solution Provider</p>
              <p className='font-bold text-slate-900 mt-1'>
                THE BEST INDUSTRIAL
              </p>
            </div>

            <div className='bg-white rounded-2xl border border-slate-200 shadow-lg p-5 text-center hover:-translate-y-1 transition-all'>
              <Image
                src='/cer-g.jpg'
                alt='GRIHA'
                width={70}
                height={70}
                className='mx-auto mb-3'
              />
              <p className='font-bold text-slate-900 text-sm'>
                INRAIN® CONSTRUCTION PVT. LTD.
              </p>
            </div>

            <div className='bg-white rounded-2xl border border-slate-200 shadow-lg p-5 text-center hover:-translate-y-1 transition-all'>
              <Image
                src='/trophyImg.png'
                alt='ISO 14001'
                width={70}
                height={70}
                className='mx-auto mb-3'
              />
              <p className='text-sm text-slate-500'>ISO 14001 : 2015</p>
              <p className='font-bold text-slate-900 mt-1'>CERTIFIED COMPANY</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    ABOUT TECHNOLOGY
========================= */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 md:px-8'>
          <div className='text-center max-w-5xl mx-auto'>
            <h3 className='text-xl md:text-4xl font-bold text-slate-900'>
              About Our Technology
            </h3>

            <div className='w-24 h-1 bg-green-600 rounded-full mx-auto my-4'></div>

            <p className='text-slate-600 leading-8 text-base text-justify'>
              At <span className='text-green-600 font-semibold'>InRain®</span>,
              we specialize in creating{' '}
              <span className='font-semibold text-slate-900'>
                Rainwater Harvesting (RWH) pits in {location}
              </span>
              , utilizing advanced technology inspired by German engineering.
              Unlike traditional rainwater harvesting systems, our approach
              stands out for its innovation. With our in-house manufacturing
              capabilities, we ensure top-tier quality in every aspect of our
              work. We are proud to contribute to the nation by being an active
              partner in the{' '}
              <span className='font-semibold text-slate-900'>
                "Make in India"
              </span>{' '}
              initiative.
            </p>
          </div>

          {/* Image Gallery */}
          <div className='mt-12 grid md:grid-cols-2 gap-6'>
            <Image
              src='/Technology/main1.jpg'
              alt='Technology'
              width={700}
              height={500}
              className='w-full rounded-2xl shadow-xl hover:scale-105 transition duration-300'
            />

            <Image
              src='/Technology/main2.jpeg'
              alt='Technology'
              width={700}
              height={500}
              className='w-full rounded-2xl shadow-xl hover:scale-105 transition duration-300'
            />
          </div>

          <div className='mt-6 grid md:grid-cols-3 gap-6'>
            <Image
              src='/Technology/main3.jpg'
              alt='Technology'
              width={500}
              height={500}
              className='w-full rounded-2xl shadow-xl hover:scale-105 transition duration-300'
            />

            <Image
              src='/Technology/main4.jpg'
              alt='Technology'
              width={500}
              height={500}
              className='w-full rounded-2xl shadow-xl hover:scale-105 transition duration-300'
            />

            <Image
              src='/Technology/main5.jpg'
              alt='Technology'
              width={500}
              height={500}
              className='w-full rounded-2xl shadow-xl hover:scale-105 transition duration-300'
            />
          </div>
        </div>
      </section>

      {/* =========================
    ROOFTOP RWH
========================= */}
      <section className='max-w-7xl mx-auto px-4 md:px-8 py-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <span className='inline-block text-green-600 font-semibold uppercase tracking-wide'>
              InRain® Construction Pvt Ltd.
            </span>

            <h2 className='text-xl md:text-4xl font-bold text-slate-900 mt-3 mb-4'>
              Rooftop Rainwater Harvesting System in {location}
            </h2>

            <div className='w-24 h-1 bg-green-600 rounded-full mb-5'></div>

            <p className='text-slate-600 leading-8 text-base text-justify'>
              A{' '}
              <bold className='text-black font-semibold'>
                Rooftop{' '}
                <Link
                  className='text-green-500 hover:text-sky-500 font-semibold'
                  href={`https://www.inrainconstruction.com/modular-rainwater-harvesting-system-in-${location.toLowerCase()}`}
                  target='_blank'
                >
                  Rainwater Harvesting System in {location}
                </Link>
              </bold>{' '}
              intended for filtration, transitory maintenance, and ensuing
              release. It is utilized in waste channel applications. It is
              developed utilizing our restrictive plastic infusion-shaped
              boards. We provide a full range of modules as per the
              requirements.
              <br />
              The utilization of the Rainwater Harvesting System in {
                location
              }{' '}
              is a sustainable and renewable energy source which is also known
              as green energy. It is a natural source of water which is clean
              and pure. We need to save water for future use. We provide the
              best quality products at a reasonable price for{' '}
              <bold className='text-black font-semibold'>
                Rooftop Rainwater Harvesting System in {location}.
              </bold>
            </p>
          </div>

          <div>
            <Image
              src='/new-technology-based-rainwater.jpg'
              alt='Rainwater Harvesting System'
              width={1200}
              height={700}
              className='w-full rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-300'
            />
          </div>
        </div>
      </section>

      <ICPLProducts />
      <ICPLCertification />
    </>
  )
}

export default LocationTarget
