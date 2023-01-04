import { Back } from "../components"
export default function Custom404() {
  return (
    <div className="grid absolute w-full place-content-center p-[1.3rem]">
      <div className="grid text-white text-xl font-bold bg-black/60 px-6 py-10 rounded-xl ">
        {`{ ` + '404 - Page Not Found' + ` }`}
      </div>
      <div className=" w-full ">
        <Back />
      </div>
    </div>
  );
}
