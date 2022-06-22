import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photosSlice from './slice';

export const allReducer = combineReducers({
    photos: photosSlice
})

export const store = configureStore({
    reducer: allReducer
})