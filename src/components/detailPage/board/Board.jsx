import styled from "styled-components";
import BoardTitle from "../board/BoardTitle";
import BoardProfile from "../board/BoardProfile";
import BoardService from "../board/BoardService";
import BoardContent from "../board/BoardContent";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -45px;
  
  border-radius: 20px 20px 0px 0px;
  padding: 24px 16px 0 26px;
  background-color: white;
`;

const Board = ({title, user, category, location, price, description, form}) => {
  return (
    <BoardContainer>
      <BoardTitle text={title}/>
      <BoardProfile user={user} type={category}/>
      <BoardService location={location} price={price}/>
      <BoardContent description={description} form={form} />
    </BoardContainer>
  );
};

export default Board;