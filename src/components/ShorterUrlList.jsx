/* eslint-disable react/prop-types */
import { useState } from "react";
import Loading from "../components/Loading.jsx";

export default function ShorterUrlList({
  shorterUrlList,
  longerUrlList,
  isLoading,
}) {
  const [isCopied, setIsCopied] = useState(-1);

  let CopiedButtonStlye =
    "w-full mt-4 px-6 py-2 text-white bg-violet-950 rounded-md hover:bg-violet-900 active:bg-violet-950";

  let ButtonStyle =
    "w-full mt-4 px-6 py-2 text-white bg-teal-400 rounded-md hover:bg-teal-300 active:bg-teal-400";

  function handleCopy(url, index) {
    navigator.clipboard.writeText(url);
    setIsCopied(index);
    alert("URL copied to clipboard!");
  }

  return (
    <div className="w-full mb-16 -mt-24">
      <ul className="w-full flex flex-col items-center">
        {isLoading && <Loading />}
        {!isLoading &&
          shorterUrlList.map((url, index) => (
            <li
              key={url}
              className="w-full py-4 px-4 flex-col items-center text-xs bg-white rounded-md"
            >
              <p className="text-black break-words">{longerUrlList[index]}</p>

              <hr className="w-full h-0.5 my-2" />

              <a
                href={url}
                className="w-fll break-words text-teal-400 hover:text-teal-500 active:text-teal-400"
              >
                {url}
              </a>
              <button
                className={isCopied === index ? CopiedButtonStlye : ButtonStyle}
                onClick={() => handleCopy(url, index)}
                disabled={isCopied === index ? true : false}
              >
                {isCopied === index ? "Copied!" : "Copy"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
