import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  padding: 4rem;
  box-sizing: border-box;
`;

export const CenteredDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: fit-content;
  text-align: center;
  justify-content: ${(props) => props.justify};
`;

export const SvgContainer = styled.div`
  height: fit-content;
  width: 100%;
`;

export const WorkContainer = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
`;
