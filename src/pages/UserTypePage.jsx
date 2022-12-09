import styled from "styled-components";
import Header from "../components/Header";
import { LeftArrowIcon } from "../components/Icon";
import TypeList from "../components/userTypePage/TypeList";

const UserTypePageContainer = styled.div`
  position: relative;
  padding-left: 18px;
  padding-right: 18px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 160px;
  padding-left: 18px;
  padding-right: 18px;

  gap: 65px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
`;

const SubText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;

  color: #a6a6a6;
`;

const UserTypePage = () => {
  return (
    <UserTypePageContainer>
      <Header leftChild={<LeftArrowIcon color="black" width={12} height={20} />} />
      <ContentContainer>
        <TextContainer>
          <Title>
            어떤 유형의 <br /> 작업자이신가요?
          </Title>
          <SubText>최대 3개 선택 가능</SubText>
        </TextContainer>
        <TypeList />
      </ContentContainer>
    </UserTypePageContainer>
  );
};

export default UserTypePage;
