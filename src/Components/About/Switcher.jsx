import { useState } from "react";
import Experience from "./Experience";
import styled from "styled-components";
import Competencies from "./Competencies";
import { tablet } from "../../Helpers/Responsive";

const Conatiner = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Navigation = styled.div``;
const Divider = styled.span`
  padding: 0 2rem;
  color: rgba(255, 255, 255, 0.25);
`;
const NavigationLink = styled.button`
  border: none;
  color: white;
  background: none;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: ${(props) => props.selected};
  ${tablet({ "font-size": "1rem" })}
  &:hover {
    color: #cca000;
    cursor: pointer;
  }
`;
const Content = styled.div`
  width: 100%;
`;

const Switcher = () => {
  const contentComponents = [<Experience />, <Competencies />];
  const [renderedContent, setRenderedContent] = useState(0);
  function displayContent(index) {
    return contentComponents[index];
  }

  return (
    <Conatiner>
      <Navigation>
        <NavigationLink
          selected={renderedContent === 0 ? "1px solid #cca000" : 0}
          onClick={() => {
            setRenderedContent(0);
          }}
        >
          Experience
        </NavigationLink>
        <Divider>|</Divider>
        <NavigationLink
          selected={renderedContent === 1 ? "1px solid #cca000" : 0}
          onClick={() => {
            setRenderedContent(1);
          }}
        >
          Competencies
        </NavigationLink>
      </Navigation>
      <Content>{displayContent(renderedContent)}</Content>
    </Conatiner>
  );
};

export default Switcher;
