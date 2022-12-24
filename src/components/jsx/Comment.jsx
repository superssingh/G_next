const Comment = ({ comments }) => {
  return (
    <div>
      {comments && (
        <div className="grid relative bg-white/[.30] rounded-sm p-2">
          <div className="grid w-full  text-green-100 font-semibold">
            Comments
          </div>
          <div className="bg-white/[.60] rounded-md p-2 m-2 hover:bg-white/[.80] ">
            <div className="flex relative place-items-center px-2 pb-2 w-full  ">
              <div className="w-8 h-8 bg-black/[.30] rounded-full"></div>
              <div className="text-gray-700 text-xs pl-2 font-semibold ">
                Reviewer Name
              </div>
              <div className="text-right font-light text-gray-500 text-xs pl-2 ">
                {`(OCT 19, 2022)`}
              </div>
            </div>
            <div className="text-gray-800 text-xs pl-12 ">
              Review or Comment
            </div>
          </div>

          <div className="bg-white/[.60] rounded-md p-2 m-2 hover:bg-white/[.80] ">
            <div className="flex relative place-items-center px-2 pb-2 w-full  ">
              <div className="w-8 h-8 bg-black/[.30] rounded-full"></div>
              <div className="text-gray-700 text-xs pl-2 font-semibold ">
                Reviewer Name
              </div>
              <div className="text-right font-light text-gray-500 text-xs pl-2">
                {`(OCT 19, 2022)`}
              </div>
            </div>
            <div className="text-gray-800 text-xs pl-12 ">
              Review or Comment
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Comment
