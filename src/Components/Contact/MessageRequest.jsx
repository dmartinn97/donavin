import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  gap: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Message = styled.p``;
const HomeLink = styled(Link)`
  gap: 0.5rem;
  opacity: 0.7;
  color: white;
  display: flex;
  padding: 1rem 0.5rem;
  align-items: center;
  background: #cca000;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const MessageRequest = ({ requestData }) => {
  return (
    <>
      {requestData.map((data) => (
        <Container key={data.status}>
          <Message>{data.statusMessage}</Message>

          <HomeLink to="/">Back Home</HomeLink>
        </Container>
      ))}
    </>
  );
};

export default MessageRequest;
