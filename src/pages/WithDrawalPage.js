import React, { useEffect, useState } from "react";

const WithDrawalPage = (props) => {
  const pageName = "탈퇴하기";
  const headerUi = {
    goback : false,
    closeAll : true,
  }
  useEffect(() => {
    props.onPageName(pageName);
  },[]);
  useEffect(() => {
    props.onHeaderUi(headerUi);
  },[]);
  const [check, setCheck] = useState(false);
  const onCheck = (e) => {
    if(check !== true) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  useEffect(()=>{
    if (check) {
      document.querySelector(".agree_btn").style.background =
        "url('./img/Circle-ckeck.svg') no-repeat";
    } else {
      document.querySelector(".agree_btn").style.background =
        "url('./img/Circle-check.svg') no-repeat";
    }
  },[check])
  return (
    <div className="container drawal_wrap">
      <div className="drawal_header">
        <h2 className="font-primary">무버스 서비스를 탈퇴하시겠습니까?</h2>
        <p className="font-content">보유 리워드와 정산 현황을 확인하세요</p>
      </div>

      <div className="drawal_content_wrap">
        <div className="total_reword drawal_content">
          <p>보유 리워드</p>
          <p>{"54,780"}원</p>
        </div>
        <div className="drawal_content">
          <p>주차비 접수 건</p>
          <p>{"4"}건</p>
        </div>
        <div className="drawal_content">
          <p>내실 돈</p>
          <p>{"0"}원</p>
        </div>
        <div className="drawal_content">
          <p>소득 공제 신고</p>
          <p>{"필요"}</p>
        </div>
      </div>
      <div className="warning">
        <ul>
          <li>남은 리워드 및 주차비 환급 완료 후 탈퇴가 가능 합니다.</li>
          <li>탈퇴 요청 중에는 콜 운행이 불가합니다.</li>
          <li>탈퇴 철회 요청은 고객센터로 접수해 주세요.</li>
          <li>탈퇴 시 계정이 삭제되며, 개인정보가 모두 파기 됩니다.</li>
          <li>30일 동안 다시 가입할 수 없습니다.</li>
          <li>
            사고 또는 분쟁 처리 중이거나 내실 돈이 있을 경우 탈퇴할 수 없습니다.
          </li>
          <li>
            소득 공제 신고 필요 대상자일 경우 리워드 지급 받은 달의 다음 달 15일
            이후 (소득공제신고 후)탈퇴 신청이 가능합니다.
          </li>
        </ul>
      </div>
      <div className="reason font-second">
        <h3 className="font-primary">탈퇴사유를 남겨주세요.</h3>
        <div className="reason_radio">
          <input type="radio" name="out_reason" id="out_reason1" />
          <label htmlFor="out_reason1">
            <span className="radio_btn"></span>
            <span className="radio_txt">차량 탁송업을 그만둡니다.</span>
          </label>
        </div>
        <div className="reason_radio">
          <input type="radio" name="out_reason" id="out_reason2" />
          <label htmlFor="out_reason2">
            <span className="radio_btn"></span>
            <span className="radio_txt">다른 탁송 서비스를 이용합니다.</span>
          </label>
        </div>
        <div className="reason_radio">
          <input type="radio" name="out_reason" id="out_reason3" />
          <label htmlFor="out_reason3">
            <span className="radio_btn"></span>
            <span className="radio_txt">운영 가능한 콜이 많지 않습니다.</span>
          </label>
        </div>
        <div className="reason_radio">
          <input type="radio" name="out_reason" id="out_reason4" />
          <label htmlFor="out_reason4">
            <span className="radio_btn"></span>
            <span className="radio_txt">운영 방식이 만족스럽지 않습니다.</span>
          </label>
        </div>
        <div className="reason_radio">
          <input type="radio" name="out_reason" id="out_reason5" />
          <label htmlFor="out_reason5">
            <span className="radio_btn"></span>
            <span className="radio_txt">기타</span>
          </label>
        </div>
      </div>
      <div className="keep_userinfo">
        <h3 className="font-primary">회원정보 보존 안내</h3>
        <ul>
          <li>
            회원정보 보존 세부내용
            <span>보존목적 : 회원 탈퇴 후 재가입 방지</span>
            <span>보존항목 : 암호화된 동일인 식별정보 (CI)</span>
            <span>보존기간 : 1개월</span>
          </li>
          <li>보존 근거 : 가입 시 동의 한 '이용약관' 제3조 제1항</li>
        </ul>
      </div>
      <div className="agree_check">
        <label htmlFor="agree">
          <span className="agree_txt font-content">
            회원정보 보존 기간에 대해 동의합니다.
          </span>
          <span className="agree_btn"></span>
        </label>
        <input type="checkbox" name="agree" id="agree" onChange={onCheck} />
      </div>
      <div className="footer_btn">
        <button>탈퇴하기</button>
      </div>
    </div>
  );
};
export default WithDrawalPage;
