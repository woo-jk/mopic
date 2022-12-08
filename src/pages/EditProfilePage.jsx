import AppHeader from "../components/AppHeader";
import ModifyForm from "../components/editProfilePage/EditForm";
import SubmitButton from "../components/SubmitButton";
import styled from "styled-components";
import { userInfoList } from "../components/editProfilePage/dummyData";

const FormContainer = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileModifyPage = () => {
  const USERID = 0;
  const data = userInfoList[USERID];

  return (
    <div>
      <AppHeader text="프로필 수정" />
      <FormContainer>
        <ModifyForm src={data.image} name={data.name}/>
        <SubmitButton />
      </FormContainer>
    </div>
  );
};

export default ProfileModifyPage;