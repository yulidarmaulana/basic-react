import { FC } from "react";

const Index: FC = () => {
  return (
    <>
      <section className="relative h-full">
        <div className="mx-auto h-full py-16 z-50 bg-white dark:bg-slate-800">
            <img src="/public/uwu.webp" className="mx-auto" alt="logo-react" />
          <div className="max-w-6xl mx-auto">
            {/* <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-slate-800 dark:text-slate-300 mb-4">Welcome to My React Basic</h2> */}
            <p className=" mb-8 font-medium text-xl text-slate-800 dark:text-slate-300 text-center"> Where coding meets creativity and magic happens!</p>

            <div className="grid grid-cols-2">
              <div>
                <h2 className="croll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Vision</h2>
               
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

export default Index;