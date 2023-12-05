import React, { useRef } from "react";

export default function MobileMenu() {
  return (
    <div className="mobile-menu-container">
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
    </div>
  );
}
