import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'

const PolymerTypeBikaner = () => {
  const loc = 'Bikaner'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Bikaner'} />
      <Footer />
    </>
  )
}

export default PolymerTypeBikaner
