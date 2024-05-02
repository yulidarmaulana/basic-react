import { FC } from "react";

const Project: FC = () => {
  return (
    <>
      <section className="relative h-full">
        <div className="mx-auto h-full py-16 z-50 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 mb-8">Project</h2>
            <p className="leading-relaxed mb-8">The company started as a community called "FICOS". This community had 7 members and was working in an Open Source development, and had not been secured by a legal entity when it was founded in 2009. In order to develop the company and intend to expand the market range, this community had become a legal company, and had changed the name as "PHICOS" in 2016. Phicos Group is a holding company which is focused on digital development and technology solutions for government institutions, goods and service providers, universities, and lifestyle industries.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;