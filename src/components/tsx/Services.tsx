import Link from 'next/link'
import { TagName } from '..'

const Services = () => {
  return (
    <>
      <div className=" py-5 grid items-center md:justify-center  relative transition-all duration-500 showFromTop ">
        <div className="relative text-center  md:justify-center items-center text-slate-100 my-8">
          <div className="text-xl text-slate-300 font-bold uppercase ">
            Our Services
          </div>
          <div className="serviceList grid w-full relative md:grid-cols-3 gap-0 md:gap-0 mt-4">
            {TagName.services.map(({ path, title, icon, description }) => {
              return (
                <Link
                  href={path}
                  key={title}
                  passHref
                  legacyBehavior
                >
                  <div className="relative grid pl-2 transition-all duration-700 md:m-2 md:place-items-center">
                    <div className="serviceCard z-2  w-full transition duration-700 md:h-60 md:w-60 md:rounded-md lg:h-60 lg:w-80 ">
                      <div className="grid w-full place-content-center ">
                        <div className="service bgGreen fancyRadius grid h-fit w-fit place-content-center place-self-center p-6 md:p-8 md:hover:animate-pulse">
                          <div className="relative grid h-8 w-full place-content-center place-self-center p-6 md:p-8">
                            {icon}
                          </div>
                          <span className="grid place-self-center pt-4 text-center text-lg font-bold md:text-xl md:font-semibold">
                            {title}
                          </span>
                        </div>
                        <div className="grid place-content-center ">
                          <div className="grid lg:mx-2  ">
                            <div className="serviceDesc w-fit rounded-md bg-green-700/70 p-4 text-left text-sm text-slate-200 md:text-base lg:rounded-lg">
                              {description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
