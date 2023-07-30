import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const qnaTestData = [
  {
    id: 1,
    category: "[가입/탈퇴]",
    title: "어쩌구 저쩌구 하나요?",
    text: "CMS>상담관리>FAQ 상세 내용 연동 출력1",
  },
  {
    id: 2,
    category: "[가입/탈퇴]",
    title: "어쩌구 저쩌구 하나요?",
    text: "CMS>상담관리>FAQ 상세 내용 연동 출력2",
  },
  {
    id: 3,
    category: "[예약/취소]",
    title: "어쩌구 저쩌구 하나요?",
    text: "CMS>상담관리>FAQ 상세 내용 연동 출력3",
  },
  {
    id: 4,
    category: "[차량점검]",
    title: "어쩌구 저쩌구 하나요?",
    text: "CMS>상담관리>FAQ 상세 내용 연동 출력4",
  },
  {
    id: 5,
    category: "[가입/탈퇴]",
    title: "어쩌구 저쩌구 하나요?",
    text: "CMS>상담관리>FAQ 상세 내용 연동 출력5",
  },
  {
    id: 6,
    category: "[가입/탈퇴]",
    title: "어쩌구 저쩌구 하나요?",
    text: "CMS>상담관리>FAQ 상세 내용 연동 출력6",
  },
];

const Qna = (props) => {
  const pageName = "문의하기";
  useEffect(() => {
    props.onPageName(pageName);
  });
  const [qnaData, setQnaData] = useState(qnaTestData);
  return (
    <div className="container qna">
      <div className="faq_list_wrap">
        <h2 className="font-primary">자주 하는 질문</h2>
        <div className="faq_lists">
          {qnaData &&
            qnaData.map((item) => {
              return (
                <Link key={item.id} className="faq_list">
                  <span>
                    <span>{item.category}</span>
                    <span>{item.title}</span>
                  </span>
                  <img src="./img/Right.svg" alt="상세보기" />
                </Link>
              );
            })}
        </div>
      </div>
      <div className="faq_btn_wrap">
        <h2 className="font-primary">FAQ</h2>
        <div className="faq_btns">
          <button>콜잡기</button>
          <button>콜잡기</button>
          <button>콜잡기</button>
          <button>콜잡기</button>
          <button>콜잡기</button>
        </div>
      </div>
      <div className="footer-fix">
        <button>
          문의하기
        </button>
        <button>
            문의하기
        </button>
      </div>
    </div>
  );
};
export default Qna;
