import { useEffect, useState } from "react";
function SalesCountDown({ type }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    if (type === "today") {
      let difference = +new Date("2024-07-30") - +new Date();
      let time = {};

      if (difference > 0) {
        time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return time;
    }
    if (type === "categories") {
      let difference = +new Date("2024-07-30") - +new Date();
      let time = {};

      if (difference > 0) {
        time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return time;
    }
  }

  if (type === "today")
    return (
      <div className="sm:flex hidden sm:space-x-4 space-x-1 mt-4 flex-1">
        <div className="text-center flex sm:gap-x-4 gap-x-2 items-center ">
          <div>
            <div className="font-inter lg:text-xl md:text-lg  text-md sm:font-bold font-light">
              Days
            </div>
            <div className="lg:text-4xl md:text-2xl sm:text-md text-md sm:font-extrabold font-bold">
              {timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days || "0"}
            </div>
          </div>
          <span className="lg:text-5xl md:text-3xl sm:text-2xl text-xl sm:font-bold font-light text-orange-800">
            :
          </span>
        </div>
        <div className="text-center flex sm:gap-x-4 gap-x-2 items-center ">
          <div>
            <div className="font-inter lg:text-xl md:text-lg  text-md sm:font-bold font-light">
              Hours
            </div>
            <div className="lg:text-4xl md:text-2xl sm:text-md text-md sm:font-extrabold font-bold">
              {timeLeft.hours <= 9
                ? `0${timeLeft.hours}`
                : timeLeft.hours || "0"}
            </div>
          </div>
          <span className="lg:text-5xl md:text-3xl sm:text-2xl text-xl sm:font-bold font-light text-orange-800">
            :
          </span>
        </div>
        <div className="text-center flex sm:gap-x-4 gap-x-2 items-center">
          <div>
            <div className="font-inter text-[1rem] font-boldfont-inter lg:text-xl md:text-lg   sm:font-bold font-light">
              Minutes
            </div>
            <div className="lg:text-4xl md:text-2xl sm:text-md text-md sm:font-extrabold font-bold">
              {timeLeft.minutes <= 9
                ? `0${timeLeft.minutes}`
                : timeLeft.minutes || "0"}
            </div>
          </div>
          <span className="lg:text-5xl md:text-3xl sm:text-2xl text-xl sm:font-bold font-light text-orange-800">
            :
          </span>
        </div>

        <div className="text-center flex sm:gap-x-4 gap-x-2 items-center ">
          <div>
            <div className="font-inter text-[1rem] font-boldfont-inter lg:text-xl md:text-lg   sm:font-bold font-light">
              Seconds
            </div>
            <div className="lg:text-4xl md:text-2xl sm:text-md text-md sm:font-extrabold font-bold">
              {timeLeft.seconds <= 9
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds || "0"}
            </div>
          </div>
          {/* <span className="text-5xl font-bold text-orange-800">:</span> */}
        </div>
      </div>
    );
  if (type === "categories")
    return (
      <div className="flex space-x-4 mt-4 flex-1">
        <div className="bg-white rounded-full px-2  sm:h-16 h-12 text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black sm:font-[600] font-extrabold">
            {timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days || "0"}
          </div>
          <div className="font-inter text-xs text-black sm:font-light font-extrabold">
            Days
          </div>
        </div>
        <div className="bg-white rounded-full  px-2  sm:h-16 h-12 text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black sm:font-[600] font-extrabold ">
            {timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours || "0"}
          </div>
          <div className="font-inter text-xs text-black sm:font font-bold">
            Hours
          </div>
        </div>
        <div className="bg-white rounded-full px-6  sm:h-16 h-14  text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black font-[600]">
            {timeLeft.minutes <= 9
              ? `0${timeLeft.minutes}`
              : timeLeft.minutes || "0"}{" "}
          </div>
          <div className="font-inter text-xs text-black sm:font-light font-bold">
            Minutes
          </div>
        </div>
        <div className="bg-white rounded-full    px-6  sm:h-16 h-14    text-center py-1 aspect-square flex flex-col items-center justify-center ">
          <div className="text-sm text-black font-[600]">
            {timeLeft.seconds <= 9
              ? `0${timeLeft.seconds}`
              : timeLeft.seconds || "0"}
          </div>
          <div className="font-inter text-xs text-black sm:font-light font-extrabold">
            Seconds
          </div>
        </div>
      </div>
    );
}

export default SalesCountDown;
