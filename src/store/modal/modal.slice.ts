import { createSlice } from '@reduxjs/toolkit';

import { IModal } from './interface';

export const initialState: IModal = {
  opened: false,
  name: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload: { name } }) => {
      state.opened = true;
      state.name = name;
    },
    closeModal: state => {
      state.opened = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
