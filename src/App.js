import "./index.scss";
import React from "react";
import Header from "./components/Header/Header";
import About from "./sections/About/About";
import Classes from "./sections/Classes/Classes";
import HowToPlay from "./sections/HowToPlay/HowToPlay";
import Roadmap from "./sections/Roadmap/Roadmap";

import WOW from "wowjs";
import Showcase from "./sections/Showcase/Showcase";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";

export const RefContext = React.createContext();

function App() {
  React.useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      live: false,
    }).init();
  }, []);

  const aboutRef = React.useRef();
  const classesRef = React.useRef();
  const howToPlayRef = React.useRef();
  const roadmapRef = React.useRef();
  const showcaseRef = React.useRef();

  return (
    <div className="wrapper">
      <RefContext.Provider
        value={{ aboutRef, classesRef, howToPlayRef, roadmapRef, showcaseRef }}
      >
        <ScrollButton />
        <Header />
        <About />
        <Classes />
        <HowToPlay />
        <Roadmap />
        <Showcase />
        <Footer />
      </RefContext.Provider>
    </div>
  );
}

export default App;
