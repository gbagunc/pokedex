import { LoadingOutlined } from '@ant-design/icons';
import { Row, Spin } from 'antd';

import PokemonCard from 'components/pokemon-card/PokemonCard';

import { IPokemonsListProps } from './interface';

import styles from './PokemonList.module.scss';

const PokemonsList = ({ pokemonsData, onOpenModal }: IPokemonsListProps) => {
  return (
    <Row className={styles.pokemonsContainer} gutter={[0, 40]}>
      {!pokemonsData && <Spin indicator={<LoadingOutlined className={styles.loadingIcon} />} />}

      {pokemonsData?.map(({ id, name }) => {
        return <PokemonCard key={id} id={id} name={name} handleOpenPokemonCard={onOpenModal} />;
      })}
    </Row>
  );
};

export default PokemonsList;
