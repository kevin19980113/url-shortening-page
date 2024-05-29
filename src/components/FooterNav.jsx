/* eslint-disable react/prop-types */
export default function FooterNav({ title, linkNames }) {
  let listStyle =
    " text-gray-400 hover:text-teal-300 transition ease duration-300";
  return (
    <div className="flex flex-col items-center gap-y-4 lg:items-start">
      <h1 className="text-white font-medium">{title}</h1>
      <ul className="flex flex-col gap-y-2">
        {linkNames.map((linkName) => (
          <li key={linkName} className="text-center lg:text-left">
            <a href="#" className={listStyle}>
              {linkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
