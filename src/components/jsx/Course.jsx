import Link from "next/link";
import { TagName } from "..";
const Course = () => {
  return (
    <div className=" grid p-4 sm:justify-center items-center md:my-4 relative transition-all duration-500 showFromTop ">
      <div className="relative text-center md:justify-center items-center text-slate-100 ">
        <span className="text-lg text-slate-100 font-medium font-sans ">
          Our Courses
        </span>

        <div className="grid relative sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
          {TagName.courses.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="  grid relative w-full transition-all duration-700 text-left sm:place-items-center">
                  <div className=" courseCard w-full h-fit sm:w-60 sm:h-52 ">
                    <div className="flex relative w-full place-content-start sm:grid sm:w-60 sm:place-content-center ">
                      <div className="grid place-self-center place-content-center text-center place-items-center px-4 pb-2  ">
                        {m.icon}
                      </div>
                      <div className="grid place-content-center">
                        <div className=" px-2 text-slate-300  text-left text-md uppercase font-semibold sm:text-center shadow-none border-0 drop-shadow-none">
                          {m.title}
                        </div>
                        <div className="serviceDesc text-slate-300 sm:text-slate-200  text-sm px-2 ">
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

export default Course;
