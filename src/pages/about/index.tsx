import Markdown from "markdown-to-jsx"
import Image from "next/legacy/image"
import { TagName, SocialWidget } from '../../components'
import Gallery from '~/components/tsx/AnimatedSlider'

const About = () => {
  return (
    <>
      <div className="grid w-full place-content-center p-2 ">
        <div className="grid w-fit max-w-2xl place-items-center shadow-slate-200 p-2 showFromTop ">
          <div className="text-[2rem] text-slate-200 text-center font-semibold w-fit p-2 font-poppins">
            About Us
          </div>
          <div className="relative p-2 text-slate-200 ">
            <div className="text-lg p-2 text-justify">
              <strong>Gogixer</strong> is the ultimate online learning
              destination for students and web developers who are serious about
              mastering the art of web development. This platform offers a
              dynamic and immersive learning experience, providing access to
              top-tier courses in Front-End, Back-End, and Full-Stack
              development. You&apos;ll gain the skills and knowledge you need to
              succeed in this rapidly evolving industry. Whether you&apos;re a
              beginner or an experienced developer, Gogixer is the perfect
              partner for your educational journey. Welcome to the future of
              online learning.
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
              {/* <Markdown>{TagName.founderData.des}</Markdown> */}
              Hello, I&apos;m <strong>Santosh Singh</strong>, a Full-Stack
              Developer and founder of Gogixer. My passion is web development
              and helping others learn to code. I built Gogixer to share my
              journey and provide a comprehensive learning experience for
              students of all levels. Whether you&apos;re new to web development
              or looking to enhance your skills, I&apos;m here to guide you on
              your journey. Join me and the Gogixer community and let&apos;s
              explore the exciting world of web development together!
            </div>

            <h1 className="p-4 text-xl font-bold text-center">
              🗣 Happy coding...
            </h1>
          </div>

          <Gallery />
        </div>
      </div>
    </>
  )
}

export default About
