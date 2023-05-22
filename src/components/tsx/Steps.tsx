import { TagName, FAQ } from '..'

const Steps = () => {
  return (
    <>
      <div className="bg-gray-800/50 p-4 my-4 fancyRadius4 py-6">
        <section
          id="faqs"
          className="mx-auto w-full  px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 lg:gap-y-16 gap-x-14 md:w-5xl lg:px-8  ">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-semibold leading-7 text-gray-300 mt-2">
                Best and honest advice for you &
              </h2>
              <span className="mt-4 text-4xl font-extrabold tracking-tight text-slate-100 xl:text-5xl xl:leading-[3.5rem]">
                Everything you need to know
              </span>
            </div>

            <div className="mb-4 space-y-12  lg:col-span-8 xl:col-span-7 xl:col-start-6 text-center">
              <section>
                <h3 className="text-lg font-semibold leading-7 text-gray-400 sm:py-4 ">
                  Learning Steps
                </h3>
                <FAQ faqList={TagName.steps} />
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Steps
