import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const PolymerTypeIndore = () => {
  const loc = 'Indore'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />z
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Indore'} />
      <Footer />
    </>
  )
}

export default PolymerTypeIndore
