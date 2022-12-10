import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "48px"};

  font-weight: ${({ weight }) => weight || "700"};
  font-size: ${({ size }) => size || "16px"};

  color: ${({ color }) => color || "white"};

  background: ${({ background }) => background || "#502ce8"};
  border-radius: 6px;
  border: none;

  cursor: pointer;

  gap: 10px;

  :disabled {
    color: #bbbbbb;
    background: #f4f4f4;

    cursor: not-allowed;
  }
`;
