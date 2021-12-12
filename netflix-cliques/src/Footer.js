import React, { useState } from "react";
import { ThemeProvider, Div, Row, Col, Text } from "atomize";

function Footer() {

  return(
    <div style={{backgroundColor: "lightgreen"}}>
      <Row>
        <Col>
          <div>
            <a>About</a> |
            <a> Netflix Cliques</a> |
            <a> Community</a> |
            <a> Support</a>
          </div>
        </Col>
        <Col>
          <div>© 2021 GA Bromeliad</div>
        </Col>
      </Row>

    </div>
  )
}

export default Footer;
