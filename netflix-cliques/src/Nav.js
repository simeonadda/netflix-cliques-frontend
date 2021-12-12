import React, { useState } from "react";
import { ThemeProvider, Div, Row, Col, Text, Anchor } from "atomize";

function Nav() {
const [userLoggedIn, setUserLoggedIn] = useState(false)

const theme = {
  fontFamily: {
    primary: 'Teko, sans-serif',
    secondary: 'Oswald, sans-serif'
  }
}
  return(
    <ThemeProvider theme={theme}>
      <Div bg="black" p={{ y:"14px" }}>
      {userLoggedIn ?
        <Row d="flex" align="center">
          <Col>
            <Text
              fontFamily="primary"
              textSize="display2"
              >
              <Anchor textColor="white" hoverTextColor="danger800">NETFLIX CLIQUES</Anchor>
            </Text>
          </Col>
          <Col>
            <Text
              fontFamily="secondary"
              textSize="title"
              textColor="danger800"
              d="flex"
              justify="space-around"
              p={{ x: {md: "4rem", lg: "10rem", xl: "12rem"} }}
              >
              <Anchor textColor="white" hoverTextColor="danger800">JOIN A CLIQUE</Anchor> |
              <Anchor textColor="white" hoverTextColor="danger800"> ABOUT</Anchor> |
              <Anchor textColor="white" hoverTextColor="danger800"> USERNAME</Anchor>
            </Text>
          </Col>
        </Row>
        :
        <Row d="flex" align="center">
          <Col>
              <Text
                fontFamily="primary"
                textSize="display2"
              >
                <Anchor textColor="white" hoverTextColor="danger800" >NETFLIX CLIQUES</Anchor>
              </Text>
          </Col>
          <Col>
            <Text
              fontFamily="secondary"
              textSize="subheader"
              textColor="danger800"
              d="flex"
              justify="space-around"
              p={{ x: {md: "4rem", lg: "10rem", xl: "12rem"} }}
              >
              <Anchor textColor="white" hoverTextColor="danger800">JOIN A CLIQUE</Anchor>
              <Anchor textColor="white" hoverTextColor="danger800">ABOUT</Anchor>
              <Anchor textColor="white" hoverTextColor="danger800">SIGN IN</Anchor>
              <Anchor textColor="white" hoverTextColor="danger800">SIGN UP</Anchor>
            </Text>
          </Col>
        </Row>
      }
      </Div>
    </ThemeProvider>
  )
}

export default Nav;
