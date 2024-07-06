function CategoryItem({ item, index }) {
  return (
    <div
      className="min-w-full   transition-transform   duration-500 ease-in-out rounded-sm  cursor-pointer"
      key={index}
      style={{
        transform: index === 6 ? "translateX(-10%)" : " ",
      }}
    >
      {/* //min-w-[15rem]  */}
      <div className=" px-4 pt-3 pb-5 border   rounded-sm  flex flex-col place-items-center place-content-center  group hover:bg-red-500">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-28 w-full h-auto text-red-400    object-contain"
        />

        <p className="font-md font-poppin text-black/80 font-[400]  group-hover:text-white/90 ">
          {item.name}
        </p>
      </div>
      {/* <button className="bg-black text-white w-full text-center  py-2 font-inter  hover:bg-black/70">
                <span> Add to cart</span>
              </button> */}
    </div>
  );
}

export default CategoryItem;
