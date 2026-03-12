import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Google Tag Manager Script */}
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K8YCBL2VWJ');
        `}
      </Script>

      <Script
        id="gtm"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NZN89TXV');
          `,
        }}
      />

      {/* Organization JSON-LD */}
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "InRain® Construction Pvt. Ltd",
          url: "https://www.inrainconstruction.com/",
          logo: "https://www.inrainconstruction.com/public/logo.png",
          sameAs: [
            "https://www.facebook.com/inrainconstructions",
            "https://x.com/InrainC",
            "https://www.instagram.com/inrainconstruction_/",
            "https://in.pinterest.com/inrainc0212/",
          ],
        })}
      </Script>

      {/* Website JSON-LD */}
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: "InRain® Construction Pvt. Ltd",
          url: "https://www.inrainconstruction.com/",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.inrainconstruction.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      {/* Local Business JSON-LD */}
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "InRain® Construction Pvt. Ltd",
          image: "https://www.inrainconstruction.com/public/logo.png",
          "@id": "https://www.inrainconstruction.com",
          url: "https://www.inrainconstruction.com/",
          telephone: "011-35823511",

          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plot No 06, khasra No-431, 1st floor, above Union Bank of India, Satbari - Chattarpur Main Road",
            addressLocality: "New Delhi",
            postalCode: "110074",
            addressCountry: "IN",
          },

          sameAs: [
            "https://www.facebook.com/inrainconstructions",
            "https://x.com/InrainC",
            "https://www.instagram.com/inrainconstruction_/",
            "https://in.pinterest.com/inrainc0212/",
          ],

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "4683",
          },

          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Rahul Sharma",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              reviewBody:
                "Excellent rainwater harvesting solution. Professional installation and great support.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Aniket Singh",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.7",
              },
              reviewBody:
                "InRain provided an efficient and eco-friendly solution for our water needs. Highly recommended!",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Deepak Verma",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              reviewBody:
                "InRain's rainwater harvesting system has significantly reduced our water bills and helped us contribute to environmental sustainability. Great service and support!",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Manya Chaudhary",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.8",
              },
              reviewBody:
                "InRain's team was professional and knowledgeable. The installation process was smooth, and the system works perfectly. We are very satisfied with our decision to go with InRain.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Shubham Kumar",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.6",
              },
              reviewBody:
                "InRain's rainwater harvesting system has been a game-changer for our home. The quality of the product and the customer service are top-notch. We highly recommend InRain to anyone looking for sustainable water solutions.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Shweta Tiwari",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
              },
              reviewBody:
                "he quality of the product and the customer service are top-notch. We highly recommend InRain.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Amit Joshi",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              reviewBody:
                "InRain's rainwater harvesting system has exceeded our expectations. The installation was seamless, and the system is performing exceptionally well. We are thrilled with our decision to choose InRain for our water conservation needs.",
            },
          ],
        })}
      </Script>
      <Analytics />
      <SpeedInsights />
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZN89TXV"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Component {...pageProps} />
    </>
  );
}
