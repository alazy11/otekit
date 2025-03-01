// dashboardStore

import { configureStore } from '@reduxjs/toolkit';
import langSlice from '../slices/langSlice';
import sideNavSlice from '../slices/open-slices/sideNavSlice';
import seoFormSlice from '../slices/open-slices/seoFormSlice';
import showModelSlice from '../slices/open-slices/showModelSlice';
import dashHeaderSlice from '../slices/dashHeaderSlice';
import seoDataSlice from "../slices/data/seoDataSlice";
import contentDataSlice from "../slices/data/contentDataSlice";
import mediaDataSlice from "../slices/data/mediaDataSlice";
import showNotificationSlice from "../slices/events/notification-slice";
import showToastSlice from "../slices/events/toastSlice";
import teamDataSlice from "../slices/data/teamDataSlice";
import uploadDataSlice from "../slices/uploadDataSlice";

export function makeStore() {
  return configureStore({
    reducer: {
        lang: langSlice,
        sideNavOpen:sideNavSlice,
        dashHeader:dashHeaderSlice,
        seoForm:seoFormSlice,
        showModel:showModelSlice,
        seoData:seoDataSlice,
        showNotification:showNotificationSlice,
        contentData: contentDataSlice,
        mediaData:mediaDataSlice,
        showToast:showToastSlice,
        teamData: teamDataSlice,
        uploadData:uploadDataSlice
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();