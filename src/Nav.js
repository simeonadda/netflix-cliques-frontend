import React, { useState } from "react";
import { ThemeProvider, Div, Row, Col, Text, Anchor, Image, Icon } from "atomize";
import SignUpModal from "./SignUp"
import LoginSideDrawer from "./LoginSideDrawer"
import Logout from "./Logout"

function Nav({ userAuthHandler, isLoggedIn }) {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  const [showModal, setShowModal] = useState(false)

  console.log(isLoggedIn);

  const theme = {
    fontFamily: {
      primary: 'Teko, sans-serif',
      secondary: 'Oswald, sans-serif',
      code: 'Bitter, serif'
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <Div bg="black" p={{ y:"8px" }}>
        <Row d="flex" align="center">
          <Col>
            <Text d="flex" align="center" fontFamily="primary" textSize="display2" p={{ x: "2rem" }}>
              <Anchor d="flex" textColor="white" hoverTextColor="danger800">
                <Image h="40px" w="40px" src="./netflix.png"></Image>
                NETFLIX CLIQUES
              </Anchor>
            </Text>
          </Col>

          <Col size="5">
            <Text fontFamily="secondary" textSize="subheader" textColor="danger800" d="flex" justify="space-around">
              <Anchor d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="Plus" color="white" size="24px"/>
                JOIN A CLIQUE
              </Anchor>

              <Anchor d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="Info" color="white" size="24px" />
                ABOUT
              </Anchor>




              {isLoggedIn ?
              <>
              <Anchor d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="UserSolid" color="white" size="24px" />
                SIM
              </Anchor>

              <Anchor  d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="User" color="white" size="24px" />
                <Logout userAuthHandler={userAuthHandler} />
              </Anchor>
              </>
              :
              <>
              <Anchor onClick={() => setShowSideDrawer(true)} d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="UserSolid" color="white" size="24px" />
                SIGN IN
                <LoginSideDrawer userAuthHandler={userAuthHandler}
                  isOpen={showSideDrawer} onClose={() => setShowSideDrawer(false)} />
              </Anchor>

              <Anchor onClick={() => setShowModal(true)} d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="User" color="white" size="24px" />
                SIGN UP
                <SignUpModal
                  isOpen={showModal} onClose={() => setShowModal(false)} />
              </Anchor>
              </>
              }
            </Text>
          </Col>
        </Row>
      </Div>
    </ThemeProvider>
  )
}

export default Nav;
