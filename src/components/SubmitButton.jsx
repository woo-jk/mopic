import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  border-radius: 6px;
  border: 0;
  background-color: #502CE8;
  
  color: #FFFFFF;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.3px;

  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #DADADA;
    position: relative;
    top: 2px;
  }
`;

function SubmitButton() {
    return (
        <Button>등록하기</Button>
    );
}

export default SubmitButton;