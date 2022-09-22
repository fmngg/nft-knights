import React from "react";

import styles from "./About.module.scss";

import Carousel from "../../components/Carousel/Carousel";
import { RefContext } from "../../App";

const About = () => {
  const { aboutRef } = React.useContext(RefContext);
  return (
    <div ref={aboutRef} className={styles.about}>
      <div className={styles.text}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          vero, doloribus excepturi quis, itaque illo fugiat magnam qui nemo sit
          aliquam quae cumque? Natus ipsum tempore numquam cupiditate commodi
          eius!
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default About;
