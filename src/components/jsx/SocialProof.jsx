import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
const SocialProof = () => {
  return (
    <div className="customRadiusR flex-1 flex  justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 showFromTop ">
      <div className="relative md:justify-center items-center text-slate-100 text-center">
        <span className="text-2xl">Social</span>
        <div className="grid relative md:grid-cols-3">
          {TagName.reviews.map((r) => {
            return (
              <div className="grid relative m-2 p-[2px] overflow-hidden transition-all duration-500 text-left ">
                <div className="socialCard text-slate-200 bg-pink-500/50 w-full h-fit md:w-52  p-4 transition-all duration-500 ">
                  <p className="text-md mt-2 px-4 py-2 bg-black/50 rounded-2xl ">
                    {`"` + r.comment + `"`}
                  </p>
                  <div className="flex ">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={r.image}
                        alt="userImage"
                      />
                    </div>
                    <p className="text-sm m-2 font-medium text-slate-300">
                      {r.name}
                    </p>
                  </div>
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
