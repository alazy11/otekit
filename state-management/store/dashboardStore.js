// dashboardStore


import { configureStore } from '@reduxjs/toolkit';
import langSlice from '../slices/langSlice';
import sideNavSlice from '../slices/open-slices/sideNavSlice';
import seoFormSlice from '../slices/open-slices/seoFormSlice';
import showModelSlice from '../slices/open-slices/showModelSlice';
import dashHeaderSlice from '../slices/dashHeaderSlice';

export function makeStore() {
  return configureStore({
    reducer: {
        lang: langSlice,
        sideNavOpen:sideNavSlice,
        dashHeader:dashHeaderSlice,
        seoForm:seoFormSlice,
        showModel:showModelSlice
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();