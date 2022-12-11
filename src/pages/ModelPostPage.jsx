import styled from "styled-components";
import Header from "../components/Header";
import PostForm from "../components/modelPostPage/PostForm";
import { XIcon } from "../components/Icon";

const ModelPostPageContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const ModelPostPage = () => {
  return (
    <ModelPostPageContainer>
      <Header leftChild={<XIcon />} headText="구인글 올리기" />
      <PostForm />
    </ModelPostPageContainer>
  );
};

export default ModelPostPage;