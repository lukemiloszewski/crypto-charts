import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Paragraph } from "@components";

export function Home() {
  return (
    <Container>
      <Link to="/btc">
        <Button>Bitcoin</Button>
      </Link>
      <Paragraph>Welcome to Home</Paragraph>
    </Container>
  );
}
