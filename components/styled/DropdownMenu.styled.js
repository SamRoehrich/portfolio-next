import styled from "styled-components";

export const DropdownMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.button`
  background-color: #3268a8;
  height: 5rem;
  width: 10rem;
  cursor: pointer;
  color: white;
  border: 1px solid white;
  font-size: 20px;

  &:hover {
    background-color: white;
    color: black;
  }
`;
