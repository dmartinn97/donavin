import { useState } from "react";
import Container from "../Components/Container";
import ContactForm from "../Components/Contact/ContactForm";
import MessageRequest from "../Components/Contact/MessageRequest";

const Contact = () => {
  const [requestAttempted, setRequestAttempted] = useState(false);
  const [requestData, setRequestData] = useState([]);
  return (
    <Container sectionHeading="Contact">
      {requestAttempted ? (
        <MessageRequest requestData={requestData} />
      ) : (
        <ContactForm
          setRequestAttempted={setRequestAttempted}
          setRequestData={setRequestData}
        />
      )}
    </Container>
  );
};

export default Contact;
