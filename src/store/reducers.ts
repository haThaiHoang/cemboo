import { combineReducers } from '@reduxjs/toolkit';

import { baseRestApi } from '@/utils/base-rest-api';
import ui from './ui/reducers';

export default combineReducers({
  [baseRestApi.reducerPath]: baseRestApi.reducer,
  ui
});
