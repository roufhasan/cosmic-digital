import Container from "../Shared/Container";
import SectionTitle from "../Shared/SectionTitle";

import Form from "../Shared/Form";
import Maps from "../Shared/Maps";

const Contact = () => {
  return (
    <Container id="contact">
      <SectionTitle title="Let's start a project together" subTitle="Contact" />
      <Form />
      <Maps />
    </Container>
  );
};

export default Contact;
