import './App.css';
import React, { useState } from 'react';
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"
import { ThemeProvider, Div, Row, Col, Text, Container } from "atomize";



function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <Div className="App">
      {!userLoggedIn ?
        <Div>
          <Nav />
          <Dashboard />
          <Footer />
        </Div>
        :
        <Div>
          <Nav />
          <Welcome />
          <Footer />
        </Div>
      }
    </Div>
  );
}

export default App;
