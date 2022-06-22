import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name: "photos",
    initialState: {
        photos: [],
        results: "",
        pages: 1,
        loading: false
    },
    reducers: {
        getPhotos: (state, { payload }) => {
            state.photos = payload;
        },
        setPage: (state, { payload }) => {
            state.pages = payload;
        },
        setResults: (state, { payload }) => {
            state.results = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }
    }
})

export const { getPhotos, setPage, setResults , setLoading } = photoSlice.actions;
export default photoSlice.reducer;
