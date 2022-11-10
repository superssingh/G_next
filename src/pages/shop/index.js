import { Back } from "../../components"

const Shop = () => {
  return (
    <div className="grid relative ">
      <div
        className="showSlow  
      grid relative w-full place-content-center p-[1rem]"
      >
        <div className="p-8 animate-pulse text-3xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white ">
          Coming soon...
        </div>
        <div className="">
          <Back />
        </div>
      </div>
    </div>
  )
}

export default Shop
