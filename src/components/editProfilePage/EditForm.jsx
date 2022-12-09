import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { CameraIcon } from "../Icon";
import { Button } from "../Button";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileContainer = styled.div`
  position: relative;
  padding-bottom: 32px;

  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const ProfileImage = styled.img`
  ${flexCenter};
  object-fit: cover;
  border-radius: 50%;
  width: 97px;
  height: 97px;
`;

const IconWrapper = styled.div`
  ${flexCenter};
  position: absolute;
  right: 1px;
  top: 65px;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #D1D1D1;
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
    return isError ? `border: 1px solid #E01919;` :
                     `border: 1px solid #CBC5C5;`;
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

const RegisterButton = styled(Button)`
  margin-top: 60vh;
`;

const EditForm = ({userData}) => {
  const [image, setImage] = useState(userData.image);
  const [nickname, setNickname] = useState(userData.name);
  const [nicknameError, setNicknameError] = useState(false);
  const fileInput = useRef(null);

  const handleClickFileInput = () => {
    fileInput.current.click();
  }

  const handleUploadFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    reader.onload = () => {
      if(reader.readyState === 2) setImage(reader.result);
    }
    reader.readAsDataURL(file);
  };

  const handleNicknameInput = (e) => {
    setNickname(e.target.value);
  };

  const isValidNickname = (nickname) =>{
    const RegExp = /^[0-9가-힣a-zA-Z\s]{2,}$/;
    if ((!nickname || (RegExp.test(nickname)))) setNicknameError(false);
    else setNicknameError(true);
    console.log(nicknameError);
  };

  const handleClickButton = () =>{
    isValidNickname(nickname);
    // TODO : create data
  };

  return (
    <EditFormContainer>
      <FileContainer>
        <ProfileImage src={image} onClick={handleClickFileInput} />
        <FileInput
          type='file'
          accept='image/*'
          name='profile_img'
          onChange={handleUploadFile}
          ref={fileInput} />
        <IconWrapper>
          <CameraIcon />
        </IconWrapper>
      </FileContainer>
      <Input 
        type="text" 
        name="nickname"
        value={nickname}
        placeholder={nickname} 
        onChange={handleNicknameInput}
        isError={nicknameError} />
      {nicknameError && <InvalidInput>닉네임은 띄어쓰기 없이 한글, 영문, 숫자만 가능해요.</InvalidInput>}
      <RegisterButton onClick={handleClickButton} disabled={!userData}>등록하기</RegisterButton>
    </EditFormContainer>
  );
};

export default EditForm;