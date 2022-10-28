const FAQ = ({ FAQ }) => {
  return (
    <div>
      {FAQ.map((f, i) => {
        return (
          <section
            className="  grid relative p-2 place-content-center text-left overflow-hidden"
            key={"faq" + i}
          >
            <div className=" grid relative w-full max-w-lg grid-cols-8 gap-0 place-content-start rounded-md ">
              <input
                type="checkbox"
                id={"faq" + i}
                className="col-span-8 hidden"
              />

              <label
                htmlFor={"faq" + i}
                className="label col-span-7 w-full grid place-content-start p-4 uppercase text-gray-600"
              >
                <strong>{f.label}</strong>
              </label>
              <label
                htmlFor={"faq" + i}
                className="iconPointer grid place-content-center  w-14"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-6 h-6 font-bold rounded-full shadow-md shadow-black bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </label>
              <div className="answer  grid w-full max-w-lg col-span-8 px-2 place-centent-center rounded-md  bg-white/80 shadow-black/50 shadow-sm ">
                <div className="w-full text-justify text-sm  p-4 text-gray-700 ">
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
