import React from "react";
import "../../../styles/style/style.css";

export default function CompanyInfo() {
  return (
    <div className="CompanyInfo">
      <div className="CompanyInfoComponent">
        <hr className="CompanyInfoComponentBar"></hr>
        <div className="CompanyText">
          <li className="CompanyInfoMain">会社情報</li>
          <li className="CompanyInfoSub">株式会社〇〇〇〇工務店</li>
        </div>
      </div>
      <div className="CompanyInfoComponent">
        <hr className="CompanyInfoComponentBar"></hr>
        <div className="CompanyText">
          <li className="CompanyInfoMain">本社所在地</li>
          <li className="CompanyInfoSub">〒0000-0000</li>
          <li className="CompanyInfoSub">
            東京都〇〇区〇〇〇丁目〇〇番〇〇－〇〇
          </li>
          <li className="CompanyInfoSub">東京〇〇ビル 〇〇階</li>
        </div>
      </div>
      <div className="CompanyInfoComponent">
        <hr className="CompanyInfoComponentBar"></hr>
        <div className="CompanyText">
          <li className="CompanyInfoMain">取締役</li>
          <li className="CompanyInfoSub"></li>
        </div>
      </div>
      <div className="CompanyInfoComponent">
        <hr className="CompanyInfoComponentBar"></hr>
        <div className="CompanyText">
          <li className="CompanyInfoMain">設立</li>
          <li className="CompanyInfoSub">〇〇〇〇年〇〇月〇〇日</li>
        </div>
      </div>
      <div className="CompanyInfoComponent">
        <hr className="CompanyInfoComponentBar"></hr>
        <div className="CompanyText">
          <li className="CompanyInfoMain">資本金</li>
          <li className="CompanyInfoSub">〇〇億円</li>
        </div>
      </div>
      <div className="CompanyInfoComponent">
        <hr className="CompanyInfoComponentBar"></hr>
        <div className="CompanyText">
          <li className="CompanyInfoMain">社員数</li>
          <li className="CompanyInfoSub">〇〇〇人(〇〇〇〇年現在)</li>
        </div>
      </div>
    </div>
  );
}
