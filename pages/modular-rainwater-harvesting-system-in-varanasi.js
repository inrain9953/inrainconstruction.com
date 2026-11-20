import ModularLocationTarget from '@/components/LocationTarget/ModularLocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import { Footer } from '@/components/Footer/Footer'
import ModularMetatag from '@/components/Metatag/ModularMetatag'

const ModularVaranasi = () => {
  const loc = 'Varanasi'
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location='Varanasi' />
      <Footer />
    </>
  )
}

export default ModularVaranasi
