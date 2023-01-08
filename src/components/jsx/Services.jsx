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
                <div className=" grid relative transition-all duration-700 md:place-items-center md:m-2  ">
                  <div className="serviceCard z-2 w-full md:w-60 md:h-60 lg:w-80 lg:h-60 md:rounded-md transition duration-700 ">
                    <div className="w-full flex place-content-start md:grid md:place-content-center ">
                      <div className="service grid w-fit place-content-center place-self-center randomBG fancyRadius p-6 md:p-8 shadow-black md:hover:animate-pulse">
                        <div className="grid w-full h-10 relative place-content-center md:place-content-center p-2 md:p-4">
                          {m.icon}
                        </div>
                        <span className=" text-center text-base md:text-xl pt-4 md:font-semibold">
                          {m.title}
                        </span>
                      </div>
                      <div className="grid  place-content-center ">
                        <div className="grid w-fit lg:mx-2 lg:w-fit">
                          <div className="w-fit serviceDesc text-left text-slate-200 text-sm md:text-base p-4 rounded-md lg:rounded-lg">
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
