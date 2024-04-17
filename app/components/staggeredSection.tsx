import gridOne from "../assets/images/grid-image-01.webp";
import gridTwo from "../assets/images/grid-image-02.webp";
import gridThree from "../assets/images/grid-image-03.webp";

export default function StaggeredSection() {
  return (
    <div className="bg-white pt-24 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="flex flex-col gap-6 lg:gap-12 space-y-18 lg:space-y-18">
            <article className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] lg:w-[400px] lg:shrink-0">
                <img
                  src={gridOne.src}
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover object-center"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 w-full">
                  Actively monitor
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  Forget manual research. Actively gather data from 13+ sources
                  to comprehensively monitor your contacts, their company and
                  their industry.
                </p>
              </div>
            </article>
            <article className="relative isolate flex flex-col gap-8 lg:flex-row-reverse">
              <div className="relative aspect-[16/9] lg:w-[400px] lg:shrink-0">
                <img
                  src={gridTwo.src}
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover object-top"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 w-full">
                  Identify opportunities
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  Get your timing right. Select from 17+ signals to identify the
                  perfect opportunity to initiate your outreach. Or even build
                  your own signals.
                </p>
              </div>
            </article>
            <article className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] lg:w-[400px] lg:shrink-0">
                <img
                  src={gridThree.src}
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover object-top"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 w-full">
                  Intelligently connect
                </h5>
                <p className="mb-3 font-normal text-gray-500">
                  Do not sound like spam. Craft AI generated personalized
                  outreach while taking into account your previous interactions
                  with the contacts.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
