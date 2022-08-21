import * as TagName from "../js/constants";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
const SocialProof = () => {
  return (
    <div className="customRadiusR flex-1 flex  justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 showFromTop ">
      <div className="relative md:justify-center items-center text-slate-100 text-center">
        <span className="text-2xl">Social</span>
        <div className="grid relative md:grid-cols-3">
          {TagName.services.map((m) => {
            return (
              <>
                {/* <div className="">Social proof</div>
                <div className="">Social proof</div>
                <div className="">Social proof</div>
                <div className="">Social proof</div>
                <div className="">Social proof</div>
                <div className="">Social proof</div> */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
