import ICPLAbout from '@/components/ICPL/ICPLAbout'
import ICPLCertification from '@/components/ICPL/ICPLCertification'
import ICPLMain from '@/components/ICPL/ICPLMain'
import ICPLNavbar from '@/components/ICPL/ICPLNavbar'
import ICPLProducts from '@/components/ICPL/ICPLProducts'
import ICPLSolutions from '@/components/ICPL/ICPLSolutions'
import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import ICPLFooter from '@/components/ICPL/ICPLFooter'
import PopUp from '@/components/popup'

const ICPL = () => {
  const title =
    'Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.'
  const desc =
    'Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.'
  const keyword =
    'rainwater harvesting, modular rainwater harvesting, roof top rainwater harvesting, water conservation, storm water management, rainwater harvesting in delhi, modular rainwater harvesting for industries'
  const canonical = 'https://www.inrainconstruction.com/icpl'
  const ogUrl = 'https://www.inrainconstruction.com/icpl'
  const ogTitle =
    'Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.'
  const ogDescription =
    'Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.'
  const twittertitle =
    'Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.'
  const twitterdescription =
    'Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='UTF-8' />
        <meta name='language' content='en' />
        <meta name='author' content='InRain® Construction Pvt. Ltd.' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta name='description' content={desc} />
        <meta name='keywords' content={keyword} />
        <meta name='canonical' content={canonical} />
        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:url' content={ogUrl} />
        <meta name='twitter:title' content={twittertitle} />
        <meta name='twitter:description' content={twitterdescription} />
        <meta
          property='og:site_name'
          content='InRain® Construction Pvt. Ltd.'
        />
        <meta
          name='google-site-verification'
          content='Vger2ATzpz22dMQGSECVrk-fiHzoT9KVObqb1m9k3HA'
        />
      </Head>
      <Script id='google-analytics' strategy='beforeInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16650006765');
        `}
      </Script>
      <Script id='gtag-conversion-script' strategy='beforeInteractive'>
        {`gtag('event', 'conversion', { 'send_to': 'AW-16650006765/gyk2CK3ox8gZEO3hq4M-', 'value': 100000.0, 'currency': 'INR' });`}
      </Script>
      <ICPLNavbar />
      <PopUp />
      <ICPLMain />
      <ICPLAbout />
      <ICPLProducts />
      <ICPLSolutions />
      <ICPLCertification />
      <ICPLFooter />
    </>
  )
}

export default ICPL
