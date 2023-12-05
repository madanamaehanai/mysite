import React, { useRef } from "react";

export default function MobileMenu() {
  const containerRef = useRef();

  const toggleHandler = () => {
    // ここにメニューのトグルロジックを実装
    console.log("Mobile menu clicked!");
  };
  return (
    <div
      ref={containerRef}
      className="mobile-menu-container"
      onClick={toggleHandler}
    >
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
  );
}
