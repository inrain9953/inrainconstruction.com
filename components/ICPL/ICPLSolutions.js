import React from 'react'
import Image from 'next/image'

const ICPLSolutions = () => {
  return (
    <section className='py-5 md:py-10'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Heading */}
        <div className='text-center mb-6'>
          <span className='inline-block px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm mb-4'>
            Sustainable Water Solutions
          </span>

          <h2 className='text-3xl md:text-5xl font-bold text-slate-900'>
            Solutions
          </h2>

          <div className='w-24 h-1 bg-sky-600 mx-auto rounded-full mt-5'></div>
        </div>

        {/* Banner */}
        <div className='overflow-hidden rounded-[32px] shadow-2xl border border-slate-200 mb-10'>
          <Image
            src={'/banner4.jpg'}
            alt='Solutions Banner'
            width={1600}
            height={700}
            className='w-full object-cover'
          />
        </div>

        {/* Solution 1 */}
        <div className='grid lg:grid-cols-2 gap-10 items-center mb-20'>
          <div className='overflow-hidden rounded-[30px] shadow-2xl group'>
            <Image
              src={'/solution1.jpg'}
              alt='Reuse of Rain Water'
              width={1000}
              height={1000}
              className='w-full object-cover transition duration-700 group-hover:scale-105'
            />
          </div>

          <div className='bg-white border border-slate-200 rounded-[30px] p-8 md:p-12 shadow-xl'>
            <h2 className='text-2xl md:text-4xl font-bold text-slate-900 mb-5'>
              Reuse of Rain Water
            </h2>

            <div className='w-20 h-1 bg-sky-600 rounded-full mb-4'></div>

            <p className='text-gray-600 leading-7 text-base text-justify'>
              Reuse of Rain Water is the key benefactor towards the securing and
              abnormal state usage of Water Resources.
              <br />
              <br />
              We have a solid nearness in Designing, Implementation and
              Management of such activities. Our center organizations are upheld
              up by administrations for Rainwater Harvesting and Ground Water
              Management, broad Research and Development.
            </p>
          </div>
        </div>

        {/* Solution 2 */}
        <div className='grid lg:grid-cols-2 gap-10 items-center mb-20'>
          <div className='order-2 lg:order-1 bg-white border border-slate-200 rounded-[30px] p-8 md:p-12 shadow-xl'>
            <h2 className='text-2xl md:text-4xl font-bold text-slate-900 mb-5'>
              Pond Development
            </h2>

            <div className='w-20 h-1 bg-sky-600 rounded-full mb-4'></div>

            <p className='text-gray-600 leading-7 text-base text-justify'>
              Water bodies is like life for Indian culture, this is a standout
              among the best revive cum holding structure which required least
              venture and give most noteworthy return. At ICPL we utilize most
              trend setting innovation to protect water assets in their unique
              state. We work past to make the lakes look great.
              <br />
              <br />
              Our work incorporates purifying, creation and the board of lakes
              securely following every single required guideline and rules of
              the government. In order to maintain a standard each water body
              need to undergo certain processes like desalting, water
              augmentation, bio-remediation, decentralization, visual attraction
              and monitoring. We make sure that the entire processes are
              professionally and smoothly managed.
            </p>
          </div>

          <div className='order-1 lg:order-2 overflow-hidden rounded-[30px] shadow-2xl group'>
            <Image
              src={'/solution2.jpg'}
              alt='Pond Development'
              width={1000}
              height={1000}
              className='w-full object-cover transition duration-700 group-hover:scale-105'
            />
          </div>
        </div>

        {/* Solution 3 */}
        <div className='grid lg:grid-cols-2 gap-10 items-center'>
          <div className='overflow-hidden rounded-[30px] shadow-2xl group'>
            <Image
              src={'/solution3.jpg'}
              alt='Rainwater Harvesting Recharge'
              width={1000}
              height={1000}
              className='w-full object-cover transition duration-700 group-hover:scale-105'
            />
          </div>

          <div className='bg-white border border-slate-200 rounded-[30px] p-8 md:p-12 shadow-xl'>
            <h2 className='text-2xl md:text-4xl font-bold text-slate-900 mb-5'>
              Rainwater Harvesting Recharge
            </h2>

            <div className='w-20 h-1 bg-sky-600 rounded-full mb-4'></div>

            <p className='text-gray-600 leading-7 text-base text-justify'>
              Rain Water Harvesting Recharge will be water that starts amid
              precipitation occasions in light of the fact that impenetrable
              surfaces (parking areas, streets, structures, compacted soil)
              don’t enable downpour to penetrate into the ground, more spillover
              is created than in the undeveloped condition.
              <br />
              <br />
              Rain Water Harvesting Recharge the board additionally adds to
              network well being and money related hazard the executives by
              decreasing the danger of urban flooding and disintegration. InRain
              Construction Pvt. Ltd. helps you to reduces mains water dependence
              by strong structural design, low maintenance structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ICPLSolutions
