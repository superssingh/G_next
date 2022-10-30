import { Back } from "../../components";
import InputExample from "../../components/jsx/tailwindExamples/Input";
import InputText from "../../components/jsx/tailwindExamples/InputText";
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

      <InputText name="username" label="Username" />
      <InputText name="password" label="Password" type="password" required />
      <InputText name="email" type="email" label="Email ID" required />
      <InputText name="email" type="number" label="Mobile No" required />
      <InputText name="email" type="date" label="Mobile No" />
    </div>
  );
};

export default Shop;
