import React from 'react';

import styles from './Classes.module.scss';

import { classes } from '../../assets/classes';

import Button from '../../components/Button/Button';
import { RefContext } from '../../App';
import ClassesItem from '../../components/ClassesItem/ClassesItem';

const Classes = () => {
  const { classesRef } = React.useContext(RefContext);

  return (
    <div ref={classesRef} className={styles.classes}>
      <div className={styles.blur}>
        <h1 className={styles.title}>Choose your role</h1>
        <div data-wow-duration="1.5s" className={`${styles.roles} wow fadeInUp`}>
          {classes.map((obj) => (
            <ClassesItem {...obj} />
          ))}
        </div>
        <div className={styles.button}>
          <Button className={styles.button} title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Classes;
