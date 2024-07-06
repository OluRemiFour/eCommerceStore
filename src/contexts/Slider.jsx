import { createContext, useContext, useState } from "react";
import { todaysProduct } from "../constants/todayProduct";
import { categoriesProduct } from "../constants/categories";
import { bestSelling } from "../constants/best-selling";
import { products } from "../constants/products";

const SliderContext = createContext();

function SliderProvider({ children }) {
  const items = todaysProduct;
  const categoryItems = categoriesProduct;
  const product = products;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  return (
    <SliderContext.Provider
      value={{
        items,
        categoryItems,
        bestSelling,
        product,
        currentIndex,
        handlePrevClick,
        handleNextClick,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

function useSlider() {
  const context = useContext(SliderContext);
  if (context === undefined)
    throw new Error("Slider Context was used outside Provider");

  return context;
}

export { SliderProvider, useSlider };
