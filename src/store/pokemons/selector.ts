import { RootState } from 'store/store';

export const selectLoading = (state: RootState) => state.pokemons.isLoading;
export const selectPokemons = (state: RootState) => state.pokemons.data;
export const selectCount = (state: RootState) => state.pokemons.count;
export const selectPokemonsSkills = (state: RootState) => state.pokemons.skills;
export const selectPokemonsError = (state: RootState) => state.pokemons.error;
