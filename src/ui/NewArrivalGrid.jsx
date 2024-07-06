import { Link } from "react-router-dom";

function NewArrivalGrid() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  let visibleItems = [];
  let start = 0;
  for (let i = 0; i < 2; i++) {
    console.log(i);
    visibleItems.push(items[(start + i) % items.length]);
    console.log(visibleItems);
  }
  return (
    <div className="py-12  grid grid-cols-[1fr]  sm:grid-cols-[1fr_1fr_1fr_1fr] gap-4 sm:grid-rows-2 sm:h-[40rem] min-h-screen text-white/90">
      <div className=" sm:col-span-2 sm:row-span-2 bg-[url('/img/newarrival1.png')] rounded-md px-12  relative  bg-origin-content  bg-black  bg-no-repeat   md:bg-auto sm:bg-cover bg-center ">
        <div className="absolute sm:bottom-12  pt-2 sm:pt-0  space-y-1">
          <h3 className="font-poppin font-[800] md:text-2xl sm:text-2xl text-lg">
            Play Station 5
          </h3>
          <p className="font-inter text-xs text-white/70 ">
            Black and White version of the PS5 <br /> coming out on sale.
          </p>
          <Link
            className="space-x-2 flex items-center content-center font-inter text-md md:text-base hover:text-white/45"
            to=""
          >
            <span className="pb-1 border-b border-b-white/95 "> Shop now</span>
            {/* <span className="text-2xl">&rarr;</span> */}
          </Link>
        </div>
      </div>
      <div className=" sm:col-start-3 sm:col-end-5 px-6  relative  bg-black rounded-md">
        <div className=" w-full h-full    bg-[url('/img/newarrival2.png')]  bg-no-repeat sm:bg-cover bg-contain md:bg-auto bg-bottom ">
          <div className="absolute bottom-4 space-y-1">
            <h2 className="font-poppin font-[800] md:text-2xl sm:text-2xl text-lg">
              Women’s Collections
            </h2>
            <p className="font-inter text-xs text-white/70">
              Featured woman collections that <br /> give you another vibe.
            </p>
            <Link
              className="space-x-2 flex items-center content-center text-md md:text-base font-inter hover:text-white/45"
              to=""
            >
              <span className="pb-1 border-b border-b-white/95 ">Shop now</span>
              {/* <span className="text-2xl">&rarr;</span> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black relative px-6 rounded-md">
        <div className="  h-full bg-[url('/img/newarrival3.png')] bg-no-repeat bg-center  md:bg-auto bg-contain bg-conain ">
          <div className="absolute bottom-4 space-y-1">
            <h2 className="font-poppin font-[800] md:text-2xl sm:text-2xl text-lg">
              Speaker
            </h2>
            <p className="font-inter text-xs text-white/70">
              Amazon wireless speakers
            </p>
            <Link
              className="space-x-2 flex items-center content-center text-md md:text-base font-inter hover:text-white/45"
              to=""
            >
              <span className="pb-1 border-b border-b-white/95 ">Shop now</span>
              {/* <span className="text-2xl">&rarr;</span> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black px-6 relative  rounded-md">
        <div className="  h-full bg-[url('/img/newarrival4.png')] bg-no-repeat bg-contain md:bg-auto bg-center  ">
          <div className="absolute bottom-16 space-y-1">
            <h2 className="font-poppin font-[800] md:text-2xl sm:text-2xl text-lg">
              Perfume
            </h2>
            <p className="font-inter text-xs text-white/70">
              GUCCI INTENSE OUD EDP
            </p>
            <Link
              className="space-x-2 flex items-center content-center text-md md:text-base font-inter hover:text-white/45"
              to=""
            >
              <span className="pb-1 border-b border-b-white/95 ">Shop now</span>
              {/* <span className="text-2xl">&rarr;</span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalGrid;
