import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const PolymerTypeHyderabad = () => {
  const loc = 'Hyderabad'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />F
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Hyderabad'} />
      <Footer />
    </>
  )
}

export default PolymerTypeHyderabad
