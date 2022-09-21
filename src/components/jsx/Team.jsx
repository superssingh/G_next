import * as TagName from "../js/constants";
import Image from "next/image";
import SocialWidget from "./SocialWidget";

const Team = () => {
  return (
    <div>
      <div className="grid w-full sm:justify-center relative animate showFromTop ">
        <div className=" relative text-center m-2 px-2">
          <div className="text-xl text-white/60 mb-12 top-20 ">
            Meet Our Team
          </div>
          <div className="grid relative w-full sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center place-content-center mt-6">
            {TagName.team.map((r) => {
              return (
                <div className="relative animate place-content-center w-64 sm:w-64 md:w-60 my-6 bg-black/40 rounded-lg px-4 py-6 hover:bg-purple-700 ">
                  <div className="grid w-full place-content-center mt-0">
                    <div className="TeamPic h-24 w-24 p-1 mt-[-5rem] overflow-hidden z-[1] rotate-45 ">
                      <Image
                        className=" h-wrap w-wrap  rotate-[-45deg] rounded-full "
                        src={r.image}
                        width="100%"
                        height="100%"
                        alt="Team Member Pic"
                      />
                    </div>
                  </div>
                  <div className="relative h-fit mt-2">
                    <div className="text-center w-full mb-2">
                      <p className=" text-lg  text-slate-200 font-bold">
                        {r.name}
                      </p>
                      <p className=" text-sm font-bold text-slate-400 ">
                        {r.job}
                      </p>
                    </div>
                    <SocialWidget social={r.social} />
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

export default Team;
