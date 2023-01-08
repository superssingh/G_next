import Image from 'next/legacy/image';
import Link from 'next/link';
import { frontend } from '..';

const HeroPage = () => {
  return (
    <div className="">
      <div className="grid px-8 place-content-center items-center sm:justify-center  relative transition-all duration-500 showFromTop ">
        <div className="grid md:flex text-slate-100 m-2 max-w-6xl">
          <div className="grid md:flex relative ">
            <div className="">
              <div className="grid max-w-5xl justify-center">
                <div className=" text-center md:text-left text-4xl font-semibold ">
                  <h1 className=" py-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl text-center md:text-left">
                    <div className="text-7xl pb-2">{'Hello,'}</div>
                    <span className="">
                      Let's build something amazing by doing.
                    </span>
                  </h1>
                </div>
                <div className="grid place-content-center md:place-content-start py-2">
                  <Link
                    href="/courses"
                    className="z-1"
                  >
                    <div className="w-fit font-bold p-4 text-lg fancyRadius1 text-center randomBG hoverEffect shadow-xl shadow-black rounded-full">
                      <div className=" font-bold p-4 text-lg fancyRadius1 text-center randomBG1 hoverEffect shadow-xl shadow-black rounded-full animate-pulse hover:animate-none">
                        <span>Let's Go</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid place-content-center md:right-0 object-fit overflow-hidden">
              <Image
                src={frontend}
                width={500}
                height={500}
                alt={'HeroImage'}
                layout="intrinsic"
                priority
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
