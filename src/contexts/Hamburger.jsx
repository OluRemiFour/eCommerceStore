import { createContext, useContext, useState } from "react";

const HamburgerContext = createContext();
function HamburgerProvider({ children }) {
  const [isToggle, setIsToggle] = useState(false);
  const toggleHamburger = () => setIsToggle(!isToggle);
  return (
    <HamburgerContext.Provider
      value={{ isToggle, setIsToggle, toggleHamburger }}
    >
      {children}
    </HamburgerContext.Provider>
  );
}

function useHamburger() {
  const context = useContext(HamburgerContext);
  if (context === undefined)
    throw new Error("Hamburger Context was used outside Provider");
  return context;
}

export { HamburgerProvider, useHamburger };
