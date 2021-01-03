import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";

const reducers = combineReducers({ auth: authReducer });

export const store = configureStore({
        reducer: reducers,
        devTools: process.env.NODE_ENV === "production" ? false : true,
});

export type RootState = ReturnType<typeof reducers>;
