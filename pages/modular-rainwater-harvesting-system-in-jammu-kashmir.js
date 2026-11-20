import { Footer } from '@/components/Footer/Footer'
import ModularLocationTarget from '@/components/LocationTarget/ModularLocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import ModularMetatag from '@/components/Metatag/ModularMetatag'

const ModularJammuKashmir = () => {
  const loc = 'Jammu and Kashmir'
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase().replaceAll(' ', '-')} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location='Jammu & Kashmir' />
      <Footer />
    </>
  )
}

export default ModularJammuKashmir
