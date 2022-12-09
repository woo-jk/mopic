import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
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
          <Route path="login/type/:id" element={<UserTypePage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
