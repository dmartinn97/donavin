import styled from "styled-components";
import { tablet } from "../Helpers/Responsive";

const Parent = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  ${tablet({ width: "100%" })}
`;
const SectionHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  ${tablet({ "font-size": "2rem" })}
`;
const Container = ({ children, sectionHeading }) => {
  return (
    <Parent>
      <SectionHeading>{sectionHeading}</SectionHeading>
      {children}
    </Parent>
  );
};

export default Container;
