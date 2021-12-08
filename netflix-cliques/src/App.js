import './App.css';
import React, { useState } from 'react';
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const LogIn = () => {
    setUserLoggedIn(true)
  }




  return (
    <div className="App">
      {/* SETUP CONDITIONAL FOR LOGGED IN USER */}

      {/* NOT LOGGED IN */}
      <div>
        <Nav />
        <Welcome />
        <Footer />
      </div>

      {/* LOGGED IN */}
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
