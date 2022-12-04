import MainBanner from "../components/MainBanner";
import MainHeader from "../components/MainHeader";
import RecommendationList from "../components/RecommendationList";

const dummyData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "상담 서비스",
    price: "50,000원~",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    title: "네일 아트 모델",
    price: "30,000원~",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1497498093158-8be2377762d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    title: "라인드로잉 타투",
    price: "무료",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "웨딩 촬영",
    price: "협의",
  },
];
const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <MainBanner />
      <RecommendationList dataList={dummyData} />
    </div>
  );
};

export default MainPage;
