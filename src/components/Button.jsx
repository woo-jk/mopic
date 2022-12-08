import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "48px"};

  font-weight: ${({ weight }) => weight || "700"};
  font-size: ${({ size }) => size || "16px"};

  color: #ffffff;

  background: #502ce8;
  border-radius: 6px;
  border: none;

  cursor: pointer;

  :disabled {
    color: #bbbbbb;
    background: #f4f4f4;

    cursor: not-allowed;
  }
`;
