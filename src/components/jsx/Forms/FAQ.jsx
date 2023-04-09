const FAQ = ({ FAQ }) => {
  return (
    <div className="grid place-content-center">
      {FAQ.map((f, i) => {
        return (
          <section
            className="relative m-1 p-2 grid w-fit place-content-center place-items-center overflow-hidden rounded-lg  text-left"
            key={'faq' + i}
          >
            <input
              type="checkbox"
              id={'faq' + i}
              className="col-span-8 hidden"
            />
            <div className="faq relative grid w-full max-w-lg grid-cols-8 place-items-start gap-0 rounded-md">
              <label
                htmlFor={'faq' + i}
                className="label col-span-7 grid w-full place-content-start p-2 text-lg font-semibold uppercase text-gray-200 "
              >
                {f.label}
              </label>
              <label
                htmlFor={'faq' + i}
                className="absolute top-0 grid w-full place-items-end p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="iconPointer randomBG1  grid h-7 w-7 rounded-full font-bold shadow-md shadow-black hover:animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </label>

              <div className="answer relative col-span-8  grid w-full max-w-lg place-items-center justify-items-center px-2 ">
                <div className="bgTeal m-2 w-full rounded-md px-4 py-2 text-justify text-base text-slate-100 shadow-md shadow-black/50 ">
                  {f.comment}
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default FAQ
