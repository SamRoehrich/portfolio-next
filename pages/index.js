import Dropdown from "../components/Dropdown";
import { HomeButton } from "../components/styled/Button.styled";
import {
  CenteredDiv,
  Container,
  SvgContainer,
  WorkContainer,
} from "../components/styled/Container.styled";
import {
  ContentText,
  HeroText,
  SemiHeroText,
} from "../components/styled/Text.styled";
import GraphqlSvg from "../components/svgs/GraphqlSvg";
import NextSvg from "../components/svgs/NextSvg";
import ReactSvg from "../components/svgs/ReactSvg";
import SassSvg from "../components/svgs/SassSvg";
import TailwindSvg from "../components/svgs/TailwindSvg";

export default function Home() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          width: "100%",
          justifyContent: "space-between",
          height: "fit-content",
        }}
      >
        <Dropdown />
      </div>
      <CenteredDiv direction="column" justify="space-between">
        <HeroText>Hi, I am Sam.</HeroText>
        <br />
        <SemiHeroText>I am a full stack web developer.</SemiHeroText>
        <br />
        <HeroText>Skills</HeroText>
        <CenteredDiv>
          <SvgContainer>
            <SassSvg />
          </SvgContainer>
          <SvgContainer>
            <ReactSvg />
          </SvgContainer>
          <SvgContainer>
            <TailwindSvg />
          </SvgContainer>
          <SvgContainer>
            <NextSvg />
          </SvgContainer>
          <SvgContainer>
            <GraphqlSvg />
          </SvgContainer>
        </CenteredDiv>
      </CenteredDiv>
      {/* <CenteredDiv direction="column">
        <HeroText>Some of my Work</HeroText>
        <WorkContainer>
          <div style={{ width: "33%" }}>
            <SemiHeroText>CoachQL</SemiHeroText>
            <br />
            <ContentText>
              CoachQL is a cross platform application for climbing coaches and
              athletes to easily share data and information enabling athletes to
              reach new heights. <br />
              Tech Stack : <br /> React, React Native, Apollo, Postgres,
              TypeScript
            </ContentText>
          </div>
        </WorkContainer>
      </CenteredDiv> */}
    </Container>
  );
}
