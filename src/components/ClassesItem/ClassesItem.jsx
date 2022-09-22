import React from "react";

import styles from "./ClassesItem.module.scss";

const ClassesItem = ({ id, color, border, img, title, description }) => {
  const [active, setActive] = React.useState(-1);

  return (
    <div
      onClick={() => {
        active === id ? setActive(-1) : setActive(id);
      }}
      className={`${styles.item} ${active === id ? styles.active : ""}`}
    >
      <div
        className={`${styles.role}`}
        style={{
          backgroundColor: color,
          borderColor: border,
          color: border,
        }}
      >
        <img src={img} />
        <h1>{title.toUpperCase()}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ClassesItem;
