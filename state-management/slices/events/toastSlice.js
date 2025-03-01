import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  open: false,
  loading: true,
  type: "success",
  message:""
};

const showToastSlice = createSlice({
  name: 'showToast',
  initialState,
  reducers: {
    show(state, action) {
      state.open = action.payload;
    },
    setToastLoading(state, action) {
      state.loading = action.payload;
    },
    setToastType(state, action) {
      state.type = action.payload;
    },
    setToastMessage(state, action) {
      state.message = action.payload;
    }
  }
})

export const { show, setToastLoading, setToastType,setToastMessage } = showToastSlice.actions;
export default showToastSlice.reducer;