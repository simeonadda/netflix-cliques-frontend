import React, { useState } from "react";
import { ThemeProvider, Container, Div, Button, Text, Col, } from "atomize";


function TrendingTitles() {
  const theme = {
    fontFamily: {
      primary: 'Bitter, serif',
      secondary: 'Oswald, serif',
      code: 'Raleway, san-serif'
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <Div bg="gray300" p="2rem">
        <Col d="flex" flexDir="column" align="center">
          <Div>
            <Text
              textSize="display1"
              textColor="black"
              fontFamily="primary"
            >
              Share your opinions on your favorite Netflix titles.
            </Text>
            <Text
              textSize="title"
              textColor="black"
              fontFamily="code"
            >
              Don't worry about being late to the party, connect with others who are watching what you're watching now!
            </Text>
          </Div>
          <br></br>
          <Div>
            <Text
              textSize="display1"
              textColor="black"
              fontFamily="primary"
            >
              Top Trending Shows
            </Text>
          </Div>


          <Container>

          </Container>


          <br></br>
          <Div>
            <Text
              textSize="display1"
              textColor="black"
              fontFamily="primary"
            >
              Top Trending Movies
            </Text>
          </Div>
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
            GET IN ON THE WATCH PARTY
          </Button>
        </Col>
      </Div>
    </ThemeProvider>
  )
}

export default TrendingTitles;
