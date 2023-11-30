import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as marketReducer } from "./market/market.slice";
import { reducer as showcaseReducer } from "./showcase/showcase.slice";

const reducer = combineReducers({
  showcase: showcaseReducer,
  market: marketReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
