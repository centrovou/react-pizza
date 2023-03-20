import React from 'react';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        нечего не найдено
      </h1>
      <p className={styles.descr}>
        к сожалению данная страница отсутвует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
