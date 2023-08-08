import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//textData
import { faqTestData } from "../TestData";

const FaqList = (props) => {
  const faqData = faqTestData.result;
  const pageName = "문의하기";
  const headerUi = {
    goback: true,
    closeAll: false,
  };
  useEffect(() => {
    props.onPageName(pageName);
  }, []);
  useEffect(() => {
    props.onHeaderUi(headerUi);
  }, []);

  /**FAQ 주요안내사항 리스트 */

  const faqImportents =
    faqData && faqData.filter((item) => item.state === true); //주요 안내사항 리스트 전체
  const faqBtnList = faqImportents.map((item) => item.faqType); // 타입 전체
  const faqImSet = new Set(faqBtnList); //타입 중복값 제거
  const faqImArr = [...faqImSet]; // 중복값 없는 새 타입 배열 생성

  console.log(faqImArr);
  return (
    <div className="container qna">
      <div className="faq_list_wrap">
        <h2 className="font-primary">자주 하는 질문</h2>
        <div className="faq_lists">
          {faqData &&
            faqData
              .filter((item) => item.state === false)
              .map((item) => {
                return (
                  <Link
                    to={`/faq/${item.id}`}
                    key={item.id}
                    className="faq_list"
                  >
                    <span className="txt_wrap">
                      <span>[{item.faqType}]</span>
                      <span className="faq_list_txt">{item.title}</span>
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
          {faqImArr.map((i) => {
            return (
              <Link
                key={
                  i === "콜잡기"
                    ? 1
                    : i === "운행"
                    ? 2
                    : i === "반납"
                    ? 3
                    : i === "정산"
                    ? 4
                    : 5
                }
                to={`/faqimport/${
                  i === "콜잡기"
                    ? "call"
                    : i === "운행"
                    ? "drive"
                    : i === "반납"
                    ? "back"
                    : i === "정산"
                    ? "calculate"
                    : "draw"
                }`}
              >
                {i}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="footer_fix">
        <div className="footer_btn">
          <Link to="/qna" className="qna_list">
            문의 내역
          </Link>
          <Link to="/qna/write" className="qna_write">
            문의 하기
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FaqList;
