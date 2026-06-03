import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'
import Link from 'next/link'

export const Hero2 = () => {
  return (
    <section className='py-10 bg-gradient-to-b from-slate-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Main Content */}
        <div className='max-w-5xl mx-auto text-center'>
          <div className='inline-flex items-center px-6 py-3 rounded-full bg-sky-100 border border-sky-200 mb-6'>
            <h1 className='text-lg md:text-2xl font-bold text-sky-700'>
              Rainwater Harvesting System in India
            </h1>
          </div>

          <p className='text-gray-700 text-base leading-7 text-justify md:text-center'>
            At{' '}
            <span className='text-green-600 font-bold'>
              InRain<sup>®</sup>,
            </span>{' '}
            we are experts in sustainable, eco-friendly rainwater harvesting
            solutions for homes & businesses, designed to preserve water. We are
            engaged in making Rainwater Harvesting (RWH) systems based on modern
            technology. It is indeed entirely different from conventional
            rainwater harvesting systems.{' '}
            <span className='text-green-600 font-bold'>
              InRain<sup>®</sup>
            </span>{' '}
            is fully equipped with an in-house making and manufacturing process,
            ensuring its best-in-class quality. We share our contribution to the
            nation by being proud partners of{' '}
            <span className='font-bold text-black'>
              “The Make in India Movement.”
            </span>
          </p>
        </div>

        {/* Vision + Image + Modular */}
        <div className='grid lg:grid-cols-3 gap-7 mt-10 items-center'>
          {/* Vision */}
          <div className='bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full'>
            <div className='inline-flex px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold mb-5'>
              Vision
            </div>

            <p className='text-gray-700 leading-7 text-justify'>
              The solution is aimed at solving the problem of the water crisis
              in cities where there is a lack of space for storage of water and
              huge populations, leading to a shortage of water supply and
              excessive withdrawal of water from the ground.
            </p>
          </div>

          {/* Image */}
          <div className='group overflow-hidden rounded-xl shadow-2xl'>
            <Image
              src='/Technology/main2.jpeg'
              alt='img'
              width={500}
              height={500}
              className='w-full h-full object-cover transition duration-700 group-hover:scale-105'
            />
          </div>

          {/* Modular */}
          <div className='bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full'>
            <div className='inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5'>
              Modular Rainwater Harvesting
            </div>

            <p className='text-gray-700 leading-7 text-justify'>
              <Link
                href='https://www.inrainconstruction.com/modular-rainwater-harvesting'
                className='text-green-600 font-semibold hover:text-sky-600'
              >
                Modular Rainwater Harvesting
              </Link>{' '}
              is a new technique for Rainwater Harvesting. It is both convenient
              and easy to maintain in comparison to traditional RWH. This New
              Age RWH system is designed with a maintenance-free structure,
              which makes it both cost-effective and eco-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
