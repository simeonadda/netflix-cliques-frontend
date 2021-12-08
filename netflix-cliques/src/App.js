import './App.css';
import React, { useState } from 'react';
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">
      {userLoggedIn ?
        <div>
          <Nav />
          <Dashboard />
          <Footer />
        </div>
        :
        <div>
          <Nav />
          <Welcome />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
