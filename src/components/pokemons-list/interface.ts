export interface IPokemonsItem {
  name: string;
  url: string;
  id: number | string;
}

export interface IPokemonsListProps {
  pokemonsData: IPokemonsItem[] | undefined;
  onOpenModal: (name: string) => void;
}
