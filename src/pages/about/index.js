// import Image from "next/image";

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
            Welcome to gogixer. An online tech and web development website for
            web developers, bloggers, and content creators. Hope our content
            help you to fulfil your desired outcome.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
