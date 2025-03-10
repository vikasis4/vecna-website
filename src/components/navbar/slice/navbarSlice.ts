import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navbarSliceTypes } from "../types/navbarTypes";
import { useAppDispatch } from "@/store/hooks";

const initialState: navbarSliceTypes = {
  isScrolled: false,
  isMenuOpen: false,
  trailIndex: -1,
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
    setTrailIndex: (state, action: PayloadAction<number>) => {
      state.trailIndex = action.payload;
    },
  },
});

const { setIsScrolled, setIsMenuOpen, setTrailIndex } = authSlice.actions;

export const navbarActions = () => {
  const dispatch = useAppDispatch();
  return {
    setIsScrolled: (value: boolean) => dispatch(setIsScrolled(value)),
    setIsMenuOpen: (value: boolean) => dispatch(setIsMenuOpen(value)),
    setTrailIndex: (value: number) => dispatch(setTrailIndex(value)),
  };
};

export default authSlice;
