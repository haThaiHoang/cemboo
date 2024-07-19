import { createReducer } from '@reduxjs/toolkit';

import { toggleMenu } from './actions';

export interface UiState {
  isMenuOpened: boolean
}

export const defaultState: UiState = {
  isMenuOpened: false
};

export default createReducer<UiState>(defaultState, builder => {
  builder
    .addCase(toggleMenu, (state) => {
      state.isMenuOpened = !state.isMenuOpened
    })
})
