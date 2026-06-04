import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const TEXTS = [
  'Rainwater Harvesting',
  'Rainwater Harvesting System For Warehouse',
  'Modular Rainwater Harvesting System',
  'Roof Top Rainwater Harvesting System',
  'Polymer based Rainwater Harvesting System'
]

const PolymerTypeLocationTarget = ({ location }) => {
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
        <div className='absolute inset-0'>
          <div className='hero1-background h-full w-full' />
          <div className='absolute inset-0 bg-black/50' />
        </div>

        <div className='relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-5 text-center'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className='mb-6 text-sm md:text-xl text-white font-medium'
            >
              {TEXTS[index % TEXTS.length]}
            </motion.div>
          </AnimatePresence>

          <div className='max-w-4xl'>
            <Image
              src='/logo.png'
              alt='InRain Logo'
              width={110}
              height={110}
              className='mx-auto mb-4'
            />

            <h1 className='text-2xl md:text-4xl font-bold text-white leading-tight'>
              Polymer based Rainwater Harvesting System Service Provider in{' '}
              {location}
            </h1>

            <p className='mt-4 text-green-400 font-semibold text-lg md:text-2xl'>
              InRain® Construction Pvt. Ltd. (ICPL)
            </p>

            <p className='mt-3 text-white/90 text-base md:text-xl'>
              "A Water Conservation & Management Company"
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-5 py-10'>
        <div className='grid lg:grid-cols-[1.5fr,1fr] gap-12 items-start'>
          <div>
            <p className='uppercase tracking-widest text-green-600 font-semibold'>
              InRain® Construction Pvt Ltd.
            </p>

            <h2 className='text-2xl md:text-3xl font-bold mt-3'>
              Polymer based Rainwater Harvesting System in {location}
            </h2>

            <div className='w-24 h-1 bg-green-600 rounded-full mt-3 mb-5' />

            <p className='text-gray-700 text-base leading-8'>
              <bold className='text-green-500 font-semibold'>InRain®</bold>{' '}
              Construction Private Limited is a top provider of{' '}
              <bold className='text-black font-semibold'>
                <Link
                  href='https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system'
                  target='_blank'
                  className='text-green-500 hover:text-sky-500'
                >
                  Polymer-based Rainwater Harvesting Systems
                </Link>{' '}
                in {location}
              </bold>
              , offering advanced solutions for water management with a proven
              track record. We have successfully installed over{' '}
              <bold className='text-black font-semibold'>
                4000+ Rainwater Harvesting (RWH)
              </bold>{' '}
              systems for prestigious clients, including{' '}
              <bold className='text-black font-semibold'>
                TATA | Hindustan Unilever | PepsiCo | Larsen & Toubro | CPWD |
                NHAI | Smart Cities | Fujita | Denso | Supreme Court Judges
                Bungalows, and many more.
              </bold>{' '}
              Our focus on innovation, quality, and sustainability has
              established us as a trusted industry leader. <br></br>
              <br></br>
              We also provide{' '}
              <bold className='text-green-500 hover:text-sky-500 font-semibold'>
                <Link
                  href={
                    'https://www.inrainconstruction.com/modular-rainwater-harvesting'
                  }
                  target='_blank'
                >
                  Modular Rainwater Harvesting System services
                </Link>
              </bold>
              , helping clients efficiently manage water resources while
              supporting environmental conservation.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <div className='bg-white rounded-3xl p-6 shadow-xl border hover:-translate-y-1 transition-all'>
              <Image
                src='/approved.png'
                alt='Certified Company'
                width={70}
                height={70}
                className='mx-auto'
              />
              <p className='text-center mt-4 text-sm'>ISO 9001 : 2015</p>
              <h3 className='text-center font-bold mt-2'>CERTIFIED COMPANY</h3>
            </div>

            <div className='bg-white rounded-3xl p-6 shadow-xl border hover:-translate-y-1 transition-all'>
              <Image
                src='/trophyImg.png'
                alt='Solution Provider'
                width={70}
                height={70}
                className='mx-auto'
              />
              <p className='text-center mt-4 text-sm'>Solution Provider</p>
              <h3 className='text-center font-bold mt-2'>
                THE BEST INDUSTRIAL
              </h3>
            </div>

            <div className='bg-white rounded-3xl p-6 shadow-xl border hover:-translate-y-1 transition-all'>
              <Image
                src='/cer-g.jpg'
                alt='Griha Approved Company'
                width={70}
                height={70}
                className='mx-auto'
              />
              <h3 className='text-center font-bold mt-4'>
                INRAIN® CONSTRUCTION PVT. LTD.
              </h3>
            </div>

            <div className='bg-white rounded-3xl p-6 shadow-xl border hover:-translate-y-1 transition-all'>
              <Image
                src='/trophyImg.png'
                alt='ISO 14001'
                width={70}
                height={70}
                className='mx-auto'
              />
              <p className='text-center mt-4 text-sm'>ISO 14001 : 2015</p>
              <h3 className='text-center font-bold mt-2'>CERTIFIED COMPANY</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-5'>
          <div className='text-center max-w-4xl mx-auto'>
            <p className='uppercase tracking-widest text-green-600 font-semibold'>
              Innovation
            </p>

            <h2 className='text-xl md:text-4xl font-bold mt-2'>
              About Our Technology
            </h2>

            <p className='mt-4 text-base text-gray-700 leading-8'>
              At <bold className='text-green-500 font-semibold'>InRain®</bold>,
              we specialize in creating{' '}
              <bold className='text-black font-semibold'>
                Polymer-based Rainwater Harvesting (RWH) pits in {location}
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

          <div className='grid md:grid-cols-2 gap-8 mt-5'>
            <Image
              src='/Technology/main1.jpg'
              alt='Technology'
              width={700}
              height={500}
              className='rounded-3xl shadow-xl w-full h-full object-cover'
            />

            <Image
              src='/Technology/main2.jpeg'
              alt='Technology'
              width={700}
              height={500}
              className='rounded-3xl shadow-xl w-full h-full object-cover'
            />
          </div>

          <div className='grid md:grid-cols-3 gap-8 mt-8'>
            <Image
              src='/Technology/main3.jpg'
              alt='Technology'
              width={500}
              height={500}
              className='rounded-3xl shadow-xl'
            />

            <Image
              src='/Technology/main4.jpg'
              alt='Technology'
              width={500}
              height={500}
              className='rounded-3xl shadow-xl'
            />

            <Image
              src='/Technology/main5.jpg'
              alt='Technology'
              width={500}
              height={500}
              className='rounded-3xl shadow-xl'
            />
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-5 py-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <p className='uppercase tracking-widest text-green-600 font-semibold'>
              InRain® Construction Pvt Ltd.
            </p>

            <h2 className='text-xl md:text-3xl font-bold mt-2'>
              Rooftop Rainwater Harvesting System in {location}
            </h2>

            <div className='w-24 h-1 bg-green-600 rounded-full mt-3 mb-5' />

            <p className='text-gray-700 text-base leading-8'>
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
              The utilization of the{' '}
              <Link
                className='text-green-500 hover:text-sky-500 font-semibold'
                href={`https://www.inrainconstruction.com/modular-rainwater-harvesting-system-in-${location.toLowerCase()}`}
                target='_blank'
              >
                Rainwater Harvesting System in {location}
              </Link>{' '}
              is a sustainable and renewable energy source which is also known
              as green energy. It is a natural source of water which is clean
              and pure. We need to save water for future use. We provide the
              best quality products at a reasonable price for the{' '}
              <bold className='text-black font-semibold'>
                Rooftop Rainwater Harvesting System in {location}.
              </bold>
            </p>
          </div>

          <div>
            <Image
              src='/new-technology-based-rainwater.jpg'
              alt='Modular Rainwater Harvesting Filter by InRain®'
              width={700}
              height={700}
              className='rounded-3xl shadow-2xl w-full object-cover hover:scale-[1.02] transition-all duration-300'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PolymerTypeLocationTarget
