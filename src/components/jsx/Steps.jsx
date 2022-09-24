import { TagName } from "..";
const Steps = () => {
  return (
    <div className="bg-white/70 py-4 my-4">
      <section
        id="faqs"
        class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8"
      >
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-14 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
          <div class="lg:col-span-4">
            <h2 class="text-base font-semibold leading-7 text-indigo-500">
              Frequently asked questions
            </h2>
            <span class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
              Everything you need to know
            </span>
          </div>
          <div class="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
            <section>
              <h3 class="text-sm font-semibold leading-7 text-slate-500">
                General
              </h3>
              {TagName.Steps.map((s) => {
                return (
                  <dlv class="mt-2 divide-y divide-slate-100 ">
                    <details class="group py-4 marker:content-['']">
                      <summary class="  flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                        What does “lifetime access” mean exactly?
                        <svg
                          class="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M18 12H6"></path>
                          <path class="group-open:hidden" d="M12 6v12"></path>
                        </svg>
                      </summary>
                      <div class="pt-6 pb-6 ">
                        <div class=" prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                          <span>
                            Buying an all-access license is a{" "}
                            <strong>
                              one-time purchase, with no recurring subscription
                            </strong>
                            . When you purchase all-access, you get access to
                            everything in Tailwind UI forever.
                          </span>
                        </div>
                      </div>
                    </details>
                  </dlv>
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