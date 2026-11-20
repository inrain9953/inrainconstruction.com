import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const PolymerTypeGreaterNoida = () => {
  const loc = 'Greater Noida'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase().replace(/\s+/g, '-')} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Greater Noida'} />
      <Footer />
    </>
  )
}

export default PolymerTypeGreaterNoida
