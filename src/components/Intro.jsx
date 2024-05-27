import workImg from "../assets/illustration-working.svg";

export default function Intro() {
  return (
    <section className="mb-16 w-full flex-col">
      <div className="w-full flex flex-col items-center">
        <figure className="flex justify-end w-full">
          <img src={workImg} alt="illustration-working" className="w-11/12" />
        </figure>
        <h1 className="w-full px-4 text-4xl font-bold text-center leading-tight text-slate-800 my-4">
          More than just shorter links
        </h1>
        <p className="w-full px-4 text-md text-center text-gray-500  mb-8">
          Build your brand's recognition and get detailed insights on how your
          links performing.
        </p>
        <button className="px-8 py-2 text-xl text-white bg-teal-400 rounded-3xl hover:bg-teal-300 active:bg-teal-400">
          Get started
        </button>
      </div>
    </section>
  );
}
