import React, { useState } from "react";
import TrendingTitles from "./TrendingTitles";
import { Div, Button, Text, Icon, Row, Col } from "atomize";

function Welcome() {

  return(
    <div style={{backgroundColor: "lightgrey"}}>
      <Div d="flex" justify="space-around">
        <Row>
          <Col>
            <Text tag="h1" textSize="display1">So, what are you binging?</Text>
            <br></br>
            <Button
              bg="black"
              shadow="3"
              hoverShadow="4"
              m={{ r: "1rem" }}
            >
              Sign up and tell us!
            </Button>
          </Col>
        </Row>
      </Div>
      <br></br>
      <div><a>Discuss and share your favorite Netflix titles</a></div>
      <TrendingTitles />
    </div>

  )
}

export default Welcome;
