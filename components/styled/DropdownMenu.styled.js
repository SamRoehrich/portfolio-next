import styled from "styled-components";

export const DropdownMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }
`;
