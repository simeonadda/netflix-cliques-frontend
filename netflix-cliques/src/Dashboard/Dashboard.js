import React, { useState } from "react";
import { ThemeProvider, Div, Row, Col, Text, Container, Image } from "atomize";
import MyCliques from "./MyCliques";
import WatchingTitles from "./WatchingTitles";
import FavoriteTitles from "./FavoriteTitles";
import QueuedTitles from "./QueuedTitles";
import TitlesWatched from "./TitlesWatched";


function Dashboard() {
  const theme = {
    fontFamily: {
      primary: 'Bitter, serif',
      secondary: 'Oswald, serif',
      code: 'Raleway, san-serif'
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <Div bg="gray300">
      <Row>
        <Col size="9">
          <Container>
            <MyCliques />
          </Container>
          <div>
            <h3>Currently Watching</h3>
            <WatchingTitles />
          </div>
          <div>
            <h3>Favorites</h3>
            <FavoriteTitles />
          </div>
          <div>
            <h3>Watching Next</h3>
            <QueuedTitles />
          </div>
          <div>
            <h3>Watched</h3>
            <TitlesWatched />
          </div>
        </Col>

        <Col size="3" bg="white">
          <Div fontFamily="code" >
            <Image></Image>
            <Text>USERNAME</Text>
            <Text>SOCIAL MEDIA</Text>
            <Text>EMAIL</Text>
            <Text>EDIT PROFILE</Text>
            <Text>CHANGE PASSWORD</Text>
          </Div>
        </Col>
      </Row>

      </Div>
    </ThemeProvider>
  )
}

export default Dashboard;
