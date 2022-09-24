import Link from "next/link";
import { TagName } from "..";
const Services = () => {
  return (
    <div className=" grid items-center sm:justify-center md:py-4  relative transition-all duration-500 showFromTop ">
      <div className="relative text-center md:justify-center items-center text-slate-100 ">
        <span className="text-xl text-slate-300 font-sans font-medium ">
          Our Services
        </span>
        <div className="grid w-full relative sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4  ">
          {TagName.services.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="  grid relative transition-all duration-700 sm:place-items-center ">
                  <div className="serviceCard w-76  sm:w-60 sm:h-52  ">
                    <div className="w-full flex place-content-start sm:grid sm:w-60 sm:place-content-center ">
                      <div className="grid place-content-center px-4">
                        {m.icon}
                      </div>
                      <div className="grid place-content-center ">
                        <div className="py-2 text-slate-100  text-left text-md font-sans uppercase font-semibold sm:text-center shadow-none border-0 drop-shadow-none">
                          {m.title}
                        </div>
                        <div className="serviceDesc w-[100%] text-left text-slate-200 text-sm ">
                          {m.description}
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
