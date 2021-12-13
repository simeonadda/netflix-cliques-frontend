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
              ADD NEW TITLE
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
          <Image h="120px" w="120px" src="./netflix_n.png"></Image>
          <Text fontFamily="code" textSize="subheader">You currently have no titles. <Anchor>Add new title.</Anchor></Text>
      </Container>
    <br></br>
    <hr></hr>
  </Container>
  )
}

export default TitlesWatched;
