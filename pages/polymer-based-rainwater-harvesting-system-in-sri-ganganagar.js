import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const PolymerTypeSriGanganagar = () => {
  const loc = 'Sri Ganganagar'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase().replace(/\s+/g, '-')} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Sri Ganganagar'} />
      <Footer />
    </>
  )
}

export default PolymerTypeSriGanganagar
