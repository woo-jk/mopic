import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { CameraIcon } from "../Icon";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModifyFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FileContainer = styled.div`
  position: relative;
  padding-bottom: 32px;

  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const File = styled.img`
  ${flexCenter};
  object-fit: cover;
  border-radius: 50%;
  width: 97px;
  height: 97px;
`;

const IconContainer = styled.div`
  ${flexCenter};
  position: absolute;
  right: 1px;
  top: 65px;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #D1D1D1;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-radius: 6px;

  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #5F5F5F;

  ${({ isError }) => {
    return isError ? `border: 1px solid #E01919;` : `border: 1px solid #CBC5C5;`;
  }}

  &:focus {
    outline: none;
  }
`;

const InvalidInput = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #E01919;
`;

const EditForm = ({src, name}) => {
  const [image, setImage] = useState(src);
  const [nickname, setNickname] = useState(name);
  const [nicknameError, setNicknameError] = useState(false);
  const fileInput = useRef(null);

  const uploadFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result);
      }
    }
    reader.readAsDataURL(file);
  }

  const onChangeNickname = (e) => {
      const RegExp = /^[0-9가-힣a-zA-Z\s]{2,}$/;
      if ((!e.target.value || (RegExp.test(e.target.value)))) setNicknameError(false);
      else setNicknameError(true);
      setNickname(e.target.value);
  };

  return (
    <ModifyFormContainer>
      <FileContainer>
        <File src={image} onClick={()=>{fileInput.current.click()}} />
        <FileInput
          type='file'
          accept='image/*'
          name='profile_img'
          onChange={uploadFile}
          ref={fileInput} />
        <IconContainer>
          <IconWrapper>
            <CameraIcon />
          </IconWrapper>
        </IconContainer>
      </FileContainer>
      <Input 
        type="text" 
        name="nickname" 
        placeholder={nickname} 
        onChange={onChangeNickname} 
        isError={nicknameError} />
      {nicknameError && <InvalidInput>닉네임은 띄어쓰기 없이 한글, 영문, 숫자만 가능해요.</InvalidInput>}
    </ModifyFormContainer>
  );
};

export default EditForm;