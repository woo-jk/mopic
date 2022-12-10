import styled from "styled-components";

const TypeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TypeItem = styled.div`
  width: max-content;

  border: 1px solid #d6d6d6;
  border-radius: 999px;

  padding: 13px 20px;

  font-weight: 500;
  font-size: 18px;
  color: #6a6a6a;

  cursor: pointer;
`;

const TypeList = () => {
  const types = [
    "반영구",
    "미술",
    "타투",
    "패션",
    "스냅사진",
    "헤어",
    "광고촬영",
    "커머스",
    "바디/왁싱",
    "메이크업",
    "기타",
  ];
  return (
    <TypeListContainer>
      {types.map((item) => (
        <TypeItem key={item}>{item}</TypeItem>
      ))}
    </TypeListContainer>
  );
};

export default TypeList;
