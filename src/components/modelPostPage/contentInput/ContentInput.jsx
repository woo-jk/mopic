import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 208px;
  padding: 23px 0;
  box-sizing: border-box;
  border-top: 1px solid #F1F1F1;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

const Option = styled(Title)`
  color: #828282;
`;

const Input = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  border: 0;

  font-family: Apple SD Gothic Neo;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.3px;

  ::-webkit-input-placeholder { 
    color: #BFBFBF; 
  }

  &:focus {
    outline: none;
  }
`;

const ContentInput = ({ title, id, text, placeholder, register }) => {
  const ContentTitle = <TitleContainer>
                        <Title>{text}</Title>
                        <Option>(선택사항)</Option>
                       </TitleContainer>;
  return (
    <ContentContainer>
        {title && ContentTitle}
      <Input
        id={id}
        placeholder={placeholder}
        {...register(id, { 
          required: {
            value: id === "form" ? false : true,
            message: `${text}은 필수입력사항입니다.`,
          }
        })}
      />
    </ContentContainer>
  );
};
  
export default ContentInput;