import { Footer } from '@/components/Footer/Footer'
import ModularLocationTarget from '@/components/LocationTarget/ModularLocationTarget'
import ModularMetatag from '@/components/Metatag/ModularMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'

const ModularSonipat = () => {
  const loc = 'Sonipat'
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location='Sonipat' />
      <Footer />
    </>
  )
}

export default ModularSonipat
