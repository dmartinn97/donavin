import "./App.css";
import styled from "styled-components";
import { tablet } from "./Helpers/Responsive";
import LeftContent from "./Components/Layout/LeftContent";
import RightContent from "./Components/Layout/RightContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = styled.section`
  display: flex;
  height: 100vh;
  margin: 0 auto;
`;
const LeftSection = styled.div`
  width: 15%;
  padding: 3rem 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  ${tablet({ display: "none" })}
`;
const RightSection = styled.div`
  width: 85%;
  padding: 3rem 2rem;
  ${tablet({ width: "100%", padding: "1rem" })}
`;
function App() {
  return (
    <Router>
      <Layout className="App">
        <LeftSection name="LeftSection">
          <LeftContent />
        </LeftSection>
        <RightSection name="RightSection">
          <RightContent Routes={Routes} Route={Route} />
        </RightSection>
      </Layout>
    </Router>
  );
}

export default App;
