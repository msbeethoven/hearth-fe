import styled from "styled-components";

export const Cell = styled.div<{ empty: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.empty ? "#f0f0f0" : "#fff")};
  border: 1px solid #ddd;
  height: 100px;
  overflow: auto;
`;

export const Holiday = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
