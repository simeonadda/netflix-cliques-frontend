import React, { useState } from "react";
import { ThemeProvider, Div, Row, Col, Text, Anchor } from "atomize";

function Footer() {
  const theme = {
    fontFamily: {
      primary: 'Teko, sans-serif',
      secondary: 'Oswald, sans-serif'
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <Div bg="black" textColor="white" p={{ y: "16px" }}>
        <Row d="flex" align="center">
          <Col>
            <Text
              fontFamily="secondary"
              textSize="subheader"
              d="flex"
              align="center"
              justify="space-around"
              p={{x: {md: "2rem", lg: "6rem", xl: "10rem"}}}
            >
              <Anchor textColor="white" hoverTextColor="danger800">ABOUT</Anchor>
              <Anchor textColor="white" hoverTextColor="danger800">NETFLIX CLIQUES</Anchor>
              <Anchor textColor="white" hoverTextColor="danger800">COMMUNITY</Anchor>
              <Anchor textColor="white" hoverTextColor="danger800">SUPPORT</Anchor>
            </Text>
          </Col>
          <Col>
            <Text
              fontFamily="primary"
              textSize="display3"
            >
              <Anchor textColor="white" hoverTextColor="danger800">NETFLIX CLIQUES</Anchor>
            </Text>
            <Div>© 2021 GA Bromeliad</Div>
          </Col>
        </Row>
      </Div>
    </ThemeProvider>
  )
}

export default Footer;
