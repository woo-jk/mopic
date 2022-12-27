import styled from "styled-components";

const TypeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TypeItem = styled.div`
  width: max-content;

  border: 1px solid ${({ isSelected }) => (isSelected ? "#502CE8" : "#d6d6d6")};
  border-radius: 999px;

  padding: 13px 20px;

  font-weight: 500;
  font-size: 18px;
  color: ${({ isSelected }) => (isSelected ? "#502CE8" : "#6a6a6a")};

  cursor: pointer;
`;

const TypeList = ({ selectedType, setSelectedType }) => {
  const handleClickType = (e) => {
    if (selectedType.includes(e.target.innerHTML)) {
      setSelectedType(selectedType.filter((item) => item !== e.target.innerHTML));
      return;
    }
    if (selectedType.length >= 3) return;
    setSelectedType([...selectedType, e.target.innerHTML]);
  };

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
        <TypeItem key={item} onClick={handleClickType} isSelected={selectedType.includes(item)}>
          {item}
        </TypeItem>
      ))}
    </TypeListContainer>
  );
};

export default TypeList;
