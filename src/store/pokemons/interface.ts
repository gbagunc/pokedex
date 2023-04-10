export interface IPokemonSlice {
  isLoading: boolean;
  error: boolean;
  data: IPokemon[] | null;
  count: number;
  skills: any | null;
}

export interface IPokemon {
  name: string;
  url: string;
}
