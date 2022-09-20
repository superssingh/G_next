import Image from "next/image";
import * as TagName from "../js/constants";
import styles from "../js/styles";
import { coding, heroImg } from "../assets";

const HeroPage = () => {
  return (
    <div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 hover:bg-opacity-50 showFromTop ">
        <div className="relative flex md:justify-center items-center text-slate-100">
          <div className={` md:flex text-center md:my-0 my-10 relative`}>
            <span className="p-6 ">
              <p className=" text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-200 to-orange-300">
                👋 Hello their
              </p>
              <p className="mt-4 text-3xl pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-200 to-violet-500">{`{ Learn by doing. }`}</p>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-100 to-pink-300 text-xl text-center md:text-left w-96 rounded-lg p-4  ">
                Trying to learn something by doing is the best approach that
                gives you hands-on experience in development.
              </div>
            </span>

            <Image
              src={coding}
              width={400}
              height={300}
              className={`absolute rounded-xl z-[2] `}
            />

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
