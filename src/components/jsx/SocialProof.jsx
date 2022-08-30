import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SocialProof = () => {
  return (
    <div className="customRadiusR relative animate showFromTop ">
      <div className="relative text-center">
        <div className="text-xl text-white/40 mb-7 top-20 ">Social</div>
        <div className="grid w-full place-content-center">
          <div className="grid relative w-fit sm:grid-cols-2 md:grid-cols-3  place-items-center">
            {TagName.reviews.map((r) => {
              return (
                <div className="grid relative animate md:w-60 h-fit mx-2 ">
                  <div className="grid relative w-80 md:w-60 h-fit place-items-center m-2 ">
                    <div className="ReviewerPic animate grid absolute h-20 w-20 p-1 rotate-45 overflow-hidden top-[0px] z-[1] shadow-xl drop-shadow-lg">
                      <div>
                        <img
                          className=" h-fit w-fit rounded-full rotate-[-45deg] "
                          src={r.image}
                          alt="userImage"
                        />
                      </div>
                    </div>
                    <div className="   w-full h-full  sm:text-right md:text-center place-self-center">
                      <div className="socialCard animate grid h-fit mt-20 py-4 place-items-center ">
                        <p className=" text-sm w-fit  font-medium text-white/70">
                          {r.name}
                        </p>
                        <p className="text-sm text-white/90 font-normal px-4 mt-4 line-clamp-8 text-left ">
                          {`"` + r.comment + `"`}
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
