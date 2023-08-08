import {useEffect} from "react";

const AgreePage = (props) => {
    const pageName = '약관 상세';
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
  return (
    <div className="container terms_wrap">
      <p className="font-content">
        CMS약관 관리 연동 약관 상세 내용 출력 Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eaque dicta officia, fugiat repellendus
        ullam tempore dolores hic. Animi labore aliquam debitis necessitatibus,
        ducimus nesciunt, accusantium reprehenderit laboriosam, perferendis et
        doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolor aut sed ullam natus consectetur ut incidunt blanditiis saepe ea
        magnam, ex consequatur quam corrupti? Eos saepe qui nulla dolor quasi?
      </p>
    </div>
  );
};
export default AgreePage;
