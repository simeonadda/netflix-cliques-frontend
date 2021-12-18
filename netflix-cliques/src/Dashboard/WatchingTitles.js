import React, { useState } from "react";
import NetflixModal from "./NetflixModal"
import SearchResults from "../SearchResults"
import { ThemeProvider, Modal, Container, Row, Col, Button, Text, Icon, Anchor, Image } from "atomize";

function WatchingTitles() {
  const [modal, setModal] = useState(false)
  const [showComponent, setShowComponent] = useState(false)

  const onButtonClick = () => {
    setShowComponent(!showComponent)
  }

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
        {showComponent ? <>
          <Container>
          <NetflixModal buttonClick={onButtonClick} />
          </Container>
          </>
          :
          <>
          <Row bg="">
          <Col d="flex" justify="left" shadow="3">
            <Image maxH="233px" w="166px" shadow="3" hoverShadow="4" src="https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSJo7emQVl2q28USx3tLaRL-UPf3BC1YGCC0jOscTw9fy9csLAs8TMp33wAi140bQvyMDHYNJOa8rcE-OgUrfuJwvilTFr7z4q_zDxltMlV-OE-r5B-ZKEUJk1HPJ3N8CNQJXyMXkIsMvL-tTXcbyTNLJsW_6u3jKQ8Z2b4.jpg?r=0f7">
            </Image>
          </Col>
        </Row></>}
      </Container>
    <br></br>
    <hr></hr>
    </Container>
    </React.Fragment>
  )
}

export default WatchingTitles;
