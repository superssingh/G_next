import Link from "next/link";
import { TagName } from '..'
const Course = () => {
  return (
    <div className=" grid p-4 sm:justify-center items-center md:my-4 relative transition-all duration-500 showFromTop ">
      <div className="relative text-center md:justify-center items-center  ">
        <h1 className="text-3xl font-bold uppercase ">Courses</h1>
        <div className="grid relative md:grid-cols-3 gap-4 mt-4 ">
          {TagName.courses.map((m: any) => {
            return (
              <Link
                href={m.path}
                key={m.title}
                passHref
                legacyBehavior
              >
                <div className="relative w-full transition-all duration-700 text-left sm:place-items-center">
                  <div className="courseCard w-full h-fit md:w-fit md:h-52 rounded-lg bg-black/20 ">
                    <div className="flex relative w-full h-full place-content-start md:grid md:w-60 md:place-content-center">
                      <div className="grid place-self-center place-content-center text-center place-items-center px-4 py-2 md:p-2 ">
                        {m.icon}
                      </div>
                      <div className="grid md:block relative h-full place-content-center ">
                        <div className="text-slate-100 text-left text-base uppercase font-semibold md:text-center border-0">
                          {m.title}
                        </div>
                        <div className="courseDesc bg-blue-200/80 w-full h-full text-slate-600 text-sm p-4 ">
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
