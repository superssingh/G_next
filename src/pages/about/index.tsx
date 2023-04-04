import Markdown from "markdown-to-jsx"
import Image from "next/legacy/image"
import { TagName } from '../../components'
import { SocialWidget } from '../../components/tsx'

const About = () => {
  return (
    <div className="grid w-full place-content-center p-2 ">
      <div className="grid w-fit max-w-2xl place-items-center shadow-slate-200 p-2   showFromTop ">
        <div className="text-[2rem] text-slate-200 text-center font-semibold w-fit p-2 font-poppins">
          About Us
        </div>
        <div className="relative p-2 text-slate-200 ">
          <div className="text-lg p-2 text-justify">
            Welcome to <strong>Gogixer</strong>, an online learning platform for
            students and web developers to learn web development skills like{' '}
            <strong>Front-End, Back-End </strong> and{' '}
            <strong>Full-Stack development. </strong>
          </div>
        </div>

        <div className="grid p-2 bg-black/50 text-white text-center place-content-center rounded-md ">
          <div className="p-4 text-2xl text-gray-400 font-bold">About Me</div>

          <div className="relative m-4  rounded-b-lg ">
            <div className="grid w-full place-content-center">
              <div className=" animate grid w-64 h-64 p-2 place-content-center rounded-full overflow-hidden z-[1] ">
                <Image
                  src={TagName.founderData.image}
                  alt="Picture of the author"                  
                  priority                  
                  className=" shadow-lg rounded-full "
                />
              </div>
            </div>
          </div>
          <SocialWidget social={TagName.founderData.social} />
          <div className="text-lg p-4  text-gray-200 text-justify">
            <Markdown>{TagName.founderData.des}</Markdown>
          </div>

          <h1 className="p-4 text-xl font-bold text-center">
            🗣 Have a nice day and happy coding...
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About
