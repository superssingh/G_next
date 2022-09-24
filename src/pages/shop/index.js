import { Back } from "../../components";
const Shop = () => {
  return (
    <div
      className="showSlow  
      grid absolute w-full place-content-center p-[1rem]"
    >
      <div className="p-8 animate-pulse text-3xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white ">
        Coming soon...
      </div>
      <div className=" w-full ">
        <Back />
      </div>
    </div>
  );
};

export default Shop;
