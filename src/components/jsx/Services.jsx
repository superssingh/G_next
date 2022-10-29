import Link from "next/link";
import { TagName } from "..";
const Services = () => {
  return (
    <div className="bg-black/40 py-4 grid items-center md:justify-center  relative transition-all duration-500 showFromTop ">
      <div className="relative text-center  md:justify-center items-center text-slate-100 my-8">
        <h1 className="text-3xl text-slate-100 font-bold uppercase ">
          Our Services
        </h1>
        <div className="grid w-full relative md:grid-cols-3 gap-0 md:gap-4 mt-4  ">
          {TagName.services.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="grid relative transition-all duration-700 md:place-items-center ">
                  <div className="serviceCard w-full md:w-60 md:h-60 ">
                    <div className="w-full flex place-content-start md:grid  md:place-content-center ">
                      <div className="grid  place-content-center md:place-content-center p-2 pl-4 ">
                        {m.icon}
                      </div>
                      <div className=" place-content-center">
                        <div className="grid md:block relative h-full place-content-center ">
                          <div className="p-2 text-slate-100 text-left text-xl md:text-md uppercase font-semibold md:text-center shadow-none border-0 drop-shadow-none">
                            {m.title}
                          </div>
                          <div className="h-full serviceDesc w-[100%] text-left text-slate-200 text-md px-2 pb-2">
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
