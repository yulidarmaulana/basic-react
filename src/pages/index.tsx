import { FC } from "react";
// import Button from "../components/button";

const Index: FC = () => {
  return (
    <>
      <section className="relative h-screen">
        <div className="mx-auto h-full py-16 bg-white dark:bg-slate-800">
            <img src="/uwu.webp" className="mx-auto -rotate-6" alt="logo-react" />
          <div className="max-w-6xl mx-auto">
            <p className="mb-6 font-medium text-xl text-astral-700 dark:text-astral-100 text-center">Where coding meets creativity and magic happens!</p>
            <div className="text-center">
            {/* <Button variant="primary">Get Started</Button>                 */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;