import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'

const PolymerTypeMoradabad = () => {
  const loc = 'Moradabad'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Moradabad'} />
      <Footer />
    </>
  )
}

export default PolymerTypeMoradabad
