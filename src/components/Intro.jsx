import workImg from "../assets/illustration-working.svg";
import { useMediaQuery } from "react-responsive";
export default function Intro() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <section
      className="w-full flex flex-col gap-y-4 items-center mb-16 
    lg:flex-row-reverse lg:pl-12 lg:mt-8 xl:pl-24"
    >
      <figure className="flex justify-end w-full lg:w-1/2">
        <img src={workImg} alt="illustration-working" className="w-full" />
      </figure>

      <div className="flex flex-col gap-y-6 items-center lg:w-1/2 lg:items-start">
        <h1
          className="w-full px-4 text-4xl font-bold text-center leading-tight text-slate-800 
        lg:text-left lg:text-5xl lg:px-0 lg:leading-tight xl:text-7xl xl:leading-snug"
        >
          More than just{isDesktop && <br />} shorter links
        </h1>
        <p className="w-full px-4 text-md text-center text-gray-500 lg:p-0 lg:text-left lg:w-2/3 xl:text-xl">
          Build your brand's recognition and get detailed insights on how your
          links performing.
        </p>
        <button
          className="px-6 py-2 text-lg text-white bg-teal-400 rounded-3xl
         hover:bg-teal-300 active:bg-teal-400"
        >
          Get started
        </button>
      </div>
    </section>
  );
}
