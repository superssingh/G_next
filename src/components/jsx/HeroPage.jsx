import Image from "next/image";
import * as TagName from "../js/constants";
import styles from "../js/styles";
import { coding, heroImg } from "../assets";

const HeroPage = () => {
  return (
    <div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 hover:bg-opacity-50 showFromTop ">
        <div className="relative flex md:justify-center items-center ">
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <span className="p-6 text-white">
              <p className="text-4xl ">Hello there...</p>
              <p className=" text-2xl ">{`{ Best way to learn coding by doing... }`}</p>
            </span>
            <Image
              src={heroImg}
              alt="coding"
              width="300px"
              height="200px"
              className={`absolute rounded-xl z-[2]`}
            />

            {/* <Image
              src={coding}
              width={600}
              height={400}
              className={`absolute rounded-xl z-[2]`}
            /> */}

            {/* <coding /> */}

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white_gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient" />

            {/* gradient end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
