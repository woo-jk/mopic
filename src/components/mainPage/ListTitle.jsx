import styled from "styled-components";

const ListTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;

  margin-bottom: 21px;
`;

const ViewMoreButton = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #939393;
  text-decoration-line: underline;

  cursor: pointer;
`;

const ListTitle = ({ text, viewMore }) => {
  return (
    <ListTitleContainer>
      <Title>{text}</Title>
      {viewMore && <ViewMoreButton>더보기</ViewMoreButton>}
    </ListTitleContainer>
  );
};

export default ListTitle;
