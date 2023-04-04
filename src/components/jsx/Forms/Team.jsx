import { TagName, SocialWidget } from "../index";
import Image from "next/legacy/image";

const Team = () => {
  return (
    <div>
      <div className=" bg-violet-500/30 py-6 grid w-full sm:justify-center relative animate showFromTop ">
        <div className=" relative text-center m-2 px-2">
          <div className="text-xl text-white/60 mb-12 top-20 pb-4">
            Meet Our Team
          </div>
          <div className="grid relative w-full sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center place-content-center mt-6">
            {TagName.team.map((m, i) => {
              return (
                <div
                  key={i}
                  className="relative animate place-content-center w-72 sm:64 md:w-60 my-6 bg-black/40 rounded-lg px-4 py-6 hover:bg-pink-500/30 "
                >
                  <div className="grid w-full place-content-center mt-0 ">
                    <div className="TeamPic h-48 w-48 rounded-full mt-[-5rem] overflow-hidden z-[1]  ">
                      <Image
                        className=" "
                        src={m.image}
                        alt="Team Member Pic"
                        width="500"
                        height="500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="relative h-full ">
                    <div className="text-center w-full my-2">
                      <div className=" text-xl uppercase text-slate-200 font-semibold">
                        {m.name}
                      </div>
                      <div className=" text-sm font-bold text-white/50 ">
                        {m.job}
                      </div>
                    </div>
                    <SocialWidget social={m.social} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
