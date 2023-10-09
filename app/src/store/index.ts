import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import auth from './reducers/auth';

const reducers = combineReducers({
  auth
});

const store = configureStore({
  reducer: reducers
});

export type StoreState = ReturnType<typeof store.getState>;
export default store;
export { reducers };
