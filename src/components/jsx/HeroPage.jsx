import Image from "next/image";
import Link from "next/link";
import { frontend } from "..";

const HeroPage = () => {
  return (
    <div className="">
      <div className=" grid px-8 place-content-center items-center sm:justify-center  relative transition-all duration-500 showFromTop ">
        <div className="grid md:flex text-slate-100 m-2 max-w-6xl">
          <div className="grid md:flex relative ">
            <div className="">
              <div className="grid max-w-5xl justify-center">
                <div className=" text-center md:text-left text-4xl font-semibold ">
                  <h1 className=" py-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl text-center md:text-left">
                    <div className="text-7xl pb-2">{"Hello,"}</div>
                    <span className="">
                      Let's build something amazing by doing.
                    </span>
                  </h1>
                </div>
                <div className="grid place-content-center md:place-content-start py-2">
                  <Link
                    href="/courses"
                    id="getStarted"
                    className="w-32 font-bold p-4 text-lg "
                  >
                    Let's Go
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid w-wrap place-content-center md:right-0">
              <Image
                src={frontend}
                width={500}
                height={500}
                className="relative rounded-xl z-[2] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
