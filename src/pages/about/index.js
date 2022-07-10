// import Image from "next/image";

const About = () => {
  return (
    <div className="grid w-full place-content-center p-2 ">
      <div className="w-fit max-w-2xl place-items-center shadow-gray-500  shadow-md p-2 rounded-md bgDefault showFromTop">
        <div className=" text-xl font-semibold w-fit">About Us</div>
        <div className="relative p-2">
          Hello, welcome to gogixer. An online tech and web development website
          for web developers, bloggers, and content creators. Hope our content
          help you to fulfil your desired outcome 💎.
          {/* I am Santosh Singh. I am the founder of gogixer and a web
        developer by profession. */}
        </div>
      </div>
    </div>
  );
};

export default About;
