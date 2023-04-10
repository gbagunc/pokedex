export interface IPokemonCardProps {
  id: string | number;
  name: string;
  handleOpenPokemonCard: (name: string) => void;
}
