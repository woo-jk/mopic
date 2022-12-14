import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { CameraIcon } from "../Icon";
import { Button } from "../Button";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditFormContainer = styled.form`
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

const InvalidInput = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #E01919;
`;

const RegisterButton = styled(Button)`
  position: absolute;
  width: 405px;
  top: 770px;
`;

const EditForm = ({ userData }) => {
  const { 
    register, 
    watch,
    handleSubmit,
    formState: { errors, isSubmitting } 
  } = useForm({ 
    mode: "onChange", 
    defaultValues: {
      fileInput: '', 
      nickname: userData.name
    } 
  });

  const [imagePreview, setImagePreview] = useState(userData.image);

  const fileInput = useRef(null);
  const { ref, ...rest } = register("fileInput");

  const handleClickFileInput = () => {
    fileInput.current?.click();
  };

  const image = watch("fileInput");
  
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    } 
  }, [image]);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  };

  // const onError = (error) => {
  //   console.log(error);
  // };

  return (
    <EditFormContainer onSubmit={handleSubmit(onSubmit)}>
      <FileContainer >
        <ProfileImage src={imagePreview} onClick={handleClickFileInput} />
        <FileInput 
          id='image'
          type='file'
          accept='image/*'
          {...rest}
          ref={(e) => {
            ref(e); 
            fileInput.current = e;
          }}
        />
        <IconWrapper>
          <CameraIcon />
        </IconWrapper>
      </FileContainer>
      <Input 
        id="nickname"
        type="text"
        placeholder={userData.name}
        isError={errors?.nickname}
        {...register("nickname", {
          required: { 
            value: true,
            message: "닉네임은 2자 이상 입력해주세요."
          },
          pattern: {
            value: /^[0-9가-힣a-zA-Z\s]{2,}$/,
            message: "닉네임은 띄어쓰기 없이 한글, 영문, 숫자만 가능해요."
          },
          minLength: {
            value: 2,
            message: "닉네임은 2자 이상 입력해주세요."
          }
        })}
      />
      { errors?.nickname && <InvalidInput>{errors.nickname.message}</InvalidInput> }
      <RegisterButton disabled={isSubmitting}>등록하기</RegisterButton>
    </EditFormContainer>
  );
};

export default EditForm;