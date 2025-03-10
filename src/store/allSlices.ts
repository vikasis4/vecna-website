import authSlice from "@/components/navbar/slice/navbarSlice";

const sliceReducers = {
  [authSlice.reducerPath]: authSlice.reducer,
};

export default sliceReducers;
