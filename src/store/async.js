import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPhotos , setLoading } from "./slice";

export const getPhotosAsync = createAsyncThunk(
    "getPhotos",
    async (_, { dispatch, getState }) => {
        const page = getState().photos.pages;
        const searchResults = getState().photos.results;
        try {
            setLoading(true);
            const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${searchResults}&client_id=baCVPLovaaWVMIwYhtJbseqXmQvy8FXz-CBTQw8HDGM`)
            if (response.status) {
                dispatch(getPhotos(response.data))
                setLoading(false);
            }
            if (!response.status) {
                dispatch(getPhotos(response.data))
                setLoading(false);
            }
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
)