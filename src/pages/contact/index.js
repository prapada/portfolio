import React, {useState, useRef} from "react";
import styled from "styled-components";
import emailjs, {init} from '@emailjs/browser';
import Title from "../../components/title";
import {BgColor, Black, White} from "../../components/color";
import InputField from "../../components/inputField";
import BaseButton from "../../components/button";
init("user_PPQ9RHVZUWIDXd9AlgqvR");

function Contact(props) {
  const form = useRef();
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kkfg16w', 'template_xpae3mz', form.current, 'user_PPQ9RHVZUWIDXd9AlgqvR')
      .then((result) => {
          form.current.reset();
          setText("Thank you for contacting me");
          setTimeout(() => setText(""), 5000);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Holder id="contact">
      <Title text="Contact" top="2%" left="5%" />
      <HolderForm>
        <form autoComplete={"off"} ref={form} onSubmit={sendEmail}>
          <InputField
            title={"Name"}
            type={"text"}
            name={"name"}
          />
          <InputField
            title={"Email"}
            type={"text"}
            name={"email"}
          />
          <InputField
            multiline
            title={"Message"}
            type={"text"}
            name={"message"}
          />
          <HolderButton>
            <Text>{text}</Text>
            <BaseButton type={"submit"} title={"Submit"}/>
          </HolderButton>
        </form>
      </HolderForm>
    </Holder>
  );
}

export default Contact;

const Holder = styled.div`
  background-color: ${Black};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HolderForm = styled.div`
  width: 30vw;
  background: ${BgColor};
  padding: 3rem;
  border: 2px solid ${White};
  height: fit-content;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 425px) {
    width: 80%;
    padding: 1.5rem;
  }
`;

const HolderButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Text = styled.span`
  color: ${White};
  font-size: 1.2rem;
`;
