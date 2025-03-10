import React from "react";
import { navbarActions } from "../slice/navbarSlice";

export const useNavbarScroll = () => {
  const { setIsScrolled } = navbarActions();
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  });
};
