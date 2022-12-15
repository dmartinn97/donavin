import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet } from "../Helpers/Responsive";
import { VscMenu, VscClose } from "react-icons/vsc";
import resume from "../Assets/Downloads/DonavinMartin2022.pdf";
import {
  IoIosPerson,
  IoIosApps,
  IoMdChatboxes,
  IoIosDownload,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";

const Navigation = styled.div`
  display: none;
  ${tablet({ display: "block", width: "100%" })}
`;
const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuIcon = styled(VscMenu)`
  color: white;
  font-size: 2.5rem;
  display: ${(props) => (props.openMenu ? "none" : "block")};
`;
const CloseIcon = styled(VscClose)`
  color: white;
  font-size: 2.5rem;
`;
const MobileMenu = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #0b2545;
  flex-direction: column;
  display: ${(props) => (props.openMenu ? "flex" : "none")};
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Home = styled.a`
  color: white;
  font-size: 2.25rem;
  font-family: "Reenie Beanie", cursive;
  &:hover {
    color: #cca000;
    cursor: pointer;
  }
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
const ContactIcon = styled(IoMdChatboxes)``;
const DownloadIcon = styled(IoIosDownload)``;
const GithubIcon = styled(IoLogoGithub)``;
const LinkedinIcon = styled(IoLogoLinkedin)``;

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <Navigation>
      <NavigationContainer>
        <Home href=".">Donavin Martin</Home>
        <MenuIcon openMenu={isOpen} onClick={openMenu} />
      </NavigationContainer>

      <MobileMenu openMenu={isOpen}>
        <IconContainer>
          <CloseIcon onClick={openMenu} />
        </IconContainer>

        <LinksContainer>
          <NavItem to="/" onClick={openMenu}>
            <PersonIcon />
            <NavigationLink>About</NavigationLink>
          </NavItem>
          {/* <NavItem to="/projects">
          <ProjectsIcon />
          <NavigationLink>Projects</NavigationLink>
        </NavItem> */}
          <NavItem to="/contact" onClick={openMenu}>
            <ContactIcon />
            <NavigationLink>Contact</NavigationLink>
          </NavItem>
          <NavItemA href={resume} download>
            <DownloadIcon />
            <NavigationLink>Resume</NavigationLink>
          </NavItemA>
          <NavItemA
            href="https://github.com/whosdonavin"
            target="_blank"
            onClick={openMenu}
          >
            <GithubIcon />
            <NavigationLink>GitHub</NavigationLink>
          </NavItemA>
          <NavItemA
            href="https://www.linkedin.com/in/donavinmartin"
            target="_blank"
            onClick={openMenu}
          >
            <LinkedinIcon />
            <NavigationLink>LinkedIn</NavigationLink>
          </NavItemA>
        </LinksContainer>
      </MobileMenu>
    </Navigation>
  );
};

export default MobileNavigation;
