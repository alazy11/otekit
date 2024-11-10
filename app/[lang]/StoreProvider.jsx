// app/redux-provider.js
"use client";

import { Provider } from "react-redux";
import { store } from "@/state-management/store/dashboardStore";
import { setLang,setDictionary } from "@/state-management/slices/langSlice";


export default function ReduxProvider({ children,lang,dic }) {
    store.dispatch(setLang(lang));
    store.dispatch(setDictionary(dic));
    
  return <Provider store={store}>{children}</Provider>;
}