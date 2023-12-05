import React from "react";
import "../../styles/style/style.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav className="topbar">
      <ul className="topbarlink">
      <Link to="/mysite/" className="topbarLink" style={{textDecoration: 'none'}}>
        <li className="home">ホーム</li>
      </Link>
      <Link to="/mysite/companyinformation" style={{textDecoration: 'none'}}>
        <li className="companyinformation">会社情報</li>
      </Link>
      </ul>
    </nav>
  );
}
