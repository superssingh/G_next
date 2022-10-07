import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { TagName, SocialWidget } from "../../components/";

const About = () => {
  return (
    <div className="grid w-full place-content-center p-2 ">
      <div className="grid w-fit max-w-2xl place-items-center shadow-slate-200 p-2   showFromTop ">
        <div className="text-[3rem] text-slate-200 text-center font-semibold w-fit p-2 font-poppins">
          About Us
          {/* <span className=" line-through">Us</span> Me*/}
        </div>
        <div className="relative p-2 text-slate-200 ">
          <h1 className="text-3xl p-2 font-bold">👋 Hello world, </h1>
          <div className="text-xl p-2 ">
            Welcome to Gogixer. A website for Web Developers. Hope our content
            help you to fulfil your desired outcome.
          </div>
        </div>

        <div className="grid p-2 bg-black/50 text-white text-center place-content-center rounded-md ">
          <div className="p-4 text-2xl text-gray-400 font-bold">About Me</div>

          <div className="relative m-4  rounded-b-lg ">
            <div className="grid w-full place-content-center">
              <div className=" animate grid w-72 h-72 p-2 place-content-center rounded-full overflow-hidden z-[1] ">
                <Image
                  src={TagName.founderData.image}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  priority
                  className="object-cover shadow-lg rounded-full "
                />
              </div>
              <div className="text-white/50 font-bold text-lg ">
                {TagName.founderData.name}
              </div>
            </div>
            <SocialWidget social={TagName.founderData.social} />
          </div>

          <div className="text-xl p-4  text-slate-400 text-justify">
            <Markdown children={TagName.founderData.des}></Markdown>
          </div>

          <h1 className="p-4 text-3xl font-bold text-center">
            🗣 Have a nice day and happing coding...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
