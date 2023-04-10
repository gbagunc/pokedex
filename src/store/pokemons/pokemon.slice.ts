import { createSlice } from '@reduxjs/toolkit';

import { IPokemonSlice } from './interface';

const initialState: IPokemonSlice = {
  isLoading: false,
  error: false,
  data: null,
  count: 0,
  skills: null,
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getLoading: state => {
      state.isLoading = true;
    },
    getSuccess: (state, { payload }) => {
      state.data = payload.results;
      state.isLoading = false;
      state.error = false;
      state.count = payload.count;
    },
    getSuccessByName: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = false;
      state.count = payload.count;
    },
    getError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getSuccessSkills: (state, { payload }) => {
      state.skills = payload;
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const { getLoading, getSuccess, getSuccessSkills, getSuccessByName, getError } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
