import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modal/modal.slice';
import pokemonSlice from './pokemons/pokemon.slice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice,
    modal: modalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
