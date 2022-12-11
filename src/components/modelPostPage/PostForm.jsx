import ImageInput from "./ImageInput";
import TitleInput from "./titleInput/TitleInput";
import SelectBox from "./titleInput/SelectBox";
import CheckBox from "../CheckBox";
import ContactInput from "./contentInput/ContactInput";
import ContentInput from "./contentInput/ContentInput";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { regionList } from "./dummyData";
import styled from "styled-components";

const PostFormContainer = styled.div``;

const SelectBoxContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const PostForm = () => {
  const contentText = "올릴 게시글 내용을 작성해주세요.\n(모델에게 금품을 요구할 경우 게시글이 제한될 수 있어요.)";
  const formText = "모델 지원에 필요한 양식이 있다면 적어주세요.";

  const [currentCount, setcurrentCount] = useState(0);
  const [imageList, setimageList] = useState([]);
  const [userData, setUserData] = useState({
    title: '',
    price: '',
    firstRegion: '서울시',
    secondRegion: '강남구',
    content: '',
    form: '',
    kakaotalk: '',
    instargram: '',
  });

  const handleUploadFile = (e) => {
    const temp = []
    const images = e.target.files;
    
    for (let i = 0; i < images.length; i++) {
      if (i === 5) break;
      setcurrentCount(current => current + 1);
      temp.push({ id: images[i].name, file: images[i], url: URL.createObjectURL(images[i]) })
    };
    
    setimageList(temp.concat(imageList))
  };

  const handleDeleteFile = (deleteUrl) => {
    setcurrentCount(current => current - 1);
    setimageList(imageList.filter(photo => photo.url != deleteUrl))
  }

  const handleInputData = (e, key) => {
    setUserData({
      ...userData,
      [key]: e.target.value,
    });
  };

  const handleCheckBox = (e) => {
    setUserData({
      ...userData,
      ["price"]: e.target.checked ? 0 : '',
    });
  };

  const getSecondRegionList = () => {
    return regionList.find(item => {return item.name === userData.firstRegion}).lst
  };

  useEffect(() => {
    setUserData({
      ...userData,
      ["secondRegion"]: getSecondRegionList()[0].name
    });
  }, [userData.firstRegion]);

  const handleClickButton = async () => {
    // TODO : 양식 다 채웠는지 확인
    // TODO : create data
    // await createDataset({ src: userFile.file, title: userData.title, ... });
  };

  return (
    <PostFormContainer>
      <ImageInput handleUploadFile={handleUploadFile} 
                  handleDeleteFile={handleDeleteFile} 
                  currentCount={currentCount} 
                  imageList={imageList} />
      <TitleInput text="글 제목" onChange={(e) => handleInputData(e, 'title')} />
      <TitleInput text="서비스 지역" disabled={true}>
        <SelectBoxContainer>
          <SelectBox value={userData.firstRegion}
                     onChange={(e) => handleInputData(e, 'firstRegion')} 
                     regionData={regionList} />
          <SelectBox value={userData.secondRegion}
                     onChange={(e) => handleInputData(e, 'secondRegion')} 
                     regionData={getSecondRegionList()} />
        </SelectBoxContainer>
      </TitleInput>
      <TitleInput type="number"
                  text="&#8361;가격" 
                  value={userData.price}
                  disabled={userData.price === 0}
                  onChange={(e) => handleInputData(e, 'price')}>
        <CheckBox text={"무료"} onChange={handleCheckBox} />
      </TitleInput>
      <ContentInput text="내용" 
                    value={userData.content}
                    placeholder={contentText}
                    onChange={(e) => handleInputData(e, 'content')} />
      <ContentInput title 
                    text="지원양식"
                    value={userData.form}
                    placeholder={formText}
                    onChange={(e) => handleInputData(e, 'form')} />
      <ContactInput onChange={handleInputData} />
      <Button onClick={handleClickButton}>작성완료</Button>
    </PostFormContainer>
  );
};
  
export default PostForm;