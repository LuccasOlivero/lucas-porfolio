import { createContext, useContext, useEffect, useState } from "react";

const ToggleMenuContext = createContext();

function ToggleMenuProvider({ children }) {
  const [isOpenMenuToggle, setIsOpenMenuToggle] = useState(false);

  useEffect(() => {
    if (isOpenMenuToggle) {
      // window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpenMenuToggle]);

  return (
    <ToggleMenuContext.Provider
      value={{
        isOpenMenuToggle,
        setIsOpenMenuToggle,
      }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
}

function useToggleMenu() {
  const context = useContext(ToggleMenuContext);
  if (context === undefined)
    throw new Error("ToggleMenuContext was used outside ToggleMenuProvider");
  return context;
}

export { useToggleMenu, ToggleMenuProvider };
