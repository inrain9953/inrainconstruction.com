import { Footer } from '@/components/Footer/Footer'
import ModularLocationTarget from '@/components/LocationTarget/ModularLocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import ModularMetatag from '@/components/Metatag/ModularMetatag'

const ModularNoida = () => {
  const loc = 'Noida'
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location='Noida' />
      <Footer />
    </>
  )
}

export default ModularNoida
