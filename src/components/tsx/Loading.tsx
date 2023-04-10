const Loading = () => {
  return (
    <div
      className="showSlow  
        relative grid w-full place-content-center p-2 pt-4 "
    >
      <div className="fancyRadius1 randomBG1 m-4 animate-pulse rounded-full p-4 text-2xl font-extrabold text-white  shadow-md shadow-black hover:animate-none">
        Loading...
      </div>
    </div>
  )
}

export default Loading
