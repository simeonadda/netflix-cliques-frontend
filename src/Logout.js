import React, { useState, useEffect } from "react";
import { Div } from "atomize";

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000';
} else {
  baseURL = 'https://netflix-cliques-be.herokuapp.com';
}

function Logout(userAuth) {

  const logout = (e) => {
    e.preventDefault()
    const url = baseURL + "/api/v1/users/logout"
    const response = fetch(url, {
      method: "DELETE",
      credentials: "include"
    }).then((repsonse => {
      userAuth()
    }))
  }
  return(
    <Div onClick={logout}>LOGOUT</Div>
  )

}

export default Logout;
