import { createContext, useContext, useState } from "react";

const ToggleMenuContext = createContext();

function ToggleMenuProvider({ children }) {
  const [isOpenMenuToggle, setIsOpenMenuToggle] = useState(false);

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
