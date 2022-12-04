import Link from "next/link";
import { TagName } from "..";
const Course = () => {
  return (
    <div className=" grid p-4 sm:justify-center items-center md:my-4 relative transition-all duration-500 showFromTop ">
      <div className="relative text-center md:justify-center items-center  ">
        <h1 className="text-3xl font-bold uppercase ">Courses</h1>

        <div className="grid relative md:grid-cols-3 gap-4 mt-4 ">
          {TagName.courses.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="relative w-full transition-all duration-700 text-left sm:place-items-center ">
                  <div className="courseCard w-full h-fit md:w-fit md:h-52 ">
                    <div className="flex relative w-full h-full place-content-start md:grid md:w-60 md:place-content-center ">
                      <div className=" grid place-self-center place-content-center text-center place-items-center px-4 p-2 ">
                        {m.icon}
                      </div>
                      <div className="grid md:block relative h-full place-content-center ">
                        <div className=" px-2 text-slate-100  text-left text-md uppercase font-semibold md:text-center shadow-none border-0 drop-shadow-none">
                          {m.title}
                        </div>
                        <div className="courseDesc  w-full h-full text-slate-300 sm:text-slate-100 text-sm px-2 ">
                          {m.description}
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
  )
}

export default Course;
