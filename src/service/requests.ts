import { Dispatch } from '@reduxjs/toolkit';
import { getError, getLoading, getSuccess, getSuccessByName, getSuccessSkills } from 'store/pokemons/pokemon.slice';

import api from './api';

export const getPokemons = async (dispatch: Dispatch, offset: number, limit: number) => {
  dispatch(getLoading());

  try {
    const { data } = await api.get(`?offset=${offset}&limit=${limit}`);

    dispatch(getSuccess(data));
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getPokemonsByName = async (dispatch: Dispatch, search: string) => {
  dispatch(getLoading());

  try {
    const {
      data: { forms },
    } = await api.get(`/${search}/`);

    dispatch(getSuccessByName(forms));
  } catch (e) {
    dispatch(getError('Error message'));
  }
};

export const getPokemonsSkills = async (dispatch: Dispatch, name: string) => {
  dispatch(getLoading());

  try {
    const { data } = await api.get(`/${name}`);

    dispatch(getSuccessSkills(data));
  } catch (error) {
    dispatch(getError(error));
  }
};
