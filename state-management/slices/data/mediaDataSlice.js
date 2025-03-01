import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data:[],
    total:0,
    loading:true,
    error:false,
    serverError:false,
    failed:false,
    refresh:true
};

const mediaDataSlice = createSlice({
  name: 'mediaData',
  initialState,
  reducers: {
    setData(state, action) {
        state.data = action.payload;
    },
    setOneData(state, action) {
        state.data.unshift(action.payload);
        // state.data.unshift()
    },
    setTotal(state, action) {
        state.total = action.payload;
    },
    setError(state, action) {
        state.error = action.payload;
    },
    setLoading(state, action) {
        state.loading = action.payload;
    },
    setFailed(state, action) {
        state.failed = action.payload;
    },
    setServerError(state, action) {
        state.serverError = action.payload;
    },
    setRefresh(state, action) {
        state.refresh = action.payload;
    },
    resetStates(state, action) {

        state.loading=initialState.loading;
        state.error=initialState.error;
        state.serverError=initialState.serverError;
        state.failed=initialState.failed;

        // console.log("state",state)
        // console.log("state--data",state.data)

    },
  }
})

export const { setData,setError,setFailed,setLoading,resetStates,setServerError,setTotal,setOneData,setRefresh } = mediaDataSlice.actions;
export default mediaDataSlice.reducer;