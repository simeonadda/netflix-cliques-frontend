import React, { useState, useEffect } from "react";
import NetflixModal from "./NetflixModal"
import { ThemeProvider, Container, Row, Col, Text, Icon, Anchor, Image } from "atomize";

function FavoriteTitles() {
  const [modal, showModal] = useState(false)
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    setShowComponent(false)
  })

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
            FAVORITES
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
              ADD A FAVORITE TITLE
            </Text>
          </Anchor>
        </Col>
      </Row>
      <br></br>

        <NetflixModal
          isOpen={modal}
          onClose={() => showModal(false)}
        />


        <Container>
        {showComponent ?
          <NetflixModal show={useEffect} />
           :
          <><Image h="120px" w="120px" src="./netflix_n.png"></Image>
        <Text fontFamily="code" textSize="subheader">You currently have no titles. <Anchor>Add a favorite title.</Anchor></Text></>}
      </Container>
      <br></br>
      <hr></hr>
    </Container>
  )
}

export default FavoriteTitles;
