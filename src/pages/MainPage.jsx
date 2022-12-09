import MainHeader from "../components/mainPage/MainHeader";
import MainBanner from "../components/mainPage/MainBanner";
import RecommendationList from "../components/mainPage/recommendation/RecommendationList";
import StudioList from "../components/mainPage/studio/StudioList";
import ModelWorkList from "../components/mainPage/modelWork/ModelWorkList";
import { recommendationDataList, studioDataList, modelWorkDataList, userData } from "../components/mainPage/dummyData";
import SideBar from "../components/mainPage/sideBar/SideBar";
import { useState } from "react";
import styled from "styled-components";

const MainPageContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const MainPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <MainPageContainer>
      {showSideBar && <SideBar userData={userData} setShowSideBar={setShowSideBar} />}
      <MainHeader setShowSideBar={setShowSideBar} />
      <MainBanner />
      <RecommendationList dataList={recommendationDataList} />
      <StudioList dataList={studioDataList} />
      <ModelWorkList dataList={modelWorkDataList} />
    </MainPageContainer>
  );
};

export default MainPage;
