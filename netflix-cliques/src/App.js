import './App.css';
import React, { useState } from 'react';
import LoginSideDrawer from "./Login"
import Logout from "./Logout"
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"
import { ThemeProvider, Div } from "atomize";


function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const userAuthHandler =()=> {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <Div className="App">
      <Nav userAuth={userAuthHandler} />
      {!isLoggedIn ? <Dashboard /> : <Welcome /> }
      {isLoggedIn ? <LoginSideDrawer userAuth={userAuthHandler} /> : null}
      <Footer />
    </Div>
  );
}

export default App;
