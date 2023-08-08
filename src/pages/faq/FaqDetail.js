import {useEffect} from "react";
import { useParams } from "react-router-dom";
import { faqTestData } from "../TestData";

const AgreePage = (props) => {
    /*header 영역*/
    const pageName = '자주 하는 질문';
    const headerUi = {
      goback: false,
      closeAll : true,
    };
    useEffect(()=>{
      props.onPageName(pageName);
    },[])
    useEffect(()=>{
      props.onHeaderUi(headerUi);
    },[])
    const faqData = faqTestData.result;
    /**TESTDetail 받아오는 부분 */
    const contentId = useParams();
    const TestData = faqData.filter(item => String(item.id) === String(contentId.id))
    console.log("왜",TestData)


  return (
    <div className="container faq_detail_wrap">
        <h3>[{TestData[0].faqType}] {TestData[0].title}</h3>
      <p className="font-content">
        {TestData[0].answer}
      </p>
    </div>
  );
};
export default AgreePage;
