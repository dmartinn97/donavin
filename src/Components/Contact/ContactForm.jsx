import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { tablet } from "../../Helpers/Responsive";

const Form = styled.form`
  width: 80%;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  ${tablet({ width: "100%", gap: "1.25rem" })}
`;
const Group = styled.div`
  gap: 0.75rem;
  display: flex;
  ${tablet({ "flex-direction": "column", gap: "1.25rem" })}
`;
const UserInput = styled.div`
  width: 100%;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 100%;
  border-width: 5px 0;
  padding: 0.75rem 1rem;
  border: solid #0b2545;
  ${tablet({ border: "none" })}

  &:focus {
    outline: none;
    border: 5px solid #cca000;
  }
`;
const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  /* ${tablet({ "flex-direction": "column", gap: "1.25rem" })}; */
`;
const Box = styled.textarea`
  width: 100%;
  resize: none;
  height: 100%;
  border-width: 5px 0;
  padding: 0.75rem 1rem;
  border: solid #0b2545;
  ${tablet({ border: "none" })}

  &:focus {
    outline: none;
    border: 5px solid #cca000;
  }
`;
const Send = styled.button`
  width: 20%;
  color: #0b2545;
  background: #cca000;
  border-width: 5px 0;
  padding: 0.75rem 1rem;
  border: solid #0b2545;
  pointer-events: ${(props) => (props.validData ? "auto" : "none")};
  opacity: ${(props) => (props.validData ? "1" : ".5")};
  ${tablet({ width: "100%", border: "none" })}
  &:hover {
    cursor: pointer;
    background: #ffce1a;
    border: 5px solid #ffce1a;
  }
`;

const ContactForm = ({ setRequestAttempted, setRequestData }) => {
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    phoneNumber: null,
    emailAddress: null,
    message: null,
  });

  function handleType(event) {
    let key = event.target.name;
    setFormData({ ...formData, [key]: event.target.value });
    validateData();
  }

  function validateData() {
    let isValid = true;

    for (const key in formData) {
      if (formData[key] === null) {
        isValid = false;
      }
    }

    setIsValid(isValid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRequestAttempted(true);
    axios
      .post("https://donavinmartin.herokuapp.com/api/contact", formData)
      .then((response) => {
        setRequestData([response.data]);
      });
  }

  return (
    <Form>
      <Group>
        <UserInput>
          <Input placeholder="Name" name="name" onChange={handleType} />
        </UserInput>
        <UserInput>
          <Input placeholder="Phone" name="phoneNumber" onChange={handleType} />
        </UserInput>
      </Group>
      <UserInput>
        <Input placeholder="Email" name="emailAddress" onChange={handleType} />
      </UserInput>
      <MessageContainer>
        <Box placeholder="Message" name="message" onChange={handleType} />
      </MessageContainer>
      <Send onClick={handleSubmit} validData={isValid}>
        Send
      </Send>
    </Form>
  );
};

export default ContactForm;
