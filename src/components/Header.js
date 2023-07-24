import React from "react";

const Header = (props) => {
  return (
    <div className="header_wrap">
      <h1>{props.pageName}</h1>
      <button>닫기</button>
    </div>
  );
};
export default Header;
