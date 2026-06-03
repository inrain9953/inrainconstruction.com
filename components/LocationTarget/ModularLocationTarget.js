import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ICPLCertification from '../ICPL/ICPLCertification'
import ICPLProducts from '../ICPL/ICPLProducts'

const TEXTS = [
  'Modular Rainwater Harvesting',
  'Modular Rainwater Harvesting System For Warehouse',
  'Modular Rainwater Harvesting System',
  'Roof Top Rainwater Harvesting',
  'Polymer based Rainwater Harvesting System'
]

const ModularLocationTarget = ({ location }) => {
  const [index, setIndex] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    
    const intervalId = setInterval(
      () => setIndex(index => (index + 1) % TEXTS.length),
      3000 // every 3 seconds
    )
    return () => clearInterval(intervalId)
  }, [mounted])
  
  return (
    <>
      <section className='relative min-h-[80vh] hero1-background overflow-hidden'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50'></div>

        {/* Animated Text */}
        <div className='absolute top-24 left-1/2 -translate-x-1/2 z-20'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className='backdrop-blur-md bg-white/10 border border-white/20 px-6 py-1 rounded-full text-white text-center font-medium'
            >
              {TEXTS[index % TEXTS.length]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className='relative z-10 flex flex-col justify-center items-center text-center min-h-[80vh] px-4'>
          <Image
            src='/logo.png'
            alt='InRain Logo'
            width={120}
            height={120}
            className='mb-6 drop-shadow-2xl'
          />

          <h1 className='text-2xl md:text-4xl font-bold text-white max-w-5xl leading-tight'>
            Modular Rainwater Harvesting System Service Provider in {location}
          </h1>

          <p className='mt-2 text-green-400 text-lg md:text-2xl font-semibold'>
            InRain® Construction Pvt. Ltd. (ICPL)
          </p>

          <p className='text-white/90 mt-1 text-lg md:text-2xl font-medium'>
            "A Water Conservation & Management Company"
          </p>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-5 py-10'>
        <div className='grid lg:grid-cols-3 gap-10 items-start'>
          {/* Content */}
          <div className='lg:col-span-2'>
            <span className='inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm'>
              InRain® Construction Pvt Ltd.
            </span>

            <h2 className='text-2xl md:text-4xl font-bold mt-6 mb-3'>
              Modular Rainwater Harvesting System in {location}
            </h2>

            <div className='w-24 h-1 bg-green-500 rounded-full mb-8'></div>

            <p className='text-gray-600 text-base leading-relaxed text-justify'>
              <bold className='text-green-500 font-semibold'>InRain®</bold>{' '}
              Construction Private Limited is proud to be one of the leading
              providers of{' '}
              <bold className='text-black font-semibold'>
                <Link
                  href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
                  target='_blank'
                  className='text-green-500 hover:text-sky-500'
                >
                  Modular Rainwater Harvesting Systems
                </Link>{' '}
                in {location},
              </bold>{' '}
              delivering smart, efficient, and sustainable water management
              solutions. With a strong track record and deep industry expertise,
              we’ve successfully installed over{' '}
              <bold className='text-black font-semibold'>
                4000+ Rainwater Harvesting Systems
              </bold>{' '}
              across India. <br></br>
              <br></br>
              Some of our prestigious clients include{' '}
              <bold className='text-black font-semibold'>
                TATA | Hindustan Unilever | PepsiCo | Larsen & Toubro | CPWD |
                NHAI | Smart Cities | Fujita | Denso and even Supreme Court
                Judges’ Bungalows,
              </bold>{' '}
              a testament to the quality and trust we bring to every project.
              <br></br>
              <br></br>
              At InRain®, innovation, reliability, and sustainability are at the
              heart of everything we do. In addition to modular systems, we also
              offer{' '}
              <bold className='text-green-500 hover:text-sky-500 font-semibold'>
                <Link
                  href={
                    'https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system'
                  }
                  target='_blank'
                >
                  Polymer-based Rainwater Harvesting Solutions,
                </Link>
              </bold>{' '}
              helping our clients manage their water resources more efficiently
              while supporting long-term environmental conservation.
            </p>
          </div>

          {/* Certifications */}
          <div className='grid grid-cols-2 gap-5'>
            <div className='bg-white rounded-3xl shadow-xl p-5 text-center hover:-translate-y-2 transition-all duration-300'>
              <Image
                src='/approved.png'
                alt='Certified Company'
                width={70}
                height={70}
                className='mx-auto'
              />
              <p className='text-xs mt-3'>ISO 9001 : 2015</p>
              <p className='font-bold mt-2'>CERTIFIED COMPANY</p>
            </div>

            <div className='bg-white rounded-3xl shadow-xl p-5 text-center hover:-translate-y-2 transition-all duration-300'>
              <Image
                src='/trophyImg.png'
                alt='Solution Provider'
                width={70}
                height={70}
                className='mx-auto'
              />
              <p className='text-xs mt-3'>Solution Provider</p>
              <p className='font-bold mt-2'>THE BEST INDUSTRIAL</p>
            </div>

            <div className='bg-white rounded-3xl shadow-xl p-5 text-center hover:-translate-y-2 transition-all duration-300'>
              <Image
                src='/cer-g.jpg'
                alt='Griha Approved'
                width={70}
                height={70}
                className='mx-auto'
              />
              <p className='font-bold text-sm mt-3'>
                INRAIN® CONSTRUCTION PVT. LTD.
              </p>
            </div>

            <div className='bg-white rounded-3xl shadow-xl p-5 text-center hover:-translate-y-2 transition-all duration-300'>
              <Image
                src='/trophyImg.png'
                alt='ISO 14001'
                width={70}
                height={70}
                className='mx-auto'
              />
              <p className='text-xs mt-3'>ISO 14001 : 2015</p>
              <p className='font-bold mt-2'>CERTIFIED COMPANY</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-5'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8'>
              About Our Technology
            </h2>

            <p className='text-base text-gray-600 leading-relaxed text-justify'>
              At <bold className='text-green-500 font-semibold'>InRain®</bold>,
              we specialize in creating{' '}
              <bold className='text-black font-semibold'>
                Modular Rainwater Harvesting (RWH) pits in {location}
              </bold>
              , utilizing advanced technology inspired by German engineering.
              Unlike traditional rainwater harvesting systems, our approach
              stands out for its innovation. With our in-house manufacturing
              capabilities, we ensure top-tier quality in every aspect of our
              work. We are proud to contribute to the nation by being an active
              partner in the{' '}
              <bold className='text-black font-semibold'>"Make in India"</bold>{' '}
              initiative.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mt-16'>
            <Image
              src='/Technology/main1.jpg'
              alt='Technology'
              width={800}
              height={600}
              className='rounded-3xl shadow-xl hover:scale-105 transition-all duration-500'
            />

            <Image
              src='/Technology/main2.jpeg'
              alt='Technology'
              width={800}
              height={600}
              className='rounded-3xl shadow-xl hover:scale-105 transition-all duration-500'
            />
          </div>

          <div className='grid md:grid-cols-3 gap-8 mt-8'>
            <Image
              src='/Technology/main3.jpg'
              alt='Technology'
              width={600}
              height={400}
              className='rounded-3xl shadow-xl hover:scale-105 transition-all duration-500'
            />

            <Image
              src='/Technology/main4.jpg'
              alt='Technology'
              width={600}
              height={400}
              className='rounded-3xl shadow-xl hover:scale-105 transition-all duration-500'
            />

            <Image
              src='/Technology/main5.jpg'
              alt='Technology'
              width={600}
              height={400}
              className='rounded-3xl shadow-xl hover:scale-105 transition-all duration-500'
            />
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-5 py-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <span className='inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold'>
              InRain® Construction Pvt Ltd.
            </span>

            <h2 className='text-2xl md:text-3xl font-bold mt-4'>
              Rooftop Rainwater Harvesting System in {location}
            </h2>

            <div className='w-24 h-1 bg-green-500 rounded-full my-4'></div>

            <p className='text-gray-600 text-base leading-relaxed text-justify'>
              A{' '}
              <bold className='text-black font-semibold'>
                <Link
                  className='text-green-500 hover:text-sky-500'
                  href={
                    'https://www.inrainconstruction.com/roof-top-rainwater-harvesting-system-RRWHS-InRain'
                  }
                  target='_blank'
                >
                  Rooftop Rainwater Harvesting System
                </Link>{' '}
                in {location}
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
              is a sustainable and renewable energy source, which is also known
              as green energy. It is a natural source of water which is clean
              and pure. We need to save water for future use. We provide the
              best quality products at a reasonable price for{' '}
              <bold className='text-black font-semibold'>
                Rooftop Rainwater Harvesting Systems in {location}.
              </bold>
            </p>
          </div>

          <div>
            <Image
              src='/new-technology-based-rainwater.jpg'
              alt='Modular Rainwater Harvesting Filter'
              width={700}
              height={700}
              className='rounded-3xl shadow-2xl hover:scale-[1.02] transition-all duration-500'
            />
          </div>
        </div>
      </section>

      <ICPLProducts />
      <ICPLCertification />
    </>
  )
}

export default ModularLocationTarget
