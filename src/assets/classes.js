import healer from "./images/classes/healer.svg";
import knight from "./images/classes/knight.svg";
import mage from "./images/classes/magic.svg";
import hammer from "./images/classes/thor.svg";

export const classes = [
  {
    id: 0,
    title: "Healer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Temporibus, ipsam sequi quasi quas repudiandae velit tempore
    consectetur? Doloribus at quas quo deserunt ipsum. Repellat
    explicabo illo ipsa excepturi voluptatum omnis!`,
    img: healer,
    color: "#c4f0de",
    border: "#4ed5ae",
  },
  {
    id: 1,
    title: "Knight",
    description:
      "Knight is a master of swords and a believer of physical strikes. They are willing to sacrifice themselves for the final success.",
    img: knight,
    color: "#cbdefa",
    border: "#54a2f3",
  },
  {
    id: 2,
    title: "Mage",
    description:
      "Mage catsts elemental smashes and makes sure evey attack hits their targets at all times.",
    img: mage,
    color: "#decee9",
    border: "#9374c9",
  },
  {
    id: 3,
    title: "Hammer",
    description:
      "Hammer is a Hero that loves to play with their hammer and always the tanky beast who takes damages for their fellow Heroes ...",
    img: hammer,
    color: "#e9d0c6",
    border: "#b77a72",
  },
];
