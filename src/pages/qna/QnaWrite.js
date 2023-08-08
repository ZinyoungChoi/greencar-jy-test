import { useEffect } from "react";
import { QnaCategory } from "../TestData";
import Select from "../../components/Select";

const QnaList = (props) => {
    const pageName = "문의하기";
    const headerUi = {
        goback: false,
        closeAll: true,
        Navi : null,
    };
    useEffect(() => {
        props.onPageName(pageName);
    }, []);
    useEffect(() => {
        props.onHeaderUi(headerUi);
    }, []);
  
  return (
    <div className="container qna_write_wrap">
        <form action="#">
          <Select options={QnaCategory}/>
        </form>
    </div>
  )
}
export default QnaList;