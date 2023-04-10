import { Col, Row } from 'antd';

import { Input } from 'components/input/Input';
import Pagination from 'components/pagination/Pagination';
import PokemonsList from 'components/pokemons-list/PokemonsList';

import { useMain } from './useMain';

import styles from './Main.module.scss';

const Main = () => {
  const { pokemonsData, error, limit, count, current, handleOpenPokemonCard, handleSearch, onPageChange } = useMain();

  return (
    <div className={styles.main}>
      <Row className={styles.inputContainer}>
        <Col>
          <Input placeholder="Search..." onChange={handleSearch} />
        </Col>
      </Row>

      {error ? <h2>No results</h2> : <PokemonsList pokemonsData={pokemonsData} onOpenModal={handleOpenPokemonCard} />}

      <Row className={styles.pagination} justify="end">
        <Pagination total={count} pageSize={limit} current={current} onPageChange={onPageChange} />
      </Row>
    </div>
  );
};

export default Main;
