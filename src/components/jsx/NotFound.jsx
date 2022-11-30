import Back from "./Back"

const NotFound = ({ message, returnPath }) => {
  return (
    <div
      className="showSlow  
      grid relative w-full place-content-center p-2"
    >
      <div className="p-8 animate-pulse text-3xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 m-4 shadow-md  ">
        {message || "Not Found!"}
      </div>
      <div className="">
        <Back path={returnPath || ""} />
      </div>
    </div>
  )
}

export default NotFound
