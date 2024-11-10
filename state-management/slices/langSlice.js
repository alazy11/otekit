import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lang:'en',
    dictionary:{

    },
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang(state, action) {
        state.lang = action.payload;
    },
    setDictionary(state, action) {
      state.dictionary = action.payload;
    }
  }
})

export const { setLang,setDictionary } = langSlice.actions;
export default langSlice.reducer;