import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import ModelDetailPage from "./pages/ModelDetailPage";

const AppContainer = styled.div`
  min-height: 100vh;
  padding-left: 16px;
  padding-right: 16px;
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
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
