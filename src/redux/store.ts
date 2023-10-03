// src/redux/store.ts

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
