import React from "react";
import { Container } from "./styles";

const Main: React.FC = () => {
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, explicabo, neque numquam natus, tempore provident optio praesentium autem voluptatem ipsum quibusdam distinctio illo culpa obcaecati deleniti expedita blanditiis id repellat!";

  return (
    <Container>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
    </Container>
  );
};

export default Main;
