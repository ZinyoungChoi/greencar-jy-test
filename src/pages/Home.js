import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>모바일 페이지 목록</h1>
      <ul>
        <li><Link to="/agree">약관 상세</Link></li>
      </ul>
    </div>
  );
};
export default Home;
