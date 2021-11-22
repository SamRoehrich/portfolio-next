import styled from "styled-components";
import Dropdown from "../components/Dropdown";
import { Container } from "../components/styled/Container.styled";

const Title = styled.h1`
  font-size: 30px;
  color: #8697a3;
`;
export default function Home() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Dropdown />
      </div>
    </Container>
  );
}
