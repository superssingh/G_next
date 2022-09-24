import Image from "next/Image";
import Link from "next/Link";
import { coding, frontend } from "../assets";

const HeroPage = () => {
  return (
    <div className="">
      <div className=" bg-black/50 grid p-4 place-content-center items-center sm:justify-center   relative transition-all duration-500 showFromTop ">
        <div className="grid md:flex text-slate-100 m-2 max-w-6xl">
          <div className="grid md:flex  ">
            <div className="">
              <div className="grid max-w-5xl justify-center">
                <div className=" text-center md:text-left text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-red-200 to-orange-300">
                  <h1 className=" py-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl text-center md:text-left">
                    <div className="text-7xl">Hello,</div>
                    <span className="">
                      Let's build something amazing by doing.
                    </span>
                  </h1>
                </div>
                <div className="grid place-content-center md:place-content-start py-2">
                  <Link href="/courses">
                    <span id="LeafButton" className="w-fit font-bold  p-4 ">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid w-wrap place-content-center md:right-0">
              <Image
                src={frontend}
                width={500}
                height={500}
                className={`absolute rounded-xl z-[2] `}
              />
            </div>

            {/* <coding /> */}

            {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white_gradient  bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient" /> */}

            {/* gradient end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
