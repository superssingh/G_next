import Link from "next/link";
import { TagName } from "..";
const Services = () => {
  return (
    <div className="bgBlack py-4 grid items-center md:justify-center  relative transition-all duration-500 showFromTop ">
      <div className="relative text-center  md:justify-center items-center text-slate-100 my-8">
        <h1 className="text-3xl text-slate-100 font-bold uppercase ">
          Our Services
        </h1>
        <div className="serviceList grid w-full relative md:grid-cols-3 gap-0 md:gap-0 mt-4">
          {TagName.services.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="grid relative transition-all duration-700 md:place-items-center md:m-2">
                  <div className="serviceCard w-full md:w-60 md:h-60 lg:w-80 lg:h-60 md:rounded-md ">
                    <div className="w-full flex place-content-start md:grid  md:place-content-center ">
                      <div className="grid relative place-content-center md:place-content-center px-4 py-2">
                        {m.icon}
                      </div>
                      <div className=" place-content-center">
                        <div className="relative h-full  place-content-center ">
                          <div className=" p-2 text-slate-100 text-left text-xl md:text-md lg:text-3xl uppercase font-bold md:text-center shadow-none border-0 drop-shadow-none">
                            {m.title}
                          </div>
                          <div className=" lg:mx-4 lg:w-fit">
                            <div className="w-full serviceDesc text-left lg:text-center text-slate-200 text-md px-2 lg:rounded-md">
                              {m.description}
                            </div>
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
  )
};

export default Services;
