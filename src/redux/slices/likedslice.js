import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    likedarray: [],
};

export const likedslice = createSlice({
    name: "like",
    initialState,
    reducers: {
        clickhandler: (state, action) => {
            if (state.likedarray.includes(action.payload)) {
                state.likedarray = state.likedarray.filter((likeid) => likeid !== action.payload);
                toast.warning("Like removed");
            } else {
                state.likedarray.push(action.payload);
                toast.success("Liked successfully");
            }
        }
    }
});

export const { clickhandler } = likedslice.actions;

export default likedslice.reducer;
