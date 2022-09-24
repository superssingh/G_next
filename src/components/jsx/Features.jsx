import Image from "next/image";
import { TagName } from "../index";
const Features = () => {
  return (
    <div>
      {TagName.Skills.map((s, i) => {
        return (
          <div key={i} className="grid justify-center my-8 ">
            <div className="">
              {(i % 2 == 0 && (
                <div className="grid align-middle h-full md:grid-cols-2 max-w-6xl my-8">
                  <div className="grid place-content-center">
                    <div className="grid px-4 ">
                      <h1 className=" text-3xl font-bold mb-2 text-center md:text-left">
                        {s.name}
                      </h1>
                      <div className="text-lg text-gray-300">{s.des}</div>
                    </div>
                  </div>
                  <div className="grid place-content-center px-4">
                    <Image src={s.image} />
                  </div>
                </div>
              )) || (
                <div className="grid align-middle h-full md:grid-cols-2 max-w-6xl my-8">
                  <div className="grid place-content-center px-4">
                    <Image src={s.image} />
                  </div>
                  <div className="grid place-content-center">
                    <div className="grid p-4 ">
                      <h1 className=" text-3xl font-bold mb-2 text-center md:text-left">
                        {s.name}
                      </h1>
                      <div className="text-lg text-gray-300">{s.des}</div>
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
};

export default Features;
