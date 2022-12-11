import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import OAuth2Kakao from "./pages/auth/OAuth2Kakao";
import EditProfilePage from "./pages/EditProfilePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ModelDetailPage from "./pages/ModelDetailPage";
import UserTypePage from "./pages/UserTypePage";

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: white;

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="model/:id" element={<ModelDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="edit/type/:id" element={<UserTypePage />} />
          <Route path="edit/profile/:id" element={<EditProfilePage />} />
          <Route path="oauth2/kakao" element={<OAuth2Kakao />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
