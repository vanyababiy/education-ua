import React, { useState } from "react";

import "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <li className="news-item">
      <div className="news-item__content">
        <div>{props.title}</div>
        <div>{props.description}</div>
      </div>
    </li>
  );
};
export default NewsItem;
