import MainHeader from "../components/mainPage/MainHeader";
import MainBanner from "../components/mainPage/MainBanner";
import RecommendationList from "../components/mainPage/recommendation/RecommendationList";
import StudioList from "../components/mainPage/studio/StudioList";
import ModelWorkList from "../components/mainPage/modelWork/ModelWorkList";
import { recommendationDataList, studioDataList, modelWorkDataList } from "../components/mainPage/dummyData";

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <MainBanner />
      <RecommendationList dataList={recommendationDataList} />
      <StudioList dataList={studioDataList} />
      <ModelWorkList dataList={modelWorkDataList} />
    </div>
  );
};

export default MainPage;
