import React from "react";
const Header = (props) => {
  const goBack = () => {
    window.location.href = "/"
  }
  return (
    <div className="header_wrap">
      <div className="headers">
        <h1 className="font-header">{props.pageName}</h1>
        <button onClick={goBack}>
          <img src="./img/Cancel.svg" alt="닫기" />
        </button>
      </div>
    </div>
  );
};
export default Header;
