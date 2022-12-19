import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { StrokeCameraIcon, XIcon } from "../Icon";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageListContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 29px;
  gap: 10px;

  // TODO: 가로스크롤
  // flex-wrap: wrap;
  // overflow-x:scroll;
  // white-space:nowrap;
`;

const ImageContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 82px;
  height: 81px;

  background: #F4F4F4;
  border-radius: 5px;

  cursor: pointer;
`;

const CurrentCount = styled.div`
  font-style: normal;
  font-weight: 510;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.3px;

  color: #BFBFBF;
`;

const Input = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DeleteButton = styled.div`
  ${flexCenter};
  flex-direction: column;
  position: absolute;

  right: -4px;
  top: -3px;
  z-index: 1;

  width: 20px;
  height: 20px;
  background-color: #502CE8;
  border-radius: 50%;
`;

const ImageInput = ({ handleUploadFile, handleDeleteFile, currentCount, imageList }) => {
  const fileInput = useRef(null);

  const handleClickFileInput = () => {
    fileInput.current.click();
  };

  const getPreview = () => {
    return imageList.map((image) => {
      return (  
        <ImageContainer key={image.url}>
          <DeleteButton onClick={()=>handleDeleteFile(image.url)}>
            <XIcon color={"white"} width={13} height={13} />
          </DeleteButton>
          <PreviewImage src={image.url} />
        </ImageContainer>
      )
    })
  };

  return (
    <ImageListContainer>
      <ImageContainer onClick={handleClickFileInput}>
        <StrokeCameraIcon />
        <CurrentCount><span style={{color: "#502CE8"}}>{currentCount}</span>/5</CurrentCount> 
      </ImageContainer>
      <Input
        type="file" 
        accept="image/*" 
        multiple
        disabled={currentCount >= 5}
        onChange={(e) => handleUploadFile(e)}
        ref={fileInput}
      />
      { getPreview() }
    </ImageListContainer>
  );
};

export default ImageInput;