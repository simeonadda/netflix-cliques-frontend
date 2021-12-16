import './App.css';
import React, { useState, useEffect } from 'react';
import LoginModal from "./Login"
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"
import { ThemeProvider, Div, Row, Col, Text, Container } from "atomize";

const baseUrl = "http://localhost:8000";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const checkUserLogin = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  return (
    <Div className="App">
      <Nav checkUserLogin={checkUserLogin} />
      {!userLoggedIn ?
        <Dashboard />
        :
        <Welcome />}
      <Footer />
    </Div>
  );
}

export default App;
