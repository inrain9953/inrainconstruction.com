import { Footer } from '@/components/Footer/Footer'
import ModularLocationTarget from '@/components/LocationTarget/ModularLocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import ModularMetatag from '@/components/Metatag/ModularMetatag'

const ModularBathinda = () => {
  const loc = 'Bathinda'
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location='Bathinda' />
      <Footer />
    </>
  )
}

export default ModularBathinda
