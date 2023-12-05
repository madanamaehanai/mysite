import React, { useEffect } from "react";
import "../../../styles/style/style.css";
import { Link } from "react-router-dom";
import MobileMenu from "../../../scripts/libs/mobile-menu";

export default function Topbar() {
  useEffect(() => {
    const mobileMenu = new MobileMenu();
    mobileMenu.DOM.container = document.querySelector("#topbarcomponent");
    const toggleHandler = () => mobileMenu._toggle();
    mobileMenu.DOM.container.addEventListener('click', toggleHandler);
    return () => {
        mobileMenu.DOM.container.removeEventListener('click', toggleHandler);
    };
}, []);

  return (
    <div className="topbar">

      <div id="topbarcomponent" className="menu-open">
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

      <div className="mobile-menu-container">
        <ul className="mobile-menu__main">
          <li className="mobile-menu__item">
            <a href="#">
              <span className="main-title">aaaaa</span>
              <span className="sub-title">bbbbb</span>
            </a>
          </li>
        <li className="mobile-menu__item">
            <a href="#">
              <span className="main-title">aaaaa</span>
              <span className="sub-title">bbbbb</span>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#">
              <span className="main-title">aaaaa</span>
              <span className="sub-title">bbbbb</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
