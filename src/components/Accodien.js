import React, { useEffect, useState } from "react";
import Up from "../assets/img/Up.svg";
import Down from "../assets/img/Down.svg";

const Accodien = (props) => {
  const data = props.list;
  console.log("DATA:::", data);
  const [onAccordion, setOnAccordion] = useState(false);
  const [image, setImage] = useState();
  useEffect(() => {
    if (onAccordion === false) {
      setImage(Down);
    } else {
      setImage(Up);
    }
  });
  const date = data.createdDate.split("T")[0];
  const time = data.createdDate.split("T")[1].split("Z")[0];
  const onAccoHandler = () => {
    if (onAccordion === false) {
      setOnAccordion(true);
    } else {
      setOnAccordion(false);
    }
  };
  const imgUrl = data.imageUrl;
  console.log(imgUrl);
  return (
    <>
      <div className="accordion_menu" onClick={onAccoHandler}>
        <span>[{data.category}]</span>
        <div className="accordion_title">
          <h4>{data.question}</h4>
          <img src={image} alt="메뉴" />
        </div>
        <div className="accordion_state">
          <span className="create_time">
            {date} {time}
          </span>
          <span className="gubun">|</span>
          <span>{data.state === 0 ? "미응답" : "응답완료"}</span>
        </div>
      </div>
      <div
        className={
          onAccordion === false ? "accordion_none" : "accordion_answer_wrap"
        }
      >
        <div className="question">
          <p className="question_txt">{data.question}</p>
          <div className="question_img">
            {imgUrl &&
              imgUrl.map((img) => {
                return <img src={img} alt="문의사진" />;
              })}
          </div>
        </div>
        {data.state === true ? (
          <div className="answer">
            <h5>[답변 내용]</h5>
            <p>{data.answer}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Accodien;
