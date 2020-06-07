import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <header>
      <div className="main-header">{props.children}</div>
    </header>
  );
};

export default MainHeader;
