import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploadUrl:''
};

const uploadDataSlice = createSlice({
  name: 'uploadData',
  initialState,
  reducers: {
    setUploadUrl(state, action) {
        state.uploadUrl = action.payload;
    },
  }
})

export const { setUploadUrl } = uploadDataSlice.actions;
export default uploadDataSlice.reducer;