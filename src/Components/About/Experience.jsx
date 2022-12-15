import styled from "styled-components";
import { tablet } from "../../Helpers/Responsive";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Item = styled.div`
  gap: 0.5rem;
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Details = styled.div`
  gap: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${tablet({ gap: ".5rem" })};
`;
const Company = styled.h3`
  display: flex;
  color: #cca000;
  font-size: 2rem;

  ${tablet({ "font-size": ".75rem" })}
`;
const Duration = styled.p`
  ${tablet({ "font-size": ".5rem" })}
`;
const Title = styled.p`
  font-size: 1.5rem;
  ${tablet({ "font-size": ".75rem" })}
`;

const Duties = styled.ul``;
const Duty = styled.li`
  font-size: 1rem;
  padding: 0.5rem 0;
  ${tablet({ "font-size": ".75rem" })}
`;

const Experience = () => {
  const jobs = [
    {
      company: "Quality Logic",
      duration: "Sept 2020 - Current",
      title: "QA Engineer",
      duties: [
        "Utilized Cypress & Jenkins to create and maintain comprehensive test suites, including End to End, Regression, and Smoke tests.",
        "Improved client quality assurance measures by integrating into agile development teams and implementing best practices.",
        "Reported on the results of automated tests, including defects, bugs, and other issues discovered during execution.",
      ],
    },
    {
      company: "Blank Canvas Technology",
      duration: "Oct 2018 - Sept 2020",
      title: "Full Stack Developer",
      duties: [
        "Developed and maintained full-stack web applications using a variety of technologies, including React and Node.js.",
        "Developed and implemented continuous integration and deployment processes to automate the delivery of web applications.",
        "Improved the user experience of web applications through the use of modern design principles and responsive design techniques.",
      ],
    },
    {
      company: "Sprint",
      duration: "Apr 2018 - Dec 2018",
      title: "Mobile Broadband Technician",
      duties: [
        "Maintained and secured company equipment, while providing thorough documentation of installations, repairs, and maintenance.",
        "Provided exceptional customer service by analyzing and resolving complex issues using resource documentation and other tools.",
        "Expertly installed and configured communication equipment for a wide range of commercial and residential settings.",
      ],
    },
  ];
  return (
    <Container>
      {jobs.map((item) => (
        <Item key={item.company}>
          <Details>
            <Company>{item.company}</Company>
            <Duration>{item.duration}</Duration>
          </Details>
          <Details>
            <Title>{item.title}</Title>
          </Details>
          <Duties>
            {item.duties.map((duty, index) => (
              <Duty key={item.company + index}>{duty}</Duty>
            ))}
          </Duties>
        </Item>
      ))}
    </Container>
  );
};

export default Experience;
