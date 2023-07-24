import React from "react";

const WithDrawalPage = (props) => {
  return (
    <div className="contents_wrap">
      <h2>무버스 서비스를 탈퇴하시겠습니까?</h2>
      <p>보유 리워드와 정산 현황을 확인하세요</p>

      <div className="total_reword">
        <p>보유 리워드</p>
        <p>{"54,780"}원</p>
      </div>
      <div className="parking_gun">
        <p>주차비 접수 건</p>
        <p>{"4"}건</p>
      </div>
      <div className="pay_by_costomer">
        <p>내실 돈</p>
        <p>{"0"}원</p>
      </div>
      <div className="thodeck">
        <p>소득 공제 신고</p>
        <p>{"필요"}</p>
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
      <div className="reason">
        <h3>탈퇴사유를 남겨주세요.</h3>
        <label>
          <input type="radio" name="out_reason" id="out_reason1" /> 차량
          탁송업을 그만둡니다.
        </label>
        <label>
          <input type="radio" name="out_reason" id="out_reason2" /> 다른 탁송
          서비스를 이용합니다.
        </label>
        <label>
          <input type="radio" name="out_reason" id="out_reason3" /> 운영 가능한
          콜이 많지 않습니다.
        </label>
        <label>
          <input type="radio" name="out_reason" id="out_reason4" /> 운영 방식이
          만족스럽지 않습니다.
        </label>
        <label>
          <input type="radio" name="out_reason" id="out_reason5" /> 기타 (클릭
          시inputText? 왜 아무것도 안써있지 기획서에)
        </label>
      </div>
      <div className="keep_user">
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
      <div className="fix_footer">
        <label>회원정보 보존 기간에 대해 동의합니다. <input type="radio" name="agree" id="agree" /></label>
        <div>
            <button>탈퇴하기</button>
        </div>
      </div>
    </div>
  );
};
export default WithDrawalPage;
