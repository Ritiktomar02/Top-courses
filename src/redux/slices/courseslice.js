import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../data";


export const fetchdata=createAsyncThunk('fetchdata',async()=>{

    const res=await fetch(apiUrl);
    return res.json();
})

  

export const courseslice=createSlice({
    name:"course",
    initialState:{
        isLaoding:false,
        data:null,
        isError:null
    },
    reducers:{
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.isLaoding=false;
            state.data=action.payload
        });
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.isLaoding=true
        })
        builder.addCase(fetchdata.rejected,(state,action)=>{
            state.isError=action.payload;
            console.log("error",action.payload)
        })
   
    }
})

export const {}=courseslice.actions

export default courseslice.reducer