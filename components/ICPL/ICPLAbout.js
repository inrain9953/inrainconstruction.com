import React from 'react'
import BottomImg from '../../public/bottom_about.jpg'
import CountUp from 'react-countup'
import abt from '../../public/abt.jpg'
import renewable from '../../public/renewable-energy.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Service11img from '../../public/service11.jpg'
import Image from 'next/image'

const ICPLAbout = () => {
  return (
    <>
      <div>
        <div className='m-5 md:m-10 md:grid md:grid-cols-2 md:gap-14 md:items-center '>
          <div id='icplAbout' className='md:ml-10'>
            <Image
              className='w-full rounded-xl'
              src={abt}
              alt='img'
              loading='eager'
              priority={true}
              unoptimized={true}
            />
          </div>
          <div className='mt-5 text-left md:mr-10'>
            <h2 className='text-2xl md:text-4xl font-semibold md:mb-10'>
              Who We Are
            </h2>
            <h2 className='text-2xl font-bold mt-5 md:text-3xl'>ICPL</h2>
            <p className='text-[17px] text-justify md:text-lg mt-2 md:pr-10'>
              We are subsidiary company of “Singh & Singh Construction” a firm
              with a strong presence in India with more than 30+ years of
              experience in civil construction industry. Have completed numerous
              Projects for Bridges Construction under PWD/RWD, Irrigation &
              Flood Control Department, Bihar Rajya Pool Nirman Nigam Etc. &
              Constructed Roads Under Pradhan Mantri Gramin Sadark Yojana, and
              continued to undertake construction projects for more than 30
              years.
            </p>
          </div>
        </div>

        <div className='mt-10 md:mt-16 '>
          <div className='text-center mb-5'>
            <h2 className='text-2xl font-semibold md:text-3xl md:font-bold'>
              About ICPL
            </h2>
          </div>

          <div className='m-5 md:m-10'>
            <Image
              className='w-full rounded-xl'
              src={Service11img}
              alt='img'
              loading='eager'
              priority={true}
              unoptimized={true}
            />
          </div>

          <div className='text-center m-5 shadow-2xl p-5 rounded-lg md:mt-7 md:w-[75%] md:m-auto bg-yellow-50'>
            <h1 className='text-2xl font-semibold m-3 md:text-3xl md:font-bold md:mt-5 md:mb-3'>
              InRain<sup>®</sup> Construction Pvt. Ltd.(ICPL)
            </h1>
            <p className='text-[17px] text-justify md:text-lg'>
              Rainwater Harvesting Company with a strongpresence in All Over
              India .The company has successfully Installed morethan 4000 Rain
              Water Harvesting Projects enabling in conserving billion of
              gallons of water from of getting it waste. We are privileged to
              introduce the next level and Scientific Rain water harvesting’
              technology with more than 50 Ton/SQM Load bearing Structure 1st
              time in the world. We are Proud partner of Make in India Movement
              having our own Make and manufacturing.
            </p>
          </div>
        </div>

        <div className='m-5 md:flex md:justify-center md:items-center md:gap-10 md:m-10'>
          <div className='text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2'>
            <Image
              className='h-8'
              src={renewable}
              alt='img'
              loading='eager'
              priority={true}
              unoptimized={true}
            />
            <p className='text-lg font-semibold text-white'>Clean Energy</p>
          </div>

          <div className='text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2'>
            <Image
              className='h-8'
              src={renewable}
              alt='img'
              loading='eager'
              priority={true}
              unoptimized={true}
            />
            <p className='text-lg font-semibold text-white'>
              Project Assistance
            </p>
          </div>

          <div className='text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2'>
            <Image
              className='h-8'
              src={renewable}
              alt='img'
              loading='eager'
              priority={true}
              unoptimized={true}
            />
            <p className='text-lg font-semibold text-white'>Action Research</p>
          </div>

          <div className='text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2'>
            <Image
              className='h-8'
              src={renewable}
              alt='img'
              loading='eager'
              priority={true}
              unoptimized={true}
            />
            <p className='text-lg font-semibold text-white'>
              Long-term Planning
            </p>
          </div>
        </div>

        <div className='pt-5'>
          <div className='m-5 pb-5 md:flex md:justify-center md:items-center'>
            <div className='border-l-2 border-black md:mr-5 md:border-l-0 md:w-[30%]'>
              <div className='text-left mt-5 mb-5 md:text-right'>
                <h3 className='font-semibold md:font-bold text-base ml-5 text-blue-500'>
                  VISION FOR THE FUTURE
                </h3>
              </div>

              <div>
                <div className='text-left md:text-right'>
                  <h2 className='text-3xl font-bold ml-5'>
                    About Our Technology
                  </h2>
                  <p className='text-[17px] mt-2 ml-5'>
                    At{' '}
                    <bold className='text-green-700'>
                      InRain<sup>®</sup>
                    </bold>{' '}
                    are engaged in making RWH System based on the technology
                    adopted from Germany.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-5 md:w-[30%] md:border-l-2 md:border-black'>
              <p className='text-[17px] text-justify mt-2 md:ml-5'>
                It is indeed entirely different from conventional rain water
                systems were made using cement and brick walls. A few benefits
                of our scientific RWH system are highlighted as follows.
              </p>
            </div>
          </div>

          <div className='m-5 md:flex md:justify-center md:gap-10'>
            <p className='text-[17px] text-justify mt-3 md:w-[25%] md:shadow-lg p-5 rounded-lg bg-yellow-50'>
              Monolithic Structures are quick to Install and the same turns into
              a Rain Water Holding Tank below the Ground within no time as
              compared to making Civil Pit. Modular Tank can be used for Holding
              / reusing the rain water, recharging the Water Table and
              Percolation.
            </p>
            <p className='text-[17px] text-justify mt-3 md:w-[25%] md:shadow-lg p-5 rounded-lg bg-yellow-50'>
              Using ‘InRain™’ filtration system, developed ‘in house’ by ICPL
              R&D team, clean rain water is trapped in the tank thereby saving
              on maintenance part tremendously as it is very easy & handy with
              negligible maintenance cost as compared to conventional systems.
              Precious land over the modular tank is not wasted, since it is a
              load bearing structure and can bear tons of loads thereby making
              the whole system truly economical as compared with the case of
              having civil pit.
            </p>
            <p className='text-[17px] text-justify mt-3 md:w-[25%] md:shadow-lg p-5 rounded-lg bg-yellow-50'>
              95% of the capacity of tank is usable as compared to only 50-55%
              usability in case of civil pit. No Risk of accidents as no one can
              fall into this kind of tank whereas having a RCC Civil tank is
              highly accident prone. Easy removable and transportable to any
              other location which is not possible in case of civil pit. Holding
              / Recharge Capacity begins from 1 Cubic Meter to any imaginable
              Size within significantly lesser time.
            </p>
          </div>
        </div>

        <div>
          <div className='text-center m-10'>
            <h3 className='text-lg font-bold text-blue-700'>OUR RESEARCH</h3>
            <h2 className='text-3xl font-bold mt-3 mb-5'>How We Work</h2>
          </div>

          <div className='md:grid md:grid-cols-3'>
            <div className='m-5 shadow-2xl rounded-md'>
              <div className='bg-sky-600 text-white rounded-md p-3 text-center'>
                <h2 className='text-base font-bold'>STRATEGY</h2>
              </div>
              <div className='text-left p-5 flex flex-col gap-4'>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Concur on the Project Value and plan the Project Controls to
                    be connected.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Recognize important partners.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Survey venture hazard and vulnerability.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Set up a venture control execution plan.
                  </p>
                </div>
              </div>
            </div>

            <div className='m-5 shadow-2xl rounded-md'>
              <div className='bg-sky-600 text-white rounded-md p-3 text-center'>
                <h2 className='text-base font-bold'>TARGET & ASSURANCE</h2>
              </div>
              <div className='text-left p-5 flex flex-col gap-4'>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Complete expense and calendar gauge surveys.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Review of undertaking control abilities versus control
                    execution plan.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Issue a hole examination dependent on the review.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Refresh the undertaking control execution plan.
                  </p>
                </div>
              </div>
            </div>

            <div className='m-5 shadow-2xl rounded-md'>
              <div className='bg-sky-600 text-white rounded-md p-3 text-center'>
                <h2 className='text-base font-bold'>CONTROL</h2>
              </div>
              <div className='text-left p-5 flex flex-col gap-4'>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px]text-justify'>
                    Roll out the project execution plan.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Prepare an integrated baseline schedule and budget.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Mobilize site based resources.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <ArrowRightAltIcon />
                  <p className='text-[16px] text-justify'>
                    Monitor, control and report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='m-5 md:flex md:justify-center md:items-center md:gap-10'>
            <div className='pt-10 md:w-[30%]'>
              <Image
                className='w-full rounded-lg'
                src={BottomImg}
                alt='img'
                loading='eager'
                priority={true}
                unoptimized={true}
              />
            </div>
            <div className='text-left mt-5 md:w-[30%]'>
              <h2 className='text-3xl font-bold'>
                Installation & Project Development
              </h2>
              <p className='text-[17px] text-justify mt-3'>
                Our team has done more than 4000+ Rainwater Harvesting Projects
                in accross the India.Technology we are using has globally been
                adopted in advanced country like Germany, Japan, Singapore, USA
                and Australia.
              </p>
              <div className='text-center mt-3'>
                <div className='text-6xl font-semibold'>
                  <CountUp
                    duration={5}
                    className=''
                    end={4000}
                    enableScrollSpy={true}
                    scrollSpyDelay={50}
                  />
                  <span>+</span>
                  <br></br>
                </div>
                <span className='text-2xl font-semibold m-3'>
                  Projects Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ICPLAbout
