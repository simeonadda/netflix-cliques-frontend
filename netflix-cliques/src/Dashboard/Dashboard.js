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

        <Col size="3" bg="white">
          <Div fontFamily="primary" textWeight="700" >
            <br></br>
            <Image></Image>
            <br></br>
            <Text textSize="title">Username</Text>
            <br></br>
            <Text textSize="title">Social Media</Text>
            <br></br>
            <Text textSize="title">Email</Text>
            <br></br>
            <Text textSize="title">Edit Profile</Text>
            <br></br>
            <Text textSize="title">Change Password</Text>
          </Div>
        </Col>

        <Col size="7" d="flex" flexDir="column">
          <br></br>
          <MyCliques />
          <br></br>
          <WatchingTitles />
          <br></br>
          <FavoriteTitles />
          <br></br>
          <QueuedTitles />
          <br></br>
          <TitlesWatched />
          <br></br>
        </Col>


      </Row>

      </Div>
    </ThemeProvider>
  )
}

export default Dashboard;
