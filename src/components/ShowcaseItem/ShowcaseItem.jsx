import React from 'react';

import styles from './ShowcaseItem.module.scss';
import ethereum from '../../assets/images/nfts/ethereum.svg';

const ShowcaseItem = ({ img, id }) => {
  return (
    <div className={styles.item}>
      <img src={img} />
      <div className={styles.bottom}>
        <div className={styles.left}>
          <p>K&D</p>
          <h1>#{id}</h1>
        </div>
        <div className={styles.right}>
          <p>Price</p>
          <div className={styles.price}>
            <h1>1.0 ETH</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
