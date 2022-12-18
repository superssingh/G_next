import Image from "next/legacy/image"
import Link from "next/link"
import { TagName } from "../index"
const Features = () => {
  return (
    <div>
      {TagName.Skills.map((s, i) => {
        return (
          <div key={i} className="grid justify-center my-8 px-4 ">
            <div className="">
              {(i % 2 == 0 && (
                <div className="grid align-middle h-full md:grid-cols-2 max-w-6xl my-8 px-4  ">
                  <div className="grid place-content-center ">
                    <div className="grid  ">
                      <h1 className=" text-4xl font-bold mb-2 text-center md:text-left">
                        {s.name}
                      </h1>
                      <div className="text-lg text-gray-300 text-justify">
                        {s.des}
                      </div>
                    </div>
                    <div className="grid place-content-center md:place-content-start">
                      <Link href={s.url} legacyBehavior>
                        <div className="w-fit bg-violet-600/30 customShadow p-4 rounded-full mx-2 my-4 text-white font-bold hover:bg-purple-500/70 animate">
                          Let's Started
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="grid place-content-center px-4 object-fit overflow-hidden ">
                    <Image
                      src={s.image}
                      alt={s.name + "image"}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              )) || (
                <div className="grid align-middle h-full md:grid-cols-2 max-w-6xl my-8">
                  <div className="grid place-content-center px-4 object-cover overflow-hidden ">
                    <Image
                      src={s.image}
                      alt={s.name + "image"}
                      layout="intrinsic"
                    />
                  </div>
                  <div className="grid place-content-center">
                    <div className="grid p-4 ">
                      <h1 className=" text-4xl font-bold mb-2 text-center md:text-left">
                        {s.name}
                      </h1>
                      <div className="text-lg text-gray-300 text-justify">
                        {s.des}
                      </div>
                      <div className="grid place-content-center md:place-content-end">
                        <Link href={s.url} legacyBehavior>
                          <div className="w-fit bg-violet-600/30 customShadow p-4 rounded-full mx-2 my-4 text-white font-bold hover:bg-purple-500/70 animate">
                            Let's Started
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Features
