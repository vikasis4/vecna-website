import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { carosoulNoType, landingPageTyep } from "../types";
import { useAppDispatch } from "@/store/hooks";

const initialState: landingPageTyep = {
  sectionone: {
    carosoulNo: "1",
  },
};

const homepageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    setCarosoulNo: (state, action: PayloadAction<carosoulNoType>) => {
      state.sectionone.carosoulNo = action.payload;
    },
  },
});

const { setCarosoulNo } = homepageSlice.actions;

export const useLandingPageActions = () => {
  const dispatch = useAppDispatch();
  return {
    setCarosoulNo: (value: carosoulNoType) => dispatch(setCarosoulNo(value)),
  };
};

export default homepageSlice;
