import React from "react";
import "../../styles/style/style.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarcomponent">
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
          <div className="humburgermenu">
            <div className="humburgerbar1"></div>
            <div className="humburgerbar2"></div>
            <div className="humburgerbar3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
