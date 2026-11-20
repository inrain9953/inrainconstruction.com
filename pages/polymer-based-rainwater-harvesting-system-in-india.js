import { PolymerLocationWise } from '@/components/constant'
import { Footer } from '@/components/Footer/Footer'
import ICPLCertification from '@/components/ICPL/ICPLCertification'
import ICPLSolutions from '@/components/ICPL/ICPLSolutions'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const PolymerTypeIndia = () => {
  const loc = 'India'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'India'} />
      <section>
        <p className='text-center text-3xl font-bold'>Business Network</p>
        <div className='md:grid md:grid-cols-6 grid grid-cols-3 m-5 border-2 bg-sky-200 border-black p-3 md:p-5'>
          {PolymerLocationWise.map(items => (
            <a
              data-aos='zoom-in-up'
              className='text-center m-1 text-[14px] md:text-[17px] font-semibold hover:text-green-500'
              href={items.url}
            >
              {items.location}
            </a>
          ))}
        </div>
      </section>
      <ICPLSolutions />
      <ICPLCertification />
      <Footer />
    </>
  )
}

export default PolymerTypeIndia
