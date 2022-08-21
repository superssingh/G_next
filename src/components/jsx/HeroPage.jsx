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
              <p className="text-4xl ">Hello</p>
              <p className=" text-3xl pb-2 ">{`{ Learn coding by doing. }`}</p>
            </span>

            <Image
              src={coding}
              width={400}
              height={300}
              className={`absolute rounded-xl z-[2] `}
            />

            {/* <coding /> */}

            {/* gradient start */}
            {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white_gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient" /> */}

            {/* gradient end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
