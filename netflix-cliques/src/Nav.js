import React, { useState } from "react";
import { ThemeProvider, Div, Row, Col, Text } from "atomize";

function Nav() {
const [userLoggedIn, setUserLoggedIn] = useState(false)

  return(
    <div style={{backgroundColor: "blanchedalmond"}}>
      {userLoggedIn ?
        <Row>
          <Col>
            <div>
              <h1>Netflix Cliques</h1>
            </div>
          </Col>
          <Col>
            <div>
              <a>Join A Clique</a> |
              <a> About</a> |
              <a> Username</a>
            </div>
          </Col>
        </Row>
        :
        <Row>
          <Col>
            <div>
              <h1>Netflix Cliques</h1>
            </div>
          </Col>
          <Col>
            <div>
              <a>Join A Clique</a> |
              <a> About</a> |
              <a> Sign In</a> |
              <a> Sign Up</a>
            </div>
          </Col>
        </Row>
      }

    </div>
  )
}

export default Nav;
