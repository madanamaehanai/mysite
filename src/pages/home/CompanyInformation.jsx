import React, { useEffect } from "react";
import Topbar from "../../components/Topbar/Topbar/Topbar.jsx";
import CompanyInfo from "../../components/CompanyInformation/CompanyInfo/CompanyInfo.jsx";
import MobileMenu from "../../components/Topbar/MobileMenu/MobileMenu.jsx";
import Mobilemenu from "../../scripts/libs/mobile-menu";

export default function CompanyInformation() {
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
        <div>CompanyInformation</div>
        <CompanyInfo />
      </div>
      <MobileMenu />
    </>
  );
}
