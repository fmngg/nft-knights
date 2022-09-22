import React from "react";
import { roadmapItems } from "../../assets/roadmap";
import RoadmapItem from "../../components/RoadmapItem/RoadmapItem";

import styles from "./Roadmap.module.scss";

import loading from "../../assets/images/loading.svg";
import { RefContext } from "../../App";

const Roadmap = () => {
  const { roadmapRef } = React.useContext(RefContext);

  return (
    <div ref={roadmapRef} className={styles.roadmap}>
      <div className={styles.content}>
        <h1 className={styles.title}>Roadmap</h1>
        {roadmapItems.map((obj) => (
          <RoadmapItem key={obj.id} {...obj} />
        ))}
        <img className={styles.loading} width={35} src={loading} />
      </div>
    </div>
  );
};

export default Roadmap;
