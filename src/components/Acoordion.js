import React from "react";

const Accordion = (props) => {
  const qna = props.qnaList;
  const faqIm = props.faqImList;
  console.log("q", qna);
  console.log("f", faqIm);
  return (
    <>
      {qna !== undefined && faqIm === undefined ? (
        <div class="tab">
          <input type="radio" id={qna.id} name="qna" />
          <label class="tab_label" htmlFor={qna.id}>
            {qna.question}
          </label>
          <div class="tab_content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
            facilis.
          </div>
        </div>
      ) : faqIm !== undefined && qna === undefined ? (
        <div class="tab">
          <input type="radio" id={faqIm.id} name="faq" />
          <label class="tab_label" htmlFor={faqIm.id}>
            {faqIm.question}
          </label>
          <div class="tab_content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
            facilis.
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Accordion;
