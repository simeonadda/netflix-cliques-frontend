import React, { useState, useEffect } from "react";
import { Div } from "atomize";

function Logout(userAuth) {

  const logout = (e) => {
    e.preventDefault()
    const url = "http://localhost:8000/api/v1/users/logout"
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
