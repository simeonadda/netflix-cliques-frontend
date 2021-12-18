import React, { useState } from "react";
import NetflixModal from "./NetflixModal"
import { ThemeProvider, Modal, Container, Row, Col, Button, Text, Icon, Anchor, Image } from "atomize";

function TitlesWatched() {
  const [modal, showModal] = useState(false)

  return(
    <Container>
      <Row d="flex" justify="space-between">
        <Col d="flex" justify="flex-start">
          <Text
            textSize="subheader"
            textColor="black"
            fontFamily="code"
            textWeight="700"
          >
            WATCHED
          </Text>
        </Col>
        <Col d="flex" justify="flex-end" onClick={() => showModal(true)}>
          <Anchor d="flex" flexDir="row" align="center">
            <Icon
              name="Add"
              color="success800"
              size="20px"
            />
            <Text
              textSize="subheader"
              textColor="black"
              fontFamily="code"
              textWeight="700"
            >
              ADD A TITLE YOU'VE WATCHED
            </Text>
          </Anchor>
        </Col>
        <NetflixModal
          isOpen={modal}
          onClose={() => showModal(false)}
        />
      </Row>
      <br></br>
      <Container>
        <Row bg="">
        <Col d="flex" justify="left" shadow="3">
          <Image maxH="233px" w="166px" shadow="3" hoverShadow="4" src="https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRkCIBxM7Odvfohs637mOsIcWSQvLN98KvmlxXqROGRY3OuU3mFdfLOLk2qzA1dOMZg-r79wH18bhWqkqc0I5qv0dw.jpg?r=50e">
          </Image>
        </Col>
      </Row>
      </Container>
    <br></br>
    <hr></hr>
  </Container>
  )
}

export default TitlesWatched;
