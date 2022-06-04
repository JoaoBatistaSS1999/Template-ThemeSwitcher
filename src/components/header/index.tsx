import { Container, Button } from "./styles";
import React from "react";

interface Props {
  togle: () => void;
}

const Header: React.FC<Props> = ({ togle }) => {
  return (
    <Container>
      <h3>Testing</h3>
      <Button onClick={togle}>Switch</Button>
    </Container>
  );
};

export default Header;
