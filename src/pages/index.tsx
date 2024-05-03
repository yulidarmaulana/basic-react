import { FC } from "react";
import Button from "../components/button";

const Index: FC = () => {
  return (
    <>
      <section className="relative h-full">
        <div className="mx-auto h-full py-16 bg-white dark:bg-slate-800">
            <img src="/public/uwu.webp" className="mx-auto -rotate-6" alt="logo-react" />
          <div className="max-w-6xl mx-auto">
            {/* <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-slate-800 dark:text-slate-300 mb-4">Welcome to My React Basic</h2> */}
            <p className=" mb-6 font-medium text-xl text-slate-800 dark:text-slate-300 text-center"> Where coding meets creativity and magic happens!</p>
            <div className="text-center">
            <Button variant="primary">Get Started</Button>                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;