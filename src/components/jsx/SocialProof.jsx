import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const SocialProof = () => {
  // init Swiper:

  return (
    <div className="customRadiusR flex-1 flex  justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 showFromTop ">
      <div className="relative text-center">
        <div className="text-xl text-white/40 mb-7 top-20 ">Social</div>

        <div className=" md:justify-center items-center text-slate-100 text-center">
          <div className=" grid relative md:grid-cols-3 ">
            {TagName.reviews.map((r) => {
              return (
                <div className="relative my-6 transition-all duration-500 text-left  ">
                  <div className="grid relative min-w-full md:w-60 lg:w-80 place-items-center  ">
                    <div className="ReviewerPic animate grid absolute h-20 w-20 p-1 rotate-45 overflow-hidden top-[-50px] z-[1] shadow-xl drop-shadow-lg">
                      <img
                        className=" h-fit w-fit rounded-full rotate-[-45deg] "
                        src={r.image}
                        alt="userImage"
                      />
                    </div>
                    <div className=" text-slate-200  w-full h-fit  p-2 sm:text-right md:text-center">
                      <div className="socialCard transition-all duration-500 grid h-fit my-4 relative place-items-center shadow-sm shadow-black/50  rounded-lg hover:bg-black/50 hover:shadow-lg ">
                        <p className="text-md  mt-2 p-4 ">
                          {`"` + r.comment + `"`}
                        </p>
                        <p className="mt-[-10px] p-2 mb-2 text-sm w-fit  font-medium text-slate-300">
                          {r.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
