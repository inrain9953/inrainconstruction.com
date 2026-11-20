import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const PolymerTypeAllahabad = () => {
  const loc = 'Allahabad'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Allahabad'} />
      <Footer />
    </>
  )
}

export default PolymerTypeAllahabad
