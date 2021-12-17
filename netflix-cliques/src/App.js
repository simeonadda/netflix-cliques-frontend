import './App.css';
import React, { useState } from 'react';
import LoginSideDrawer from "./Login"
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"
import { ThemeProvider, Div } from "atomize";

const baseUrl = "http://localhost:8000";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const checkUserLogin = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  return (
    <Div className="App">
      <Nav checkUserLogin={checkUserLogin} />
      {!userLoggedIn
        ? <Dashboard />
        : <Welcome />
      }
      <Footer />
    </Div>
  );
}

export default App;
