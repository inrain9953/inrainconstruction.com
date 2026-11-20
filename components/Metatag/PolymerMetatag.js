import React from 'react'
import Head from 'next/head'

const PolymerMetatag = ({ loc, slug }) => {
  return (
    <Head>
      <title>{`Polymer based Rainwater Harvesting System in ${loc} | InRain®`}</title>
      <meta charSet='UTF-8' />
      <meta name='language' content='en' />
      <meta name='author' content='InRain® Construction Pvt. Ltd.' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index, follow' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta
        name='description'
        content={`Are you finding Polymer based Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`}
      />
      <meta
        name='keywords'
        content={`Polymer based Rainwater Harvesting System in ${loc}, Polymer based Rainwater Harvesting System Service Provider in ${loc}, Rooftop Rainwater Harvesting System in ${loc}, Rain Water Harvesting System Manufacturers In ${loc}, Rain Water Harvesting System Suppliers In ${loc}, Rain Water Harvesting System Exporters, Best Rain Water Harvesting System In ${loc}`}
      />
      <meta
        name='canonical'
        content={`https://www.inrainconstruction.com/polymer-based-rainwater-harvesting-system-in-${slug}`}
      />
      <meta
        property='og:title'
        content={`Polymer based Rainwater Harvesting System in ${loc} | InRain®`}
      />
      <meta
        property='og:description'
        content={`Are you finding Polymer based Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`}
      />
      <meta
        property='og:url'
        content={`https://www.inrainconstruction.com/polymer-based-rainwater-harvesting-system-in-${slug}`}
      />
      <meta
        name='twitter:title'
        content={`Polymer based Rainwater Harvesting System in ${loc} | InRain®`}
      />
      <meta
        name='twitter:description'
        content={`Are you finding Polymer based Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`}
      />
      <meta name='author' content='InRain® Construction Pvt Ltd'></meta>
      <meta property='og:site_name' content='InRain® Construction Pvt. Ltd.' />
      <meta
        name='google-site-verification'
        content='Vger2ATzpz22dMQGSECVrk-fiHzoT9KVObqb1m9k3HA'
      />
    </Head>
  )
}

export default PolymerMetatag
