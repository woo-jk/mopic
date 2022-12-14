import styled from "styled-components";
import { KakaoTalkIcon, InstargramIcon } from "../../Icon";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-top: 1px solid #F1F1F1;
  padding: 30px 0;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.3px;

  padding-bottom: 20px;
`;

const URLContainer = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding-left: 10px;
  width: 358px;
  height: 40px;
  left: 54px;
  top: 920px;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  
  letter-spacing: -0.3px;
  border: 1px solid #CDCDCD;
  border-radius: 6px;

  ::-webkit-input-placeholder {
    color: #CDCDCD; 
  }

  &:focus {
    outline: none;
  }
`;

const ContactInput = ({ register }) => {
  return (
    <ContactContainer>
      <Title>지원방법</Title>
      <URLContainer>
        <IconWrapper>
          <KakaoTalkIcon />
        </IconWrapper>
        <Input type="url" placeholder="카카오톡 오픈채팅 URL" {...register("kakaotalk")} />
      </URLContainer>
      <URLContainer>
        <IconWrapper>
          <InstargramIcon />
        </IconWrapper>
        <Input type="url" placeholder="인스타그램 URL" {...register("instargram")} />
      </URLContainer>
    </ContactContainer>
  );
};
  
export default ContactInput;