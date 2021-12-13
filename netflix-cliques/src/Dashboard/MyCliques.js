import React, { useState } from "react";
import { ThemeProvider, Modal, Div, Row, Col, Button, Text, Container, Icon, Anchor } from "atomize";
import NetflixModal from "./NetflixModal"

function MyCliques() {
  const [modal, showModal] = useState(false)

  return(
      <Row d="flex" justify="space-between">
        <Col d="flex" justify="flex-start">
          <Text
            textSize="title"
            textColor="black"
            fontFamily="primary"
          >
            MY CLIQUES
          </Text>
        </Col>
        <Col d="flex" justify="flex-end" onClick={() => showModal(true)}>
          <Anchor d="flex" flexDir="row" align="center">
            <Icon
              name="Add"
              color="success800"
              size="24px"
            />
            <Text
              textSize="title"
              textColor="black"
              fontFamily="primary"
            >
              ADD NEW CLIQUES
            </Text>
          </Anchor>
        </Col>
        <NetflixModal
          isOpen={modal}
          onClose={() => showModal(false)}
        />
      </Row>
  )
}

export default MyCliques;
