import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Paragraph } from "@components";

export function Bitcoin() {
  return (
    <Container>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Paragraph>30 Day Price Chart</Paragraph>
    </Container>
  );
}
