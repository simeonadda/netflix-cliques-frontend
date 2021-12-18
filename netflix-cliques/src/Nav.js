import React, { useState } from "react";
import { ThemeProvider, Div, Row, Col, Text, Anchor, Image, Icon } from "atomize";
import SignUpModal from "./SignUp"
import LoginSideDrawer from "./Login"
import Logout from "./Logout"

function Nav(userAuth) {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [sideDrawer, setSideDrawer] = useState(false)
  const [modal, setModal] = useState(false)



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




              {userLoggedIn ?
              <>
              <Anchor d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="UserSolid" color="white" size="24px" />
                SIM
              </Anchor>

              <Anchor  d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="User" color="white" size="24px" />
                <Logout userAuth={userAuth} />
              </Anchor></>
              :
              <>
              <Anchor onClick={() => setSideDrawer(true)} d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="UserSolid" color="white" size="24px" />
                SIGN IN
                <LoginSideDrawer userAuth={userAuth}
                  isOpen={sideDrawer} onClose={() => setSideDrawer(false)} />
              </Anchor>

              <Anchor onClick={() => setModal(true)} d="flex" align="center" textColor="white" hoverTextColor="danger800">
                <Icon name="User" color="white" size="24px" />
                SIGN UP
                <SignUpModal
                  isOpen={modal} onClose={() => setModal(false)} />
              </Anchor></>
              }
            </Text>
          </Col>
        </Row>
      </Div>
    </ThemeProvider>
  )
}

export default Nav;
