import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'

const PolymerTypeGhaziabad = () => {
  const loc = 'Ghaziabad'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />F
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Ghaziabad'} />
      <Footer />
    </>
  )
}

export default PolymerTypeGhaziabad
