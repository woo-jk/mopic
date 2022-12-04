import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";

const AppContainer = styled.div`
  min-height: 100vh;
  padding-left: 16px;
  padding-right: 16px;
  background-color: white;

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 90vw;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
