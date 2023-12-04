import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav className="topbar">
      <Link to="/mysite/" className="topbarLink">
        <li className="home">ホーム</li>
      </Link>
      <Link to="/mysite/companyinformation">
        <li className="companyinformation">会社情報</li>
      </Link>
    </nav>
  );
}
