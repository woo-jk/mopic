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

  &:focus {
    outline: none;
  }
`;

const ContentInput = ({ title, text, value, placeholder, onChange }) => {
  const ContentTitle = <TitleContainer>
                      <Title>{text}</Title>
                        <Option>(선택사항)</Option>
                       </TitleContainer>;
  return (
    <ContentContainer>
        {title && ContentTitle}
      <Input
        name={text}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </ContentContainer>
  );
};
  
export default ContentInput;