import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navbarSliceTypes } from "../types/navbarTypes";
import { useAppDispatch } from "@/store/hooks";

const initialState: navbarSliceTypes = {
  isScrolled: false,
  isMenuOpen: false,
};

const authSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {      
      state.isMenuOpen = action.payload;
    },
  },
});

const { setIsScrolled, setIsMenuOpen } = authSlice.actions;

export const navbarActions = () => {
  const dispatch = useAppDispatch();
  return {
    setIsScrolled: (isScrolled: boolean) => dispatch(setIsScrolled(isScrolled)),
    setIsMenuOpen: (isMenuOpen: boolean) => dispatch(setIsMenuOpen(isMenuOpen)),
  };
};

export default authSlice;
