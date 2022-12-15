import styled from "styled-components";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import NotFound from "../../Pages/NotFound";
import Projects from "../../Pages/Projects";
import { tablet } from "../../Helpers/Responsive";
import MobileNavigation from "../MobileNavigation";

const Container = styled.section`
  height: 100%;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  ${tablet({ gap: "3rem" })}
`;
const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const RightContent = ({ Routes, Route }) => {
  return (
    <Container>
      <Navigation>
        <MobileNavigation />
      </Navigation>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default RightContent;
