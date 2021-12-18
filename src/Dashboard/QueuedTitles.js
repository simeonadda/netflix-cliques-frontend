import React, { useState } from "react";
import NetflixModal from "./NetflixModal"
import { ThemeProvider, Modal, Container, Row, Col, Button, Text, Icon, Anchor, Image } from "atomize";

function QueuedTitles() {
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
            WATCHING NEXT
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
              ADD A TITLE YOU WANT TO WATCH
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
          <Image maxH="233px" w="166px" shadow="3" hoverShadow="4" src="https://occ-0-1373-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABc3PZ4ZmocKVXt_3uGZrEoapBsa0SgXOfBuLCXkjR5e-TLXLW2-85hfp7yaI_BvulWO12p7yfsdwJowVS_7_SpWZudI3c4LFzWTrVUYKTLZ1hDke9L6qxh1JBEo.jpg?r=e07">
          </Image>
        </Col>
      </Row>
      </Container>
    <br></br>
    <hr></hr>
  </Container>
  )
}

export default QueuedTitles;
