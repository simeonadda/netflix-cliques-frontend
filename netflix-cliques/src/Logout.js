import React, { useState } from "react";
import { Div } from "atomize";

function Logout(props) {

  const logout = (e) => {
    e.preventDefault()
    const url = "http://localhost:8000/api/v1/users/logout"
    const response = fetch(url, {
      method: "DELETE",
      credentials: "include"
    }).then((repsonse => {
      props.checkUserLogin(false)
    }))
  }
  return(
    <Div onClick={logout}>LOGOUT</Div>
  )

}

export default Logout;
