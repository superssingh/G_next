import Image from 'next/legacy/image'
import Link from 'next/link'
import { TagName } from '..'
const Features = () => {
  return (
    <>
      <div>
        {TagName.Skills.map((s, i) => {
          return (
            <div
              key={i}
              className="my-8 grid justify-center px-4 "
            >
              <div className="">
                {(i % 2 == 0 && (
                  <div
                    className={`my-8 grid h-full max-w-6xl px-4 align-middle md:grid-cols-2`}
                  >
                    <div className="grid place-content-center ">
                      <div className="grid  ">
                        <h1 className=" mb-2 text-center text-4xl font-bold md:text-left">
                          {s.name}
                        </h1>
                        <div className="text-justify text-lg text-gray-300">
                          {s.des}
                        </div>
                      </div>
                      <div className="grid place-content-center md:place-content-start">
                        <Link
                          href={s.url}
                          legacyBehavior
                          passHref
                        >
                          <div className="customShadow animate mx-2 my-4 w-fit rounded-full  p-4 font-bold text-white hoverEffect ">
                            {`Let's Started`}
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="object-fit grid place-content-center overflow-hidden px-4 ">
                      <Image
                        src={s.image}
                        alt={s.name + 'image'}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )) || (
                  <div
                    className={`my-8 grid h-full max-w-6xl align-middle md:grid-cols-2 `}
                  >
                    <div className="grid place-content-center overflow-hidden object-cover px-4 ">
                      <Image
                        src={s.image}
                        alt={s.name + 'image'}
                        loading="lazy"
                      />
                    </div>
                    <div className="grid place-content-center">
                      <div className="grid p-4 ">
                        <h1 className=" mb-2 text-center text-4xl font-bold md:text-left">
                          {s.name}
                        </h1>
                        <div className="text-justify text-lg text-gray-300">
                          {s.des}
                        </div>
                        <div className="grid place-content-center md:place-content-end">
                          <Link
                            href={s.url}
                            passHref
                            legacyBehavior
                          >
                            <div className="customShadow animate mx-2 my-4 w-fit rounded-full p-4 font-bold text-white hoverEffect ">
                              {`Let's Started`}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Features
