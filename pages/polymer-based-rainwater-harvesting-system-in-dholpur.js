import { Footer } from '@/components/Footer/Footer'
import PolymerTypeLocationTarget from '@/components/LocationTarget/PolymerTypeLocationTarget'
import PolymerMetatag from '@/components/Metatag/PolymerMetatag'
import { Navbar } from '@/components/Navbar/Navbar'
import PopUp from '@/components/popup'
import Head from 'next/head'
import React from 'react'

const PolymerTypeDholpur = () => {
  const loc = 'Dholpur'
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={'Dholpur'} />
      <Footer />
    </>
  )
}

export default PolymerTypeDholpur
