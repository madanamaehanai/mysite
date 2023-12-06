//Topbar.jsx
// import React, { useEffect } from "react";
import React from "react";
import "../../../styles/style/style.css";
import { Link } from "react-router-dom";
// import Mobilemenu from "../../../scripts/libs/mobile-menu";
// import MobileMenu from "../MobileMenu/MobileMenu";

export default function Topbar() {
  // useEffect(() => {
  //   const mobilemenu = new Mobilemenu();
  //   mobilemenu.DOM.container = document.querySelector("#topbarcomponent");
  //   const toggleHandler = () => mobilemenu._toggle();
  //   const eventType = mobilemenu._getEventType();
  //   mobilemenu.DOM.container.addEventListener(eventType, toggleHandler);
  //   // return () => {
  //   //   mobilemenu.DOM.container.removeEventListener("click", toggleHandler);
  //   // };
  //   return () => {
  //     mobilemenu.DOM.container.removeEventListener(eventType, toggleHandler);
  //   };
  // }, []);

  return (
    <div className="topbar">
      <div id="topbarcomponent" className="">
        <div className="TopBarComponent">
          <div className="topbarlogo">
            <p>〇〇工務店</p>
          </div>
          <div className="topbarcentercomponent">
            <div className="topbarCenterComponent">
              <ul className="topbarlink">
                <Link
                  to="/mysite/"
                  className="topbarLink"
                  style={{ textDecoration: "none" }}
                >
                  <li className="home">ホーム</li>
                </Link>
                <Link
                  to="/mysite/companyinformation"
                  style={{ textDecoration: "none" }}
                >
                  <li className="companyinformation">会社情報</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="topbarrightcomponent">
            <div className="humburgermenu__btn">
              <div className="humburgerbar1"></div>
              <div className="humburgerbar2"></div>
              <div className="humburgerbar3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <MobileMenu /> */}
      {/* <div className="mobile-menu-container">
        <ul className="mobile-menu__main">
          <li className="mobile-menu__item">
            <Link
              to="/mysite/"
              className="topbarLink"
              style={{ textDecoration: "none" }}
            >
              ホーム
            </Link>
          </li>
          <li className="mobile-menu__item">
            <Link
              to="/mysite/companyinformation"
              style={{ textDecoration: "none" }}
            >
              会社情報
            </Link>
          </li>
          <li className="mobile-menu__item">
            <Link
              to="/mysite/companyinformation"
              style={{ textDecoration: "none" }}
            >
              会社情報
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
