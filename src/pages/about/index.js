// import Image from "next/image";

import { AuthorInfo } from "../../components";

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
            Welcome to Gogixer. An online tech and web development website for
            Web Developer. Hope our content help you to fulfil your desired
            outcome.
          </div>
        </div>

        <div className="p-2 text-white grid place-content-center">
          <div className="p-4 text-2xl font-bold">About Me</div>
          <div className="text-2xl p-4 text-left">
            Hi, I'm Santosh Singh, founder of gogixer and full stack developer.
            I am a software developer, freelancer & founder of Gogixer. I love
            my profession and have a keen interest to teach people about web
            development. I have learned web development skills from online free
            and paid courses. Therefore, I wanna give it back by helping you and
            others through Gogixer. I Hope you enjoy it... 😇
          </div>
          <h1 className="p-4 text-xl font-bold text-center">
            🗣 Have a nice day and happing coding...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
