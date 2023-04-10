import axios from 'axios';

export const BASE_URl = 'https://pokeapi.co/api/v2/pokemon';

export const imageUrl = (id: string | number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const api = axios.create({
  baseURL: BASE_URl,
});

export default api;
