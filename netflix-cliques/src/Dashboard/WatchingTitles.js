import React, { useState } from "react";
import NetflixModal from "./NetflixModal"
import SearchResults from "../SearchResults"
import { ThemeProvider, Modal, Container, Row, Col, Button, Text, Icon, Anchor, Image } from "atomize";

function WatchingTitles() {
  const [modal, setModal] = useState(false)

  return(
    <React.Fragment>
    <Container>
      <Row d="flex" justify="space-between">

        <Col d="flex" justify="flex-start">
          <Text textSize="subheader" textColor="black" fontFamily="code" textWeight="700">
            WATCHING NOW
          </Text>
        </Col>

        <Col d="flex" justify="flex-end" onClick={() => setModal(true)}>
          <Anchor d="flex" flexDir="row" align="center">
            <Icon name="Add" color="success800" size="20px"/>
            <Text textSize="subheader" textColor="black" ontFamily="code" textWeight="700">
              ADD A TITLE YOU'RE WATCHING NOW
            </Text>
          </Anchor>
        </Col>

        <NetflixModal
          isOpen={modal}
          onClose={() => setModal(false)}
        />

      </Row>
      <br></br>
      <Container>
        <Image h="120px" w="120px" src="./netflix_n.png"></Image>
          <Text fontFamily="code" textSize="subheader">
            You currently have no titles. <Anchor>Add a title you're watching now.</Anchor>
        </Text>
      </Container>
    <br></br>
    <hr></hr>
    </Container>
    <SearchResults />
    </React.Fragment>
  )
}

export default WatchingTitles;
