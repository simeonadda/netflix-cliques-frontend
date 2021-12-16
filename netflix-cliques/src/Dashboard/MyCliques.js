import React, { useState, useEffect } from "react";
import { ThemeProvider, Modal, Container, Row, Col, Button, Text, Icon, Anchor, Image } from "atomize";
import NetflixModal from "./NetflixModal"
import Cliques from "./Cliques"


function MyCliques() {
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
            MY CLIQUES
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
              ADD A NEW CLIQUE
            </Text>
          </Anchor>
        </Col>
        <NetflixModal
          isOpen={modal}
          onClose={() => showModal(false)}
        />
      </Row>
      <br></br>
      
      <br></br>
      <hr></hr>
    </Container>
  )
}

export default MyCliques;
