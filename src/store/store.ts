import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseQuery";
import sliceReducers from "./allSlices";


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    ...sliceReducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NEXT_PUBLIC_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
