import './App.css';
import React, { useState } from 'react';
import Nav from "./Nav";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Dashboard from "./Dashboard/Dashboard"

function App() {





  return (
    <div className="App">
      {/* SETUP CONDITIONAL FOR LOGGED IN USER */}

      {/* NOT LOGGED IN */}
      <Nav />
      <Welcome />
      <Footer />

      {/* LOGGED IN */}
      <Dashboard />
    </div>
  );
}

export default App;
