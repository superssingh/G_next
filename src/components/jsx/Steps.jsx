import { TagName } from "..";
const Steps = () => {
  return (
    <div className="bg-white/80 p-4 my-4">
      <section
        id="faqs"
        className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:gap-y-16 gap-x-14 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
          <div className="lg:col-span-4">
            <h2 className="text-lg font-semibold leading-7 text-purple-500">
              Best and honest advice for you &
            </h2>
            <span className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
              Everything you need to know
            </span>
          </div>
          <div className="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6 text-center">
            <section>
              <h3 className="text-sm font-semibold leading-7 text-slate-400">
                Learning steps
              </h3>
              {TagName.steps.map((s, i) => {
                return (
                  <div className="mt-2 divide-y divide-slate-100  " key={i}>
                    <details className="group py-4 marker:content-[''] ">
                      <summary className="  flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden ">
                        {s.label}
                        <svg
                          className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 12H6"></path>
                          <path
                            className="group-open:hidden"
                            d="M12 6v12"
                          ></path>
                        </svg>
                      </summary>
                      <div className="pt-6 pb-6 showFromTop animate ">
                        <div className="text-left prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500 showFromTop animate">
                          <span>{s.comment}</span>
                        </div>
                      </div>
                    </details>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
