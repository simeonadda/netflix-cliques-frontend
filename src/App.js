import './App.css';
import React, { useState } from 'react';
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"
import { ThemeProvider, Div } from "atomize";


function App({isOpen, onClose}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const userAuthHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  console.log(isLoggedIn);

  return (
    <Div className="App">
      <Nav isLoggedIn={isLoggedIn} userAuthHandler={userAuthHandler} />
      {isLoggedIn ? <Dashboard /> : <Welcome /> }
      <Footer />
    </Div>
  );
}

export default App;
