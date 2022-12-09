import AppHeader from "../components/AppHeader";
import EditForm from "../components/editProfilePage/EditForm";
import { userDataList } from "../components/editProfilePage/dummyData";

const EditProfilePage = () => {
  const userData = userDataList[0];
  
  return (
    <div>
      <AppHeader text="프로필 수정" />
      <EditForm userData={userData}/>
    </div>
  );
};

export default EditProfilePage;