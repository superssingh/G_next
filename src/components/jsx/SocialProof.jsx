import * as TagName from "../js/constants";
import Image from "next/image";
const SocialProof = () => {
  return (
    <div className="grid justify-center relative animate showFromTop ">
      <div className="grid relative text-center m-2 px-2">
        <div className="text-xl text-white/30 mb-6 top-10 ">Social</div>
        <div className="grid relative w-full sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center place-content-center">
          {TagName.reviews.map((r) => {
            return (
              <div className="grid relative animate sm:w-64 md:w-60 lg:w-80 h-fit my-2">
                <div className="ReviewerPic animate grid absolute h-16 w-16 p-1 left-0 top-[-14px] rotate-45 rounded-full overflow-hidden z-[1]">
                  <div>
                    <Image
                      className=" h-wrap w-wrap rounded-full rotate-[-45deg] "
                      src={r.image}
                      width="100%"
                      height="100%"
                      alt="ReviewerImage"
                    />
                  </div>
                </div>
                <div className="socialCard animate grid relative h-fit py-3 place-items-start bg-slate-300 ">
                  <div className="w-full pl-20  ">
                    <p className=" text-md w-fit font-bold text-slate-500 uppercase ">
                      {r.name}
                    </p>
                    <p className=" text-sm w-fit font-medium text-slate-600 ">
                      {r.job}
                    </p>
                  </div>

                  <p className="text-sm text-slate-800 p-4 text-left ">
                    {r.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
