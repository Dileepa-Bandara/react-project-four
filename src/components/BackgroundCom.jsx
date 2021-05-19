import React from "react";
import "../scss/image.scss";
import { dataList } from "./data.js";

function BackgroundCom({ count }) {
  return (
    <div className="image__container">
      <div className="opacity__container"></div>
      <img src={`${dataList[count].img}`} alt="" />
    </div>
  );
}

export default BackgroundCom;
