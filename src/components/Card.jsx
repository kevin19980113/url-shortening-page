/* eslint-disable react/prop-types */
export default function Card({ title, description, image, styles = "" }) {
  return (
    <div
      className={`w-full px-8 pt-10 pb-8 flex flex-col items-start bg-white rounded-lg relative `}
    >
      <figure
        className="bg-violet-950 rounded-full p-6 absolute top-0 left-1/2
      transform -translate-y-1/2 -translate-x-2/4"
      >
        <img src={image} alt={title} className="w-8 h-8" />
      </figure>
      <h2 className="w-full text-center text-xl mt-4 font-bold text-slate-800 mb-8">
        {title}
      </h2>
      <p className="text-base text-center text-gray-500">{description}</p>
    </div>
  );
}
