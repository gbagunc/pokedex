import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'helpers/debounce';
import { getPokemons, getPokemonsByName } from 'service/requests';
import { openModal } from 'store/modal/modal.slice';
import { IPokemon } from 'store/pokemons/interface';
import { selectCount, selectPokemons, selectPokemonsError } from 'store/pokemons/selector';

export const useMain = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(selectPokemons);
  const error = useSelector(selectPokemonsError);
  const count = useSelector(selectCount);

  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [current, setCurrent] = useState<number>(1);

  const [searchValue, setSearchValue] = useState<string>('');

  const pokemonsData = pokemons?.map(({ url, name }: IPokemon) => {
    const urlId = url.split('/');
    const id = urlId[urlId.length - 2];

    return {
      url,
      name,
      id,
    };
  });

  const onPageChange = (page: number, pageSize: number) => {
    setLimit(pageSize);
    setCurrent(page);
    setOffset(page * limit - limit);
  };

  const handleOpenPokemonCard = (name: string) => {
    dispatch(
      openModal({
        name,
      })
    );
  };

  const handleSearch = debounce((value: string) => {
    setSearchValue(value);
  }, 500);

  useEffect(() => {
    if (searchValue) {
      getPokemonsByName(dispatch, searchValue);
    } else {
      getPokemons(dispatch, offset, limit);
    }
  }, [searchValue, offset, limit]);

  return {
    pokemonsData,
    error,
    limit,
    count,
    current,
    handleOpenPokemonCard,
    handleSearch,
    onPageChange,
  };
};
