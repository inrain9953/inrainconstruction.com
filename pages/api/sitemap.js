import { data } from "autoprefixer";
import { url } from "inspector";

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

// An array with your links
export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "daily", priority: 0.8 },
    { url: "/about-us/", changefreq: "daily", priority: 0.8 },
    { url: "/about_icpl/", changefreq: "daily", priority: 0.8 },
    { url: "/products/", changefreq: "daily", priority: 0.8 },
    { url: "/solutions/", changefreq: "daily", priority: 0.8 },
    { url: "/contact-us/", changefreq: "daily", priority: 0.8 },
    { url: "/blogs/", changefreq: "daily", priority: 0.8 },
    {
      url: "/rainwater-harvesting-system-for-warehouse/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/co-polymer-based-rainwater-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-tank/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/frp-based-rainwater-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/roof-top-rainwater-harvesting-system-RRWHS-InRain/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/ground-water-recharge-system-for-industries/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-vendors-in-delhi-gurgaon/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/box-type-rainwater-harvesting/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/storm-water-recharge-and-management/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/bioswale-for-rainwater-drain/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-installation-company/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-manufacturers/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-pit/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-recharge-pit/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/careers/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/rainwater-harvesting-supercharge-your-life-to-sustainable-living/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/advancing-sustainability-with-modular-rainwater-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/rainwater-harvesting-for-commercial-buildings-why-every-business-should-consider-it/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/storm-water-management-in-india/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/rainwater-harvesting-system-for-roof-top-effective-water-solutions-rainwater-harvesting-system-supercharge-your-life-to-sustainable-living/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/rainwater-harvesting-and-its-importance",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/rainwater-harvesting-in-india/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/why-beneficial-of-modular-rainwater-harvesting-systems-for-home-and-commercial-buildings/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/eco-friendly-benefits-of-a-modular-rainwater-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/a-blueprint-for-sustainable-living/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/simple-and-practical-methods-for-groundwater-augmentation-in-our-homes/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/top-five-rainwater-harvesting-companies-in-india/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/blogs/inrain-construction-receives-igbc-founding-member-certificate/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-delhi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-gurgaon/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-lucknow/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-noida/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-greater-noida/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-meerut/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-agra/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ayodhya/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-mathura/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-aligarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bareilly/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-varanasi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ghaziabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-allahabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-muzaffarnagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-gorakhpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-kanpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-patna/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-gaya/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bathinda/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-batala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ludhiana/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-amritsar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-jalandhar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-patiala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bhopal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-gwalior/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-rewa/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-indore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ratlam/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-jabalpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ujjain/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-jaipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bikaner/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-alwar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-pali/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-kishangarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-kota/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ajmer/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-jodhpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-udaipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bhilwara/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-jaisalmer/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ahmedabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-kochi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-solapur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-coimbatore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-pune/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-surat/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-belagavi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-visakhapatnam/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-vadodara/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bhubaneswar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-hyderabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-guwahati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-chennai/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-warangal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-dharamshala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-chandigarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-raipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-kolkata/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bhagalpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-panaji/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-imphal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-ranchi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-agartala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-faridabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-tirupati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-nagpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-mangaluru/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-bangalore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-vellore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-thane/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-karimnagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-gandhinagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-rajkot/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-amaravati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-srinagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-shimla/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-dehradun/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-jammu-kashmir/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-jhansi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-panipat/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-in-sonipat/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-aligarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-amritsar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-bareilly/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-bikaner/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-faridabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-guwahati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-mathura/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-noida/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-warangal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/griha-and-cgwb-approved-rainwater-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-company-in-delhi-ncr/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/eco-rainwater-harvesting-system-erwhs/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-type-rainwater-harvesting/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/purerain-rainwater-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rain-water-harvesting-system/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/rainwater-harvesting-system-in-india/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-delhi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-gurgaon/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-lucknow/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-noida/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-greater-noida/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-meerut/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-agra/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ayodhya/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-mathura/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-aligarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bareilly/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-varanasi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ghaziabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-allahabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-muzaffarnagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-gorakhpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-kanpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-patna/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-gaya/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bathinda/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-batala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ludhiana/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-amritsar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-jalandhar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-patiala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bhopal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-gwalior/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-rewa/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-indore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ratlam/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-jabalpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ujjain/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-jaipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bikaner/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-alwar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-pali/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-kishangarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-kota/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ajmer/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-jodhpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-udaipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bhilwara/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-jaisalmer/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ahmedabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-kochi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-solapur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-coimbatore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-pune/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-surat/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-belagavi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-visakhapatnam/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-vadodara/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bhubaneswar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-hyderabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-guwahati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-chennai/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-warangal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-dharamshala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-chandigarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-raipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-kolkata/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bhagalpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-panaji/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-imphal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-ranchi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-agartala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-faridabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-tirupati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-nagpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-mangaluru/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-bangalore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-vellore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-thane/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-karimnagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-gandhinagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-rajkot/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-amaravati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-srinagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-shimla/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-dehradun/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-jammu-kashmir/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-jhansi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-panipat/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-sonipat/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/modular-rainwater-harvesting-system-in-india/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-delhi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-gurgaon/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-lucknow/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-noida/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-greater-noida/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-meerut/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-agra/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ayodhya/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-mathura/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-aligarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bareilly/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-varanasi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ghaziabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-allahabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-muzaffarnagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-moradabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-gorakhpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-kanpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-barabanki/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-patna/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-gaya/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-begusarai/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bathinda/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-batala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ludhiana/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-amritsar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-jalandhar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-patiala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bhopal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-gwalior/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-rewa/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-indore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ratlam/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-jabalpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ujjain/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-jaipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bikaner/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-alwar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-pali/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-sri-ganganagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-dholpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-sikar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-kishangarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-kota/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ajmer/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-jodhpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-udaipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bhilwara/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-jaisalmer/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ahmedabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-kochi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-solapur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-coimbatore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-pune/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-surat/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-belagavi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-visakhapatnam/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-vadodara/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bhubaneswar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-kakinada/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-devanagere/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-hyderabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-guwahati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-chennai/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-warangal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-dharamshala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-chandigarh/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-raipur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-kolkata/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bhagalpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-panaji/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-port-blair/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-imphal/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-ranchi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-agartala/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-faridabad/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-tirupati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-nagpur/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-mangaluru/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-bangalore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-vellore/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-thane/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-karimnagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-gandhinagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-rajkot/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-amaravati/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-srinagar/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-shimla/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-dehradun/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-jammu/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-jhansi/",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "/polymer-based-rainwater-harvesting-system-in-india/",
      changefreq: "daily",
      priority: 0.8,
    },
  ];

  const stream = new SitemapStream({
    hostname: "https://www.inrainconstruction.com",
  });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
