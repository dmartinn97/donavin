import styled from "styled-components";
import { tablet } from "../Helpers/Responsive";
import Container from "../Components/Container";
import Switcher from "../Components/About/Switcher";

const Biography = styled.div`
  padding-bottom: 2rem;
`;
const BioText = styled.p`
  text-align: center;
  ${tablet({ "font-size": ".75rem" })}
`;
const About = () => {
  return (
    <Container sectionHeading="About Me">
      <Biography>
        <BioText>
          As an experienced QA Engineer, I am excited to embark on a new journey
          in front-end development. With my background in quality assurance, I
          have honed my attention to detail and am ready to put my skills to use
          in creating visually appealing and user-friendly web applications.
        </BioText>
      </Biography>
      <Switcher />
    </Container>
  );
};

export default About;
