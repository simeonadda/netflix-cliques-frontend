import React, { useState } from "react";
import TrendingTitles from "./TrendingTitles";
import { ThemeProvider, Div, Button, Text, Icon, Row, Col, Image } from "atomize";

function Welcome() {
  const theme = {
    fontFamily: {
      primary: 'Bitter, serif',
      secondary: 'Oswald, serif',
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <Div bg="white">
        <Div d="flex" justify="space-around">
          <Row p="0rem" d="flex" justify="space-between" align="center">
            <Col size="5" d="flex" flexDir="column" align="center">
              <Text
                textSize="display3"
                textColor="black"
                fontFamily="primary"
              >
              Binge watch?<br></br>
              Let's talk.
              </Text>
              <br></br>
              <Button
                fontFamily="secondary"
                textSize="heading"
                p="2rem"
                bg="danger800"
                hoverBg="danger700"
                shadow="3"
                hoverShadow="4"
                m={{}}
              >
                CREATE A CLIQUE
              </Button>
            </Col>
            <Col size="7">
              <Image border="0px solid" borderColor="white" p="0rem" src="https://media1.giphy.com/media/lqLTI5tCAkLiQtsOGM/giphy.gif?cid=ecf05e47s5i01ye8d3bqke7slv17tclw3ovbdzbd1cf2ajsv&rid=giphy.gif&ct=g"></Image>
            </Col>
          </Row>
        </Div>
        <TrendingTitles />
      </Div>
    </ThemeProvider>
  )
}

export default Welcome;
