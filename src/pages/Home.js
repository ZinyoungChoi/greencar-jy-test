import {useEffect} from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const pageName = '모바일 페이지 목록';
  const headerUi = {
    onback : false,
    closeAll : false,
  }
  useEffect(()=>{
    props.onPageName(pageName);
  },[])
  useEffect(()=>{
    props.onHeaderUi(headerUi);
  },[])
  return (
    <div>
      <div className="container" style={{textAlign: "center"}}>
        <ul>
          <li><Link to="/terms" className="font-header">약관 상세</Link></li>
          <li><Link to="/drawal" className="font-header">탈퇴하기</Link></li>
          <li><Link to="/faq" className="font-header">문의하기</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
