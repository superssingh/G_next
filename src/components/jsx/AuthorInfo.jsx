import Image from "next/legacy/image"
import { TagName } from '..'
import { SocialWidget } from '../tsx'

const AuthorInfo = ({ author }) => {
  return (
    <div className=" bg-white/[.30] text-slate-400 shadow-lg shadow-gray-700/[.35] drop-shadow-md border-b-2 border-white/[.45] rounded-b-lg p-4 my-2">
      <div className="grid w-full place-content-center">
        <div className="AuthorPic grid w-20 p-1 place-content-center mt-[-30px]  rounded-full overflow-hidden z-[1] hover:bg-purple-200">
          <Image
            src={author.photo.url}
            alt="Picture of the author"
            width={72}
            height={72}
            priority
            className="object-cover shadow-lg rounded-full "
          />
        </div>
      </div>
      <div className=" w-full  text-slate-300 ">
        <div className="text-center p-2">
          <div className="text-lg font-semibold text-slate-200 ">
            {author.name}
          </div>
          <div className="text-sm font-semibold">{author.profession}</div>
          <SocialWidget social={TagName.founderData.social} />
        </div>
      </div>
    </div>
  )
}

export default AuthorInfo
