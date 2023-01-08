const FAQ = ({ FAQ }) => {
  return (
    <div>
      {FAQ.map((f, i) => {
        return (
          <section
            className=" animate grid relative py-2 place-content-center text-left overflow-hidden"
            key={'faq' + i}
          >
            <input
              type="checkbox"
              id={'faq' + i}
              className="col-span-8 hidden"
            />
            <div className="faq  grid relative w-full max-w-lg grid-cols-8 gap-0 place-items-start rounded-md animate">
              <label
                htmlFor={'faq' + i}
                className="label col-span-7 w-full grid place-content-start pl-2 font-semibold uppercase text-gray-200 "
              >
                {f.label}
              </label>
              <label
                htmlFor={'faq' + i}
                className="grid absolute place-items-end top-0  w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="iconPointer  grid  w-6 h-6 font-bold mr-2 rounded-full shadow-md shadow-black randomBG1 hover:animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </label>

              <div className="answer grid relative w-full max-w-lg col-span-8 pt-2 pb-2 place-items-center justify-items-center px-2 animate">
                <div className="w-full text-justify text-sm bgTeal text-slate-100 px-4 py-2 rounded-md shadow-md shadow-black/50 mx-2 ">
                  {f.comment}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default FAQ;
