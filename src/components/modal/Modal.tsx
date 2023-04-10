import React from 'react';
import { Col, Modal as AntdModal, Row } from 'antd';
import { imageUrl } from 'service/api';

import { IStats } from './interface';
import { useModal } from './useModal';

import styles from './Modal.module.scss';

export const Modal = () => {
  const { opened, skills, stats, handleCloseModal } = useModal();

  return (
    <AntdModal className={styles.modalDialog} open={opened} onCancel={handleCloseModal} footer={false} closable={false}>
      <div className={styles.modalContent}>
        <Row justify="space-between" align="middle">
          <Col span={6} className={styles.modalImage}>
            <img src={imageUrl(skills?.id)} />
          </Col>
          <Col span={14}>
            {stats?.map(({ name, value }: IStats) => (
              <Row key={name} justify="space-between">
                <Col span={12} className={styles.skillName}>
                  {name}
                </Col>
                <Col span={6} className={styles.skillValue}>
                  {value}
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </div>
    </AntdModal>
  );
};
