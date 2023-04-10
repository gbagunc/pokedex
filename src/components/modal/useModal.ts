import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsSkills } from 'service/requests';
import { closeModal } from 'store/modal/modal.slice';
import { selectModal } from 'store/modal/selector';
import { selectPokemonsSkills } from 'store/pokemons/selector';

import { IStat, IStats } from './interface';

export const useModal = () => {
  const dispatch = useDispatch();

  const { opened, name } = useSelector(selectModal);
  const skills = useSelector(selectPokemonsSkills);

  const stats: IStats[] = skills?.stats?.map((stat: IStat) => {
    return {
      name: stat.stat.name.replace('-', ' '),
      value: stat.base_stat,
    };
  });

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (name) {
      getPokemonsSkills(dispatch, name);
    }
  }, [name]);

  return { handleCloseModal, opened, skills, stats };
};
