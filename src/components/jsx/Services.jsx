import Link from "next/link";
import { TagName } from "..";
const Services = () => {
  return (
    <div className="bg-black/30 py-4 grid items-center md:justify-center  relative transition-all duration-500 showFromTop ">
      <div className="relative text-center md:justify-center items-center text-slate-100 my-8">
        <span className="text-xl text-slate-300 font-medium ">
          Our Services
        </span>
        <div className="grid w-full relative md:grid-cols-3 gap-0 md:gap-4 mt-4  ">
          {TagName.services.map((m) => {
            return (
              <Link href={m.path} key={m.title}>
                <div className="grid relative transition-all duration-700 md:place-items-center ">
                  <div className="serviceCard w-full md:w-60 md:h-60 ">
                    <div className="w-full flex place-content-start md:grid  md:place-content-center ">
                      <div className="grid place-content-start md:place-content-center p-4 ">
                        {m.icon}
                      </div>
                      <div className="grid place-content-center">
                        <div className="grid place-content-start md:place-content-center">
                          <div className="py-2 text-slate-100  text-left text-2xl md:text-md  uppercase font-semibold md:text-center shadow-none border-0 drop-shadow-none">
                            {m.title}
                          </div>
                          <div className="serviceDesc w-[100%] text-left text-slate-200 text-md pb-2">
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
