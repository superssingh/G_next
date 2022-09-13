import * as TagName from "../js/constants";

const SocialProof = () => {
  return (
    <div className="customRadiusR relative animate showFromTop ">
      <div className="grid relative text-center m-2 px-2">
        <div className="text-xl text-white/30 mb-7 top-20 ">Social</div>
        <div className="grid relative w-full sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center place-content-center">
          {TagName.reviews.map((r) => {
            return (
              <div className="grid relative animate sm:w-60 md:w-60 lg:w-3/4 h-fit my-2">
                <div className="ReviewerPic animate grid absolute h-16 w-16 p-1 left-0 top-[-14px] rotate-45 rounded-full overflow-hidden z-[1]">
                  <div>
                    <img
                      className=" h-wrap w-wrap rounded-full rotate-[-45deg] "
                      src={r.image}
                      alt="ReviewerImage"
                    />
                  </div>
                </div>
                <div className="socialCard animate grid relative h-fit py-3 place-items-start bg-violet-500/50 ">
                  <div className="w-full pl-20  ">
                    <p className=" text-sm w-fit font-bold text-slate-100 uppercase ">
                      {r.name}
                    </p>
                    <p className=" text-xs w-fit font-bold text-slate-200 ">
                      {r.job}
                    </p>
                  </div>
                  <p className="text-sm text-white p-4 text-left ">
                    {`"` + r.comment + `"`}
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
