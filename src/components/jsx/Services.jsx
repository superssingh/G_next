import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import Link from "next/link";

const Services = () => {
  return (
    <div className=" flex-1 flex bg-black/50  justify-center items-center md:my-0 my-10 relative transition-all duration-500 py-6 showFromTop ">
      <div className="relative text-center md:justify-center items-center text-slate-100">
        <span className="text-lg text-white/30 ">Courses</span>
        <div className="grid relative md:grid-cols-3">
          {TagName.services.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="grid relative m-2 p-2 transition-all duration-500 text-left ">
                  <div className="serviceCard text-slate-200  w-full h-fit md:w-52 md:h-52 p-4 transition-all duration-500 border-2 border-violet-500/30 hover:bg-violet-500/50">
                    <p className="text-md mt-2 uppercase font-semibold ">
                      {m.title}
                    </p>
                    <p className="text-sm mt-2 font-medium ">{m.description}</p>
                  </div>
                  <div className="absolute left-0 top-0">
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
