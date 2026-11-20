import { Footer } from '@/components/Footer/Footer'
import ModularLocationTarget from '@/components/LocationTarget/ModularLocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import React from 'react'
import Head from 'next/head'
import ModularMetatag from '@/components/Metatag/ModularMetatag'

const ModularTirupati = () => {
  const loc = 'Tirupati'
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location='Tirupati' />
      <Footer />
    </>
  )
}

export default ModularTirupati
