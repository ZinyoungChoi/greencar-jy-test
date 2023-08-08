import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faqTestData } from "../TestData";
import Accodien from "../../components/Accodien";
import Accordion from "../../components/Acoordion";

const FaqImportDetail = (props) => {
  /**case 별 */
  const contentId = useParams();
  const detailId = contentId.id;
  const [faqIm, setfaqIm] = useState("");
  useEffect(() => {
    switch (detailId) {
      case "call":
        setfaqIm("콜잡기");
        break;
      case "drive":
        setfaqIm("운행");
        break;
      case "back":
        setfaqIm("반납");
        break;
      case "calculate":
        setfaqIm("정산");
        break;
      case "draw":
        setfaqIm("탈퇴");
        break;
      default:
        alert("찾을 수 없는 페이지 입니다.");
        break;
    }
  });

  /*header 영역*/
  const pageName = `FAQ ${faqIm}`;
  const headerUi = {
    goback: false,
    closeAll: true,
  };
  useEffect(() => {
    props.onPageName(pageName);
  }, [faqIm]);
  useEffect(() => {
    props.onHeaderUi(headerUi);
  }, []);
  /**TESTDetail 받아오는 부분 */
  const testDataResult = faqTestData.result;
  const faqImList = testDataResult.filter(
    (item) => String(item.faqType) === String(faqIm)
  );
  console.log(faqImList);

  return (
    <div className="container faq_detail_wrap">
      <div className="accordion_wrap tabs">
        {/* <h3>{TestData[0].category} {TestData[0].title}</h3> */}
        {faqImList &&
          faqImList.map((item) => {
            return <Accordion key={item.id} faqImList={item} />;
          })}
      </div>
    </div>
  );
};
export default FaqImportDetail;
