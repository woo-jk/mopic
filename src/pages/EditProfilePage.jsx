import styled from "styled-components";
import Header from "../components/Header";
import EditForm from "../components/editProfilePage/EditForm";
import { userDataList } from "../components/editProfilePage/dummyData";
import { XIcon } from "../components/Icon";

const EditProfilePageContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const EditProfilePage = () => {
  const userData = userDataList[0];

  return (
    <EditProfilePageContainer>
      <Header leftChild={<XIcon />} headText="프로필 수정" />
      <EditForm userData={userData}/>
    </EditProfilePageContainer>
  );
};

export default EditProfilePage;