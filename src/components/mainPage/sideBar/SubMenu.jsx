import styled from "styled-components";

const SubMenuContainer = styled.div`
  padding: 25px 0 25px 0;
  border-bottom: 1px solid #f1f1f1;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #413f3f;

  margin-bottom: 25px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Item = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  font-weight: 600;
  font-size: 14px;
  color: #413f3f;
`;

const ItemTempImage = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;

  background: #d9d9d9;
`;

const SubMenu = ({ title, dataList }) => {
  return (
    <SubMenuContainer>
      <Title>{title}</Title>
      <ItemContainer>
        {dataList.map((item) => (
          <Item key={item.title}>
            <ItemTempImage />
            {item.title}
          </Item>
        ))}
      </ItemContainer>
    </SubMenuContainer>
  );
};

export default SubMenu;
