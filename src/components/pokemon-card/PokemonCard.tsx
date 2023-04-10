import { memo } from 'react';
import { Col, Typography } from 'antd';
import { imageUrl } from 'service/api';

import { IPokemonCardProps } from './interface';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({ id, name, handleOpenPokemonCard }: IPokemonCardProps) => {
  return (
    <Col span={6} className={styles.cardWrapper} onClick={() => handleOpenPokemonCard(name)}>
      <Col span={15} className={styles.cardImage}>
        <img src={imageUrl(id)} />
      </Col>
      <Typography children={name} className={styles.title} />
    </Col>
  );
};

export default memo(PokemonCard);
