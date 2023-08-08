import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { qnaTestData } from "../TestData";
import Accordion from "../../components/Acoordion";
//textData

const QnaList = (props) => {
  const pageName = "문의내역";
  const headerUi = {
    goback: true,
    closeAll: false,
    Navi: "/qna/write",
  };
  useEffect(() => {
    props.onPageName(pageName);
  }, []);
  useEffect(() => {
    props.onHeaderUi(headerUi);
  }, []);
  const qnaDataResult = qnaTestData.result;
  const userId = 2;
  const qnaData =
    qnaDataResult && qnaDataResult.filter((item) => item.userId == userId);
  console.log("뭔데:::", qnaData)

  return (
    <div className="qna_list_wrap">
      <div className="faq_list_wrap">
        {qnaData.length > 0 ? (
          <div className="faq_lists accordion_wrap tabs">
            {qnaData &&
              qnaData.map((item) => {
                return <Accordion key={item.id} qnaList={item} />;
              })}
          </div>
        ) : (
          <div className="no_list">
            <h5>문의 내역이 없습니다.</h5>
          </div>
        )}
      </div>
    </div>
  );
};
export default QnaList;
