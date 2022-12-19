import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 23px 0;
  box-sizing: border-box;
  border-top: 1px solid #F1F1F1;
`;

const Input = styled.input`
  width: 100%;
  
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.3px;
  border:0;

  background-color: white;

  ::-webkit-input-placeholder { 
    color: #A8A8A8; 
  }

  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }

  &:focus {
    outline: none;
  }
`;

const TitleInput = ({ id, type, placeholder, disabled, register, children }) => {
  return (
    <InputContainer>
      <Input
        id={id}
        type={type || "text"}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id, { 
          required: {
            value: id === "region" ? false : true,
            message: `${placeholder.replace('₩', '')}은 필수입력사항입니다.`,
          }
        })}
      />
      {children}
    </InputContainer>
  );
};
  
export default TitleInput;