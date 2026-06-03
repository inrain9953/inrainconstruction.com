import React from 'react'
import logo from '../../public/without-bg-logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { MailOutline } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from 'next/link'
import Image from 'next/image'
import { clientSlider1, clientSlider2 } from '../constant'
import Marquee from 'react-fast-marquee'

export const Footer = () => {
  return (
    <>
      <div className=''>
        <div className='mt-10'>
          <p className='text-center font-bold text-2xl md:text-4xl'>
            Our Happy Clients
          </p>
          <div className='flex flex-col gap-3 mt-5 mb-8'>
            <div className='w-full flex'>
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction='left'
                className='md:h-[230px] h-[200px]'
              >
                {clientSlider1.map((item, i) => (
                  <div
                    key={i}
                    className='m-3 shadow-xl rounded-2xl md:h-[160px] h-[110px]'
                  >
                    <Image
                      src={item.img}
                      width={200}
                      height={200}
                      alt={item.name}
                      className='rounded-2xl border h-[100%] w-[100%]'
                    />
                    <p className='flex items-center justify-center text-center text-[15px] font-semibold mt-3'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className='w-full flex'>
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction='right'
                className='md:h-[230px] h-[200px]'
              >
                {clientSlider2.map((item, i) => (
                  <div
                    key={i}
                    className='m-3 shadow-xl rounded-2xl md:h-[160px] h-[110px]'
                  >
                    <Image
                      src={item.img}
                      width={200}
                      height={200}
                      alt={item.name}
                      className='rounded-2xl border h-[100%] w-[100%]'
                    />
                    <p className='flex items-center justify-center text-center text-[15px] mt-3 font-semibold'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          width='100%'
          height='450'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          id='gmap_canvas'
          src='https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=InRain%20Construction%20Private%20Limited%20-%20Rainwater%20Harvesting%20System%20&amp;%20Modular%20Rainwater%20Harvesting%20System%20in%20Delhi%20New%20Delhi+(InRain%20Construction%20Pvt.%20Ltd.)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        />
      </div>

      <footer className='bg-gradient-to-br from-slate-900 via-green-900 to-slate-950 text-white'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* Company Info */}
            <div>
              <Link href='/'>
                <Image
                  src='/without-bg-logo.png'
                  alt='InRain Construction'
                  width={120}
                  height={120}
                  className='mb-6'
                />
              </Link>

              {/* Social Icons */}
              <div className='flex gap-3 mb-8'>
                <a
                  target='_blank'
                  href='https://www.facebook.com/inrainconstructionofficial'
                  className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300'
                >
                  <FacebookIcon />
                </a>

                <a
                  target='_blank'
                  href='https://www.instagram.com/inrainconstruction/'
                  className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all duration-300'
                >
                  <InstagramIcon />
                </a>

                <a
                  target='_blank'
                  href='https://x.com/InrainC'
                  className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300'
                >
                  <XIcon />
                </a>

                <a
                  target='_blank'
                  href='https://www.linkedin.com/company/35590476/admin/dashboard/'
                  className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-700 transition-all duration-300'
                >
                  <LinkedInIcon />
                </a>

                <a
                  target='_blank'
                  href='https://youtube.com/@inrainharvesting?si=Fxx_8_rhzHt2ZBLF'
                  className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all duration-300'
                >
                  <YouTubeIcon />
                </a>
              </div>

              <div className='space-y-3'>
                <a
                  href='/modular-rainwater-harvesting-system-in-india'
                  className='block text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  Modular Rainwater Harvesting System in India
                </a>

                <a
                  href='/rainwater-harvesting-system-in-india'
                  className='block text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  Rainwater Harvesting System in India
                </a>

                <a
                  href='/polymer-based-rainwater-harvesting-system-in-india'
                  className='block text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  Polymer based Rainwater Harvesting System in India
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-2xl font-bold mb-6'>Quick Links</h3>

              <ul className='space-y-3'>
                {[
                  { title: 'Home', href: '/' },
                  { title: 'About Us', href: '/about-us' },
                  { title: 'Products', href: '/products' },
                  { title: 'Solutions', href: '/solutions' },
                  { title: 'Contact Us', href: '/contact-us' },
                  { title: 'Blogs', href: '/blogs' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className='flex items-center gap-2 text-gray-300 hover:text-sky-400 transition'
                    >
                      <ArrowRightAltIcon fontSize='small' />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className='text-2xl font-bold mb-6'>Our Products</h3>

              <div className='space-y-3'>
                <Link
                  href='/rainwater-harvesting-system'
                  className='flex items-start gap-2 text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  <ArrowRightAltIcon fontSize='small' />
                  Rainwater Harvesting System
                </Link>

                <Link
                  href='/government-approved-rainwater-harvesting'
                  className='flex items-start gap-2 text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  <ArrowRightAltIcon fontSize='small' />
                  Government Approved RWH
                </Link>

                <Link
                  href='/modular-rainwater-harvesting'
                  className='flex items-start gap-2 text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  <ArrowRightAltIcon fontSize='small' />
                  Modular Rainwater Harvesting System
                </Link>

                <Link
                  href='/roof-top-rainwater-harvesting-system-(RRWHS)-InRain'
                  className='flex items-start gap-2 text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  <ArrowRightAltIcon fontSize='small' />
                  Rooftop Rainwater Harvesting System
                </Link>

                <Link
                  href='/co-polymer-based-rainwater-harvesting-system'
                  className='flex items-start gap-2 text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  <ArrowRightAltIcon fontSize='small' />
                  Polymer Based Rainwater Harvesting System
                </Link>

                <Link
                  href='/storm-water-recharge-and-management'
                  className='flex items-start gap-2 text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  <ArrowRightAltIcon fontSize='small' />
                  Storm Water Management Company
                </Link>

                <Link
                  href='/rainwater-harvesting-for-industries'
                  className='flex items-start gap-2 text-sm text-gray-300 hover:text-sky-400 transition'
                >
                  <ArrowRightAltIcon fontSize='small' />
                  Rainwater Harvesting for Industries
                </Link>
              </div>
            </div>

            {/* Office */}
            <div>
              <h3 className='text-2xl font-bold mb-6'>Our Office</h3>

              <div className='space-y-5'>
                <div className='flex gap-3'>
                  <LocationOnIcon className='text-sky-400 mt-1' />
                  <a
                    href='https://maps.app.goo.gl/QSZoYkgd8GufagvC6'
                    target='_blank'
                    className='text-gray-300 hover:text-sky-400 transition'
                  >
                    Plot No 06, KH431, 1st floor, Main Road Chattarpur-Satbari,
                    Satbari, New delhi 110074
                  </a>
                </div>

                <a
                  href='mailto:sales@inrainwaterharvesting.com'
                  className='flex items-center gap-3 text-gray-300 hover:text-sky-400 transition'
                >
                  <MailOutline />
                  sales@inrainwaterharvesting.com
                </a>

                <div className='space-y-2'>
                  <a
                    href='tel:+919910220794'
                    className='flex items-center gap-3 text-gray-300 hover:text-sky-400 transition'
                  >
                    <CallIcon fontSize='small' />
                    +91-9910220794
                  </a>

                  <a
                    href='tel:01135823511'
                    className='flex items-center gap-3 text-gray-300 hover:text-sky-400 transition'
                  >
                    <CallIcon fontSize='small' />
                    011-35823511
                  </a>

                  <a
                    href='tel:+919953070003'
                    className='flex items-center gap-3 text-gray-300 hover:text-sky-400 transition'
                  >
                    <CallIcon fontSize='small' />
                    +91-9953070003
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10 bg-black/20'>
          <div className='max-w-7xl mx-auto px-6 py-5 text-center'>
            <p className='text-sm text-gray-300'>
              © 2026 InRain Construction Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
