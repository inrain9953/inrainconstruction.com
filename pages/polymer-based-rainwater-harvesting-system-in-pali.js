import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const PolymerTypePali = () => {
  const loc = 'Pali'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Pali'} />
      <Footer />
    </>
  )
}

export default PolymerTypePali
