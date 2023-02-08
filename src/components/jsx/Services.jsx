import Link from "next/link";
import { TagName } from "..";
const Services = () => {
  return (
    <div className="  py-5 grid items-center md:justify-center  relative transition-all duration-500 showFromTop ">
      <div className="relative text-center  md:justify-center items-center text-slate-100 my-8">
        <h1 className="text-3xl text-slate-400 font-bold uppercase ">
          Our Services
        </h1>
        <div className="serviceList grid w-full relative md:grid-cols-3 gap-0 md:gap-0 mt-4">
          {TagName.services.map((m) => {
            return (
              <Link
                href={m.path}
                key={m.title}
                legacyBehavior
              >
                <div className=" relative grid pl-2 transition-all duration-700 md:m-2 md:place-items-center ">
                  <div className="serviceCard z-2 w-full transition duration-700 md:h-60 md:w-60 md:rounded-md lg:h-60 lg:w-80 ">
                    <div className="grid w-full place-content-center md:grid ">
                      <div className="service randomBG1 fancyRadius grid h-fit w-fit place-content-center place-self-center p-6 shadow-black md:p-8 md:hover:animate-pulse">
                        <div className="relative grid h-8 w-full place-content-center place-self-center p-4 md:p-8">
                          {m.icon}
                        </div>
                        <span className="grid place-self-center pt-4 text-center text-base font-bold md:text-xl md:font-semibold">
                          {m.title}
                        </span>
                      </div>
                      <div className="grid  place-content-center ">
                        <div className="grid w-fit lg:mx-2 lg:w-fit ">
                          <div className="serviceDesc w-fit rounded-md bg-gray-900/50 p-4 text-left text-sm text-slate-200 md:text-base lg:rounded-lg">
                            {m.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
