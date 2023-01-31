import LoginBtn from './login_btn';
const Comment = ({ comments }) => {
  return (
    <div>
      <div className="w-fit rounded-md bg-black/40 p-4 text-white">
        <LoginBtn />
      </div>
      {comments && (
        <div className="relative grid rounded-sm bg-white/[.30] p-2">
          <div className="grid w-full  font-semibold text-green-100">
            Comments
          </div>
          <div className="m-2 rounded-md bg-white/[.60] p-2 hover:bg-white/[.80] ">
            <div className="relative flex w-full place-items-center px-2 pb-2  ">
              <div className="h-8 w-8 rounded-full bg-black/[.30]"></div>
              <div className="pl-2 text-xs font-semibold text-gray-700 ">
                Reviewer Name
              </div>
              <div className="pl-2 text-right text-xs font-light text-gray-500 ">
                {`(OCT 19, 2022)`}
              </div>
            </div>
            <div className="pl-12 text-xs text-gray-800 ">
              Review or Comment
            </div>
          </div>

          <div className="m-2 rounded-md bg-white/[.60] p-2 hover:bg-white/[.80] ">
            <div className="relative flex w-full place-items-center px-2 pb-2  ">
              <div className="h-8 w-8 rounded-full bg-black/[.30]"></div>
              <div className="pl-2 text-xs font-semibold text-gray-700 ">
                Reviewer Name
              </div>
              <div className="pl-2 text-right text-xs font-light text-gray-500">
                {`(OCT 19, 2022)`}
              </div>
            </div>
            <div className="pl-12 text-xs text-gray-800 ">
              Review or Comment
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
