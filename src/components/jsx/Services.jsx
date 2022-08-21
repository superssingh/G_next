import * as TagName from "../js/constants";

const Services = () => {
  return (
    <div className="flex-1 flex  justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 hover:bg-opacity-50 showFromTop ">
      <div className="relative md:justify-center items-center text-slate-100 text-center">
        <span className="text-2xl">Categories</span>
        <div className="grid relative md:grid-cols-3">
          {TagName.services.map((m) => {
            return (
              <div className="grid m-2 p-[2px] transition-all duration-500 text-left ">
                <div className="bg-gray-900/50 w-full h-fit md:w-52 md:h-52 p-4 transition-all duration-500 border-2 border-purple-500/80 shadow-gray-900 border-gray-900/30 rounded-md hover:bg-black/50 hover:shadow-lg hover:shadow-black/50 hover:border-pink-500  ">
                  {/* <Image src={m.icon} /> */}
                  <p className="text-lg text-gray-100 uppercase">{m.title}</p>
                  <p className="text-sm mt-2 text-gray-400">{m.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
