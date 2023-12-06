//Home.jsx
import React, { useEffect } from "react";
import Topbar from "../../components/Topbar/Topbar/Topbar.jsx";
import Main from "./components/main/Main.jsx";
import Eventinfo from "./components/Eventinfo/Eventinfo.jsx";
import Concept from "./components/Concept/Concept.jsx";
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import MobileMenu from "../../components/Topbar/MobileMenu/MobileMenu.jsx";
import Mobilemenu from "../../scripts/libs/mobile-menu";

export default function Home() {
  useEffect(() => {
    const mobilemenu = new Mobilemenu();
    mobilemenu.DOM.container = document.querySelector("#mobilemove");
    const toggleHandler = () => mobilemenu._toggle();
    const eventType = mobilemenu._getEventType();
    mobilemenu.DOM.container.addEventListener(eventType, toggleHandler);
    // return () => {
    //   mobilemenu.DOM.container.removeEventListener("click", toggleHandler);
    // };
    return () => {
      mobilemenu.DOM.container.removeEventListener(eventType, toggleHandler);
    };
  }, []);
  return (
    <>
      <div className="" id="mobilemove">
        <Topbar />
        <Main />
        <Eventinfo />
        <Concept />
        <Aboutus />

      </div>
      <MobileMenu />
    </> 
  );
}
