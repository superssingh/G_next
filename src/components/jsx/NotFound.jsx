import Back from "./Back"

const NotFound = ({ message, returnPath }) => {
  return (
    <div
      className="showSlow  
      relative grid w-full place-content-center p-2 pt-4 "
    >
      <div className="fancyRadius m-4 animate-pulse bg-black/30 bg-gradient-to-r from-red-300 to-red-500 bg-clip-text px-4 py-8 text-xl font-extrabold text-transparent shadow-md shadow-black ">
        {message || 'Not Found!'}
      </div>
      <div className="">
        <Back path={returnPath} />
      </div>
    </div>
  );
}

export default NotFound
