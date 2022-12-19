import ImageInput from "./ImageInput";
import TitleInput from "./titleInput/TitleInput";
import SelectBox from "./titleInput/SelectBox";
import CheckBox from "../CheckBox";
import ContactInput from "./contentInput/ContactInput";
import ContentInput from "./contentInput/ContentInput";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { regionList } from "./dummyData";
import styled from "styled-components";

const PostFormContainer = styled.form``;

const SelectBoxContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const PostForm = () => {
  const form = useForm({
    defaultValues: {
      fileInput: [],
      title: '',
      price: '',
      free: false,
      firstRegion: '서울시',
      secondRegion: '강남구',
      content: '',
      form: '',
      kakaotalk: '',
      instargram: '',
    }
  });

  const { 
    register,  
    getValues,
    setValue,
    handleSubmit, 
    watch,
    formState: { isSubmitting }
  } = form;

  const contentText = "올릴 게시글 내용을 작성해주세요.\n(모델에게 금품을 요구할 경우 게시글이 제한될 수 있어요.)";
  const formText = "모델 지원에 필요한 양식이 있다면 적어주세요.";

  const [imageList, setimageList] = useState([]);
  const [currentCount, setcurrentCount] = useState(0);
  const [secondRegionList, setSecondRegionList] = useState(regionList[0].lst);
  const firstRegion = watch("firstRegion");

  useEffect(() => {
    const newSecondRegionList =
      regionList.find(region => {return region.name === firstRegion}).lst;
    setSecondRegionList(newSecondRegionList);
    setValue("secondRegion", newSecondRegionList[0].name);
  }, [firstRegion]);

  const handleUploadFile = (e) => {
    const temp = []
    const images = e.target.files;
    
    for (let i = 0; i < images.length; i++) {
      if (i === 5) break;
      setcurrentCount(current => current + 1);
      temp.push({id: images[i].name, file: images[i], url: URL.createObjectURL(images[i])})
    };
    
    setimageList(temp.concat(imageList));
  }

  const handleDeleteFile = (deleteUrl) => {
    setcurrentCount(current => current - 1);
    setimageList(imageList.filter(image => image.url !== deleteUrl));
  }

  const handleCheckBox = (e) => {
    setValue("price", e.target.checked ? 0 : '');
  }

  const onSubmit = async (data) => {
    // TODO: set fileInput
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  }

  const toString = (value) => {
    return (value === undefined) ? "" : value;
  }

  const onError = (error) => {
    const errorMessage = `${toString(error.title && "글 제목,")} ${toString(error.price && "가격,")} ${toString(error.content && "내용")}은 필수항목입니다.`
    alert(errorMessage);
  };

  return (
    <PostFormContainer onSubmit={handleSubmit(onSubmit, onError)}>
      <ImageInput
        handleDeleteFile={handleDeleteFile}
        handleUploadFile={handleUploadFile}
        currentCount={currentCount}
        imageList={imageList}
      />
      <TitleInput 
        id="title"
        placeholder="글 제목"
        register={register}
        {...form}
      />
      <TitleInput
        id="region"
        placeholder="서비스 지역"
        disabled={true}
        register={register}
        {...form}>
        <SelectBoxContainer>
          <SelectBox
            id="firstRegion"
            regionData={regionList} 
            register={register}
            {...form}
          />
          <SelectBox
            id="secondRegion"
            regionData={secondRegionList} 
            register={register}
            {...form}
          />
        </SelectBoxContainer>
      </TitleInput>
      <TitleInput
        id="price"
        type="number"
        placeholder="₩가격"
        disabled={getValues("price") === 0}
        register={register}
        {...form}>
        <CheckBox
          id="free"
          text={"무료"}
          onChange={handleCheckBox}
          register={register}
          {...form}
        />
      </TitleInput>
      <ContentInput
        id="content"
        text="내용"
        placeholder={contentText}
        register={register}
        {...form}
      />
      <ContentInput
        id="form"
        title
        text="지원양식"
        placeholder={formText}
        register={register}
        {...form}
      />
      <ContactInput register={register} {...form} />
      <Button disabled={isSubmitting}>작성완료</Button>
    </PostFormContainer>
  );
};
  
export default PostForm;