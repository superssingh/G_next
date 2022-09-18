import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import Link from "next/link";

const Services = () => {
  return (
    <div className="grid  justify-center items-center md:my-0 my-10 relative transition-all duration-500 py-6 showFromTop ">
      <div className="relative text-center md:justify-center items-center text-slate-100 m-2">
        <span className="text-lg text-white/30 ">Courses</span>
        <div className="grid relative sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
          {TagName.services.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="grid relative w-full transition-all duration-700 text-left sm:place-items-center">
                  <div className=" serviceCard w-full h-fit sm:w-60 sm:h-52 ">
                    <div className="flex relative w-full place-content-start  sm:grid sm:w-60 sm:place-content-center ">
                      <div className="grid place-self-center place-content-center text-center place-items-center p-2  ">
                        {m.icon}
                      </div>
                      <div className="w-full">
                        <div className=" px-4 pb-2 text-slate-100  text-left text-md uppercase font-semibold sm:text-center shadow-none border-0 drop-shadow-none">
                          {m.title}
                        </div>
                        <div className="serviceDesc text-slate-200 text-sm  px-4 pb-4 ">
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
