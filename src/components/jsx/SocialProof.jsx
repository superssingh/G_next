import * as TagName from "../js/constants";

const SocialProof = () => {
  return (
    <div className="customRadiusR relative animate showFromTop ">
      <div className="relative text-center">
        <div className="text-xl text-white/40 mb-7 top-20 ">Social</div>
        <div className="grid w-full place-content-center">
          <div className="grid relative w-full  md:grid-cols-3  place-items-center">
            {TagName.reviews.map((r) => {
              return (
                <div className="grid relative animate h-fit  ">
                  <div className="grid relative w-full md:w-60 h-fit place-items-center  p-4 ">
                    <div className="ReviewerPic animate grid absolute h-20 w-20 p-1 rotate-45 overflow-hidden top-[10px] z-[1] shadow-xl drop-shadow-lg">
                      <div>
                        <img
                          className=" h-fit w-fit rounded-full rotate-[-45deg] "
                          src={r.image}
                          alt="userImage"
                        />
                      </div>
                    </div>

                    <div className="   w-full h-full  sm:text-right md:text-center place-self-center">
                      <div className="socialCard animate grid h-fit mt-20 py-4 place-items-center">
                        <p className=" text-sm w-fit  font-bold text-white/60">
                          {r.name}
                        </p>
                        <p className="text-sm text-white/70 from-neutral-300 px-4 mt-4 line-clamp-8 text-left ">
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
