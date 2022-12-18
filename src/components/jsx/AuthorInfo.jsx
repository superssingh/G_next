import Image from "next/legacy/image"
const AuthorInfo = ({ author }) => {
  return (
    <div className=" bg-white/[.30] text-slate-400 shadow-lg shadow-gray-700/[.35] drop-shadow-md border-b-2 border-white/[.45] rounded-b-lg p-4 my-2">
      <div className="grid w-full place-content-center">
        <div className="AuthorPic animate grid w-20 p-1 place-content-center mt-[-30px] rotate-[45deg] rounded-full overflow-hidden z-[1]">
          <Image
            src={author.photo.url}
            alt="Picture of the author"
            width={72}
            height={72}
            layout="intrinsic"
            priority
            className="object-cover shadow-lg rounded-full rotate-[-45deg]"
          />
        </div>
      </div>
      <div className=" w-full  text-slate-300 ">
        <div className="text-center p-2">
          <div className="text-lg font-semibold text-slate-200 ">
            {author.name}
          </div>
          <div className="text-sm font-semibold">{author.profession}</div>

          <div className="text-sm font-bold">
            {author.social.map((s, i) => {
              return <div key={i}> {s}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorInfo
