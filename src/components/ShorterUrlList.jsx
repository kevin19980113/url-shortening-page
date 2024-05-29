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

  const responsive = " lg:m-0";

  CopiedButtonStlye += responsive;
  ButtonStyle += responsive;

  function handleCopy(url, index) {
    navigator.clipboard.writeText(url);
    setIsCopied(index);
    alert("URL copied to clipboard!");
  }

  return (
    <div className="w-full mb-16 -mt-24">
      <ul className="w-full flex flex-col gap-y-4 items-center">
        {isLoading && <Loading />}
        {!isLoading &&
          shorterUrlList.map((url, index) => (
            <li
              key={url}
              className="w-full py-4 px-4 flex flex-col items-center text-xs bg-white rounded-md 
              lg:flex-row lg:justify-between xl:text-sm"
            >
              <p className="w-full text-left text-black break-words lg:w-auto">
                {longerUrlList[index]}
              </p>

              <hr className="w-full h-0.5 my-2 lg:hidden" />

              <div className="w-full lg:flex lg:items-center lg:gap-x-6 lg:w-auto">
                <a
                  href={url}
                  className="w-full text-left break-words text-teal-400 
                  hover:text-teal-500 active:text-teal-400"
                  target="_blank"
                >
                  {url}
                </a>
                <button
                  className={
                    isCopied === index ? CopiedButtonStlye : ButtonStyle
                  }
                  onClick={() => handleCopy(url, index)}
                  disabled={isCopied === index ? true : false}
                >
                  {isCopied === index ? "Copied!" : "Copy"}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
