import React from "react";
import Networks from "../Networks";
import {
  ContactContainer,
  ContactMessage,
  ContactEmail,
  ContactPhome,
} from "./styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactMessage>Feel Free To Reach Me</ContactMessage>
      <ContactMessage>I'm Open To More Opportunities</ContactMessage>
      <ContactEmail href="mailto:batistatomeoliveira96@gmail.com">
        batistatomeoliveira96@gmail.com
      </ContactEmail>
      <ContactPhome>+244941551087 / +244952120285</ContactPhome>

      <Networks />
    </ContactContainer>
  );
};

export default Contact;
