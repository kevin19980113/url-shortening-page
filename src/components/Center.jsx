import Card from "../components/Card.jsx";
import { cardInfo } from "../data.js";
import { getShortenUrl } from "../dataFetch.js";
import { useRef, useState } from "react";
import ShorterUrlList from "../components/ShorterUrlList.jsx";

export default function Center() {
  const inputRef = useRef();
  const [shorterUrlList, setShorterUrlList] = useState([]);
  const [logerUrlList, setLogerUrlList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function shortenurl(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const input = inputRef.current.value;
      const result = await getShortenUrl(input);

      setLogerUrlList((prev) => [...prev, input]);
      setShorterUrlList((prev) => [...prev, result]);

      setIsLoading(false);
      setIsError(false);

      e.target.reset();
    } catch (error) {
      if (error.message.includes("invalid")) {
        setErrorMsg(
          "This URL is invalid!! Please enter a valid URL. It also can't include &, ?, #, or other reserved parameters."
        );
      }

      if (error.message.includes("empty")) {
        setErrorMsg("Please enter a URL. It cannot be empty");
      }

      setIsLoading(false);
      setIsError(true);

      e.target.reset();
    }
  }

  let inputStlyes = `w-full rounded-md border-2 text-xs px-4 py-2 lg:text-sm ${
    isError
      ? "outline-red-400 border-red-400 placeholder-red-400"
      : "outline-cyan-400 text-gray-700"
  }`;

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <form
        className="w-11/12 rounded-2xl z-10 bg-violet-950 px-4 py-4
      bg-[url(/src/assets/bg-shorten-desktop.svg)] bg-cover bg-center
      lg:w-11/12 lg:px-12 lg:py-8 xl:w-10/12"
        onSubmit={(e) => shortenurl(e)}
      >
        <div className="w-full flex flex-col gap-y-2 items-center lg:flex-row lg:gap-x-6">
          <div className="flex flex-col w-full gap-y-2 lg:relative">
            <input
              type="text"
              placeholder="shorten a link here..."
              className={inputStlyes}
              ref={inputRef}
            />

            {isError && (
              <p className="text-red-400 text-xs text-center lg:text-left lg:absolute lg:top-12">
                {errorMsg}
              </p>
            )}
          </div>

          <button
            className="w-full py-2 text-sm font-semibold text-white bg-teal-400 rounded-md mt-4
          hover:bg-teal-300 active:bg-teal-400 whitespace-nowrap lg:m-0 lg:w-1/5 lg:text-base"
          >
            Shorten it!
          </button>
        </div>
      </form>

      <div
        className="w-full px-4 pt-48 pb-24 -mt-16 flex flex-col items-center bg-neutral-200 z-0
      md:px-12 xl:px-24"
      >
        <ShorterUrlList
          shorterUrlList={shorterUrlList}
          longerUrlList={logerUrlList}
          isLoading={isLoading}
        />
        <h1 className="w-11/12 text-2xl text-center font-bold text-slate-800 mb-8 lg:text-4xl">
          Advanced Statistics
        </h1>
        <p className="w-full text-base text-gray-500 text-center mb-16 lg:w-1/2 xl:text-lg">
          Track how your links performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="w-full flex flex-col items-center mt-12 lg:flex-row">
          <Card
            title={cardInfo[0].title}
            image={cardInfo[0].image}
            description={cardInfo[0].description}
            styles="lg:mb-32"
          />
          <div className="w-2 h-24 bg-teal-300 mx-auto lg:w-36 lg:h-2"></div>
          <Card
            title={cardInfo[1].title}
            image={cardInfo[1].image}
            description={cardInfo[1].description}
            styles="lg:mb-16 lg:mt-16"
          />
          <div className="w-2 h-24 bg-teal-300 mx-auto lg:w-36 lg:h-2"></div>
          <Card
            title={cardInfo[2].title}
            image={cardInfo[2].image}
            description={cardInfo[2].description}
            styles="lg:mt-32"
          />
        </div>
      </div>

      <div
        className="w-full bg-[url(/src/assets/bg-boost-desktop.svg)] bg-cover bg-violet-950
      flex flex-col items-center px-4 py-16 gap-y-8"
      >
        <h1 className="text-white text-2xl text-center font-bold lg:text-4xl">
          Boost your links today
        </h1>
        <button
          className="px-8 py-2 text-xl text-white bg-teal-400 rounded-3xl
         hover:bg-teal-300 active:bg-teal-400"
        >
          Get started
        </button>
      </div>
    </section>
  );
}
