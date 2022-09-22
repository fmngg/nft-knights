import React from "react";
import { RefContext } from "../../App";

import styles from "./Footer.module.scss";

import discord from "../../assets/images/footer/discord.svg";
import github from "../../assets/images/footer/github.svg";
import linkedin from "../../assets/images/footer/linkedin.svg";

const Footer = () => {
  const scrollHandle = (obj) => {
    window.scrollTo({
      top: obj.current.offsetTop,
      behavior: "smooth",
    });
    console.log(obj);
  };

  const { aboutRef, classesRef, howToPlayRef, roadmapRef, showcaseRef } =
    React.useContext(RefContext);

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <p
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Knights <br /> & Dragons
          </p>
          <div className={styles.social}>
            <a target="_blank" href="https://github.com/fmngg">
              <img src={github} />
            </a>
            <a target="_blank" href="">
              <img src={discord} />
            </a>
            <a target="_blank" href="">
              <img src={linkedin} />
            </a>
          </div>
        </div>
        <ul className={styles.right}>
          <li onClick={() => scrollHandle(aboutRef)}>About</li>
          <li onClick={() => scrollHandle(classesRef)}>Classes</li>
          <li onClick={() => scrollHandle(howToPlayRef)}>How To Play</li>
          <li onClick={() => scrollHandle(roadmapRef)}>Roadmap</li>
          <li onClick={() => scrollHandle(showcaseRef)}>Showcase</li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>© 2022 K&D. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
