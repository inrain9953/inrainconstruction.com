import React from 'react'
import Image from 'next/image'

const ICPLCertification = () => {
  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Section Header */}
        <div className='text-center mb-10'>
          <span className='inline-block px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm mb-4'>
            Certifications & Recognition
          </span>

          <h2 className='text-3xl md:text-5xl font-bold text-slate-900'>
            Explore Our Certificate
          </h2>

          <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
            Our certifications reflect our commitment to quality,
            sustainability, innovation, and excellence in rainwater harvesting
            and water conservation solutions.
          </p>

          <div className='w-24 h-1 bg-sky-600 rounded-full mx-auto mt-6'></div>
        </div>

        {/* Certificates Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* ISO Certificate 1 */}
          <div className='group bg-white rounded-[30px] overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500'>
            <div className='overflow-hidden'>
              <Image
                src={'/iso1.jpg'}
                alt='ISO Certificate'
                width={600}
                height={800}
                className='w-full object-cover transition duration-700 group-hover:scale-105'
              />
            </div>

            <div className='p-5 text-center'>
              <h3 className='font-bold text-lg text-slate-900'>
                ISO Certification
              </h3>
            </div>
          </div>

          {/* ISO Certificate 2 */}
          <div className='group bg-white rounded-[30px] overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500'>
            <div className='overflow-hidden'>
              <Image
                src={'/iso2.jpg'}
                alt='ISO Certificate'
                width={600}
                height={800}
                className='w-full object-cover transition duration-700 group-hover:scale-105'
              />
            </div>

            <div className='p-5 text-center'>
              <h3 className='font-bold text-lg text-slate-900'>
                Quality Management Certification
              </h3>
            </div>
          </div>

          {/* GRIHA Certificate */}
          <div className='group bg-white rounded-[30px] overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500'>
            <div className='overflow-hidden'>
              <Image
                src={'/griha.jpg'}
                alt='GRIHA Certification'
                width={600}
                height={800}
                className='w-full object-cover transition duration-700 group-hover:scale-105'
              />
            </div>

            <div className='p-5 text-center'>
              <h3 className='font-bold text-lg text-slate-900'>
                GRIHA Certification
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ICPLCertification
