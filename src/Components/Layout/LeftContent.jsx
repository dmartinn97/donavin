import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";

import {
  IoIosPerson,
  IoIosApps,
  IoMdChatboxes,
  IoIosDownload,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";

const Container = styled.section`
  gap: 4rem;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const Home = styled.a`
  color: white;
  font-size: 2rem;
  font-family: "Reenie Beanie", cursive;
  &:hover {
    color: #cca000;
    cursor: pointer;
  }
`;
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;
const NavItem = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
  &:hover {
    color: #cca000;
    cursor: pointer;
  }
`;
const NavItemA = styled.a`
  color: white;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
  &:hover {
    color: #cca000;
    cursor: pointer;
  }
`;
const NavigationLink = styled.span``;

const PersonIcon = styled(IoIosPerson)``;
const ProjectsIcon = styled(IoIosApps)``;
const GithubIcon = styled(IoLogoGithub)``;
const ContactIcon = styled(IoMdChatboxes)``;
const DownloadIcon = styled(IoIosDownload)``;
const LinkedinIcon = styled(IoLogoLinkedin)``;

const LeftContent = () => {
  return (
    <Container>
      <Home href=".">Donavin Martin</Home>

      <Navigation>
        <NavItem to="/">
          <PersonIcon />
          <NavigationLink>About</NavigationLink>
        </NavItem>
        {/* <NavItem to="/projects">
          <ProjectsIcon />
          <NavigationLink>Projects</NavigationLink>
        </NavItem> */}
        <NavItem to="/contact">
          <ContactIcon />
          <NavigationLink>Contact</NavigationLink>
        </NavItem>
        <NavItemA href="../../Assets/Downloads/DonavinMartin2022.pdf" download>
          <DownloadIcon />
          <NavigationLink>Resume</NavigationLink>
        </NavItemA>
        <NavItemA href="https://github.com/whosdonavin" target="_blank">
          <GithubIcon />
          <NavigationLink>GitHub</NavigationLink>
        </NavItemA>
        <NavItemA
          href="https://www.linkedin.com/in/donavinmartin"
          target="_blank"
        >
          <LinkedinIcon />
          <NavigationLink>LinkedIn</NavigationLink>
        </NavItemA>
      </Navigation>
      <Footer />
    </Container>
  );
};

export default LeftContent;
