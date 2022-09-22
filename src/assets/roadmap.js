import cross from "../assets/images/roadmap/cross.svg";
import check from "../assets/images/roadmap/check.svg";
import clock from "../assets/images/roadmap/clock.svg";

const GREEN = "#8ac926";
const YELLOW = "#ffff72";
const RED = "#d62828";

export const roadmapItems = [
  {
    id: 0,
    color: GREEN,
    img: check,
    date: "april - may",
    title: "Grand Opening",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.",
  },
  {
    id: 1,
    img: check,
    color: GREEN,
    date: "july - september",
    title: "Great Benefits",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.",
  },
  {
    id: 2,
    img: clock,
    color: YELLOW,
    date: "october - december",
    title: "Early Access",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.",
  },
  {
    id: 3,
    img: cross,
    color: RED,
    date: "january - february",
    title: "New Merch",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.",
  },
  {
    id: 4,
    img: cross,
    color: RED,
    date: "march - april",
    title: "Holders Ranking",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit.Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit.",
  },
];
