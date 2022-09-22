import React from "react";
import { RefContext } from "../../App";
import { carouselItems } from "../../assets/carousel";
import ShowcaseItem from "../../components/ShowcaseItem/ShowcaseItem";

import styles from "./Showcase.module.scss";

const Showcase = () => {
  const { showcaseRef } = React.useContext(RefContext);

  return (
    <div ref={showcaseRef} className={styles.showcase}>
      <div className={styles.title}>SHOWCASE</div>
      <div className={styles.block}>
        {carouselItems.slice(carouselItems.length / 2).map((obj) => (
          <ShowcaseItem key={obj.id} {...obj} />
        ))}
      </div>
      <div className={styles.blockReverse}>
        {carouselItems.slice(0, carouselItems.length / 2).map((obj) => (
          <ShowcaseItem key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
