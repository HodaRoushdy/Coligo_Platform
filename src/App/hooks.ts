import { createSlice } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { IStateProps } from "../components/interfaces";



const initialState: IStateProps = {
  isLoggedIn:false
};

const isLoggedInSlicer = createSlice({
name: 'isLogged',
initialState,
    reducers: {
        changeStatus: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },
    }
    })
export const { changeStatus } = isLoggedInSlicer.actions



export default isLoggedInSlicer.reducer

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
