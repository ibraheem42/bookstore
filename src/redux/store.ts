import { createWrapper } from 'next-redux-wrapper';

import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
