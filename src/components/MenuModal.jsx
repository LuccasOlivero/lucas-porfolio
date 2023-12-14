import { AnimatePresence } from "framer-motion";
import { useToggleMenu } from "../Context/ToggleMenuContext";
import MenuToggle from "./MenuToggle";

// my favorite component <3
function MenuModal() {
  const { isOpenMenuToggle } = useToggleMenu();
  return (
    <AnimatePresence>{isOpenMenuToggle && <MenuToggle />}</AnimatePresence>
  );
}

export default MenuModal;
