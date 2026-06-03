import React from 'react'
import Image from 'next/image'

export const Hero3 = () => {
  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-2 md:px-7'>
        {/* Top Section */}
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div className='space-y-5'>
            <div>
              <span className='inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm'>
                Water Conservation Solutions
              </span>
            </div>

            <h3 className='text-3xl md:text-4xl font-bold text-slate-900 leading-tight'>
              Rainwater Harvesting Filtration System
            </h3>

            <div className='w-24 h-1 bg-green-500 rounded-full'></div>

            <p className='text-gray-600 text-base leading-7 text-justify'>
              A module permeation storm water tank intended for filtration,
              transitory maintenance, and ensuing release. It is utilized in
              waste channel applications. It is developed utilizing our
              restrictive plastic infusion-shaped boards. We offer a complete
              range of module options tailored to meet your specific
              requirements.
            </p>
          </div>

          {/* Image */}
          <div>
            <div className='overflow-hidden rounded-xl shadow-2xl border border-slate-200 group'>
              <Image
                src='/product/product3.png'
                alt='Rainwater Harvesting Filtration System'
                width={600}
                height={600}
                className='w-full object-cover transition duration-500 group-hover:scale-105'
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-10'>
          <div className='bg-white rounded-[32px] shadow-xl border border-slate-200 p-5 md:p-10'>
            <div className='mb-10'>
              <span className='inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm'>
                Sustainable Development
              </span>

              <h4 className='text-2xl md:text-4xl font-bold text-slate-900 mt-3'>
                Water Conservation & Management
              </h4>

              <div className='w-28 h-1 bg-sky-500 rounded-full mt-5'></div>
            </div>

            <div className='space-y-5'>
              <p className='text-lg text-gray-700 leading-7'>
                At <span className='font-bold text-green-600'>InRain®</span>{' '}
                Construction, we firmly believe in the popular quote
              </p>

              <div className='bg-sky-50 border-l-4 border-sky-500 rounded-2xl p-6'>
                <h5 className='text-2xl md:text-3xl font-bold text-slate-900 italic'>
                  “Water is life, and conservation is the future.”
                </h5>
              </div>

              <p className='text-base text-gray-700 leading-7 text-justify'>
                70% of our earth is water. However, the potable water, which is
                required for every human need, is very little. Growing
                urbanization and global development have also led to a sharp
                decline in groundwater. Climate change with global warming is
                not making things easier for humans. Water conservation and
                management techniques are vital for sustainable development. It
                helps in managing the increasing demand for water with growing
                industrialization and an increasing population.
              </p>

              <p className='text-base text-gray-700 leading-7 text-justify'>
                At <span className='font-bold text-green-600'>InRain®</span>, we
                provide water conservation & management techniques leveraging
                modern technology. Conservation methods and solutions offered by
                InRain are not only environmentally friendly but economical as
                well.
              </p>

              {/* Highlight Cards */}
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-sky-50 border border-sky-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition'>
                  <h6 className='text-xl font-bold text-sky-700 mb-3'>
                    The Technology We Offer
                  </h6>

                  <p className='text-gray-700 leading-7 text-justify'>
                    We use advanced modular technology for rainwater harvesting
                    solutions. This advanced technology helps us to reduce costs
                    and improves the longevity of the rainwater harvesting
                    system. It helps in overcoming the major challenge of
                    space-saving, which is a prime concern in urban planning and
                    development.
                  </p>
                </div>

                <div className='bg-green-50 border border-green-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition'>
                  <h6 className='text-xl font-bold text-green-700 mb-3'>
                    The Quality We Offer
                  </h6>

                  <p className='text-gray-700 leading-7 text-justify'>
                    We provide high-quality products that undergo a rigorous
                    quality check. Our in-house manufacturing ensures the
                    quality of products, and we consistently deliver excellence.
                  </p>
                </div>
              </div>

              <p className='text-base text-gray-700 leading-7 text-justify'>
                We firmly believe that the future of urban planning and
                development is through the practice of water conservation and
                management. We are fortunate to be blessed with the ability to
                contribute to saving the environment while we help others to
                incorporate water conservation methods and practices into life.
              </p>

              <p className='text-base text-gray-700 leading-7 text-justify'>
                At <span className='font-bold text-green-600'>InRain®</span>, we
                help organizations, housing societies, and individuals to
                integrate water conservation and management into their
                development plans. We aim to provide sustainability in water
                conservation practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
