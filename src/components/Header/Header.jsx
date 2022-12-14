import React from 'react';
import { RefContext } from '../../App';
import Button from '../Button/Button';
import styles from './Header.module.scss';

import img from '../../assets/images/header/apps.svg';

const Header = () => {
  const scrollHandle = (obj) => {
    window.scrollTo({
      top: obj.current.offsetTop,
      behavior: 'smooth',
    });
    setMenuActive(false);
  };

  const { aboutRef, classesRef, howToPlayRef, roadmapRef, showcaseRef } =
    React.useContext(RefContext);

  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>
          Knights <br /> & Dragons
        </h1>
      </div>
      <ul className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
        <li onClick={() => scrollHandle(aboutRef)}>About</li>
        <li onClick={() => scrollHandle(classesRef)}>Classes</li>
        <li onClick={() => scrollHandle(howToPlayRef)}>How To Play</li>
        <li onClick={() => scrollHandle(roadmapRef)}>Roadmap</li>
        <li onClick={() => scrollHandle(showcaseRef)}>Showcase</li>
        <li>
          <Button title="Join Discord" />
        </li>
      </ul>
      <div className={styles.mobileButton} onClick={() => setMenuActive(!menuActive)}>
        <img src={img} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
