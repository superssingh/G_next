import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
const SocialProof = () => {
  return (
    <div className="customRadiusR flex-1 flex  justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 showFromTop ">
      <div className="relative text-center">
        <div className="text-xl text-white/40 mb-7 top-20 ">Social</div>

        <div className=" md:justify-center items-center text-slate-100 text-center">
          <div className="grid relative md:grid-cols-3">
            {TagName.reviews.map((r) => {
              return (
                <div className="grid relative my-6 transition-all duration-500 text-left ">
                  <div className="grid relative min-w-full md:w-60 lg:w-80 place-items-center ">
                    <div className="ReviewerPic grid absolute h-20 w-20 p-1 rotate-45 overflow-hidden top-[-50px] z-[1] shadow-xl drop-shadow-lg">
                      <img
                        className=" h-fit w-fit rounded-full rotate-[-45deg] "
                        src={r.image}
                        alt="userImage"
                      />
                    </div>
                    <div className="socialCard  text-slate-200  w-full h-fit  p-2 ">
                      <div className="transition-all duration-500 grid h-fit my-4 relative place-items-center shadow-md shadow-black/10  bg-violet-500/50 rounded-lg hover:bg-pink-500/50 ">
                        <p className="text-md  mt-2 p-4 ">
                          {`"` + r.comment + `"`}
                        </p>
                        <p className="mt-[-10px] p-2 mb-2 text-md w-fit text-center font-medium text-slate-300">
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
