import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cancel from "../assets/img/Cancel.svg"
import LeftImg from "../assets/img/Left.svg"
import WriteImg from "../assets/img/Write.svg"

const Navigation = (props) => {
  const navigate = useNavigate();
  const [headerUi, setHeaderUi] = useState()
  // const closeAll = () => {
  //   window.location.href = "/"
  // }
  useEffect(()=>{
    if(props.headerUi !== null) {
    setHeaderUi(props.headerUi)
    }
  },[props])
  console.log(props.headerUi.Navi)

  return (
    <div className="header_wrap">
      <div className="headers">
        {props.headerUi.goback && props.headerUi.goback !== undefined ? (
          <button
            className="goback_ico"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={LeftImg} alt="뒤로가기" />
          </button>
        ) : null}
        <h1 className="font-header">{props.pageName}</h1>
        {props.headerUi.closeAll && props.headerUi.closeAll !== undefined ? (
          <button
            className="close_ico"
            onClick={() => {navigate(-1)}}
          >
            <img src={Cancel} alt="닫기" />
          </button>
        ) : null}
        {props.headerUi.Navi !== null && props.headerUi.Navi !== undefined ? (
          <Link
            className="write_ico"
            to={props.headerUi.Navi}
          >
            <img src={WriteImg} alt="닫기" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};
export default Navigation;
