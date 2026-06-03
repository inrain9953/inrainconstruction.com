import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
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

      {/* Local Business JSON-LD */}
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "InRain® Construction Pvt. Ltd",
          image: "https://www.inrainconstruction.com/public/logo.png",
          description:
            "Find a Rainwater Harvesting System in India. We are the best Modular Rainwater Harvesting System Service Provider in India. Get & Install a Rainwater Harvesting System at the best price.",
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
            "https://www.facebook.com/inrainconstructionofficial",
            "https://x.com/InrainC",
            "https://www.instagram.com/inrainconstruction_/",
            "https://in.pinterest.com/inrainc0212/",
          ],

          brand: {
            "@type": "Brand",
            name: "InRain Construction Pvt Ltd",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "4683",
          },
        })}
      </Script>
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
