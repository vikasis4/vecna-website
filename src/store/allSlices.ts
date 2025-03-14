import authSlice from "@/packages/navbar/slice/navbarSlice";
import homepageSlice from "@/modules/landingPage/slice/landingPageSlice";

const sliceReducers = {
  [authSlice.reducerPath]: authSlice.reducer,
  [homepageSlice.reducerPath]: homepageSlice.reducer,
};

export default sliceReducers;
