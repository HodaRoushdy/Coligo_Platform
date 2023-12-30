import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlicer  from "./hooks";


export const store = configureStore({
    reducer: {
        isLogged: isLoggedInSlicer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
