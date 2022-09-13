import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import Link from "next/link";

const Services = () => {
  return (
    <div className=" flex-1 flex bg-black/50  justify-center items-center md:my-0 my-10 relative transition-all duration-500 py-6 showFromTop ">
      <div className="relative text-center md:justify-center items-center text-slate-100 m-2">
        <span className="text-lg text-white/30 ">Courses</span>
        <div className="grid relative sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {TagName.services.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="grid relative m-2  transition-all duration-500 text-left ">
                  <div className="serviceCard  text-slate-200  w-full h-fit sm:w-52 sm:h-52 p-5  border-2 border-teal-500 bg-teal-600">
                    <p className="text-md mb-2 uppercase font-semibold font ">
                      {m.title}
                    </p>
                    <p className="text-sm mt-2 font-medium ">{m.description}</p>
                  </div>
                  <div className="absolute left-[-10px] top-[-10px]">
                    <SchoolSharpIcon className="iconColor" />
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
