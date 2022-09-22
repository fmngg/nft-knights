import React from "react";

import styles from "./RoadmapItem.module.scss";

const RoadmapItem = ({ title, text, date, img, color }) => {
  return (
    <div className={styles.roadmapItem}>
      <div data-wow-duration="2s" className={`${styles.date} wow fadeInLeft`}>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={`${styles.block} wow fadeInLeft`}>
        <img
          className={styles.status}
          src={img}
          style={{
            boxShadow: `0 0 10px ${color}, 0 0 30px ${color}, 0 0 80px ${color}`,
            borderColor: color,
          }}
        />
        <h1>{title}</h1>
        <p className={styles.description}>{text}</p>
      </div>
    </div>
  );
};

export default RoadmapItem;
