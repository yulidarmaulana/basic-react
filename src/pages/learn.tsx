import { FC } from "react";

const Learn: FC = () => {
  return (
    <>
      <section className="relative h-full">
        <div className="mx-auto h-full py-16 z-50 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 dark:text-astral-100 mb-8">Learn</h2>
            <p className="leading-relaxed mb-8"> universities, and lifestyle industries.</p>

            <hr className="mb-8" />

            <div className="grid grid-cols-2">
              <div>
                <h2 className="croll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Vision</h2>
                <p>
                  Develop Information and Communication Technology to make the brilliant innovation and high quality.
                </p>
              </div>
              <div>
                <h2 className="croll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Mission</h2>
                <p>
                  Actualizing real contribution in the field of information and communication technology, in a range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Learn;