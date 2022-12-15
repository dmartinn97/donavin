import styled from "styled-components";
import { tablet } from "../../Helpers/Responsive";

const Container = styled.section`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
const SkillSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
const Heading = styled.h3`
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  ${tablet({ "font-size": ".75rem" })}
`;
const Items = styled.ul`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Item = styled.li`
  font-size: 1rem;
  ${tablet({ "font-size": ".75rem" })}
`;
const Competencies = () => {
  const languages = ["HTML", "CSS", "SASS", "JAVASCRIPT", "TYPESCRIPT", "SQL"];
  const frameworks = [
    "BOOTSTRAP",
    "REACT",
    "REDUX",
    "STYLED COMPONENTS",
    "SEQUELIZE",
    "NEXT.JS",
    "REACT NATIVE",
    "ELECTRON",
    "NODE.JS",
    "EXPRESS",
    "CYPRESS",
  ];
  const tools = [
    "NPM",
    "GULP",
    "GIT",
    "GITHUB",
    "BITBUCKET",
    "AZURE DEVOPS",
    "JIRA",
    "POSTMAN",
    "JENKINS",
    "HEROKU",
  ];
  return (
    <Container>
      <SkillSection>
        <Heading>Languages</Heading>
        <Items>
          {languages.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Items>
      </SkillSection>
      <SkillSection>
        <Heading>Libraries & Frameworks</Heading>
        <Items>
          {frameworks.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Items>
      </SkillSection>
      <SkillSection>
        <Heading>Tools & Platforms</Heading>
        <Items>
          {tools.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Items>
      </SkillSection>
    </Container>
  );
};

export default Competencies;
