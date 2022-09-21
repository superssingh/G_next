import Image from "next/image";
import { coding, heroImg } from "../assets";

const HeroPage = () => {
  return (
    <div>
      <div className="bg-green-200 grid p-4 items-center sm:justify-center md:my-4  relative transition-all duration-500 showFromTop ">
        <div className="grid md:flex md:justify-center items-center text-slate-100">
          <div className="grid md:flex place-content-center text-center ">
            <span className="">
              <p className=" text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-200 to-orange-300">
                👋 Hello
              </p>
              <p className="mt-4 text-3xl pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-200 to-violet-500">{`{ Learn by doing. }`}</p>
              <div className="w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-100 to-pink-300 text-xl text-center md:text-left  rounded-lg p-4  ">
                Trying to learn something by doing is the best approach that
                gives you hands-on experience in development.
              </div>
            </span>
            <div className="w-full sm-60 md:64">
              <Image
                src={coding}
                width={300}
                height={250}
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
