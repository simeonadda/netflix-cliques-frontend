import React, { useState } from "react";
import TrendingTitles from "./TrendingTitles"

function Welcome() {

  return(
    <div style={{backgroundColor: "lightgrey"}}>
      <div>
        <h1>So, what are you binging?</h1>
        <div><button>Sign up and tell us!</button></div>
      </div>
      <br></br>
      <div><a>Discuss and share your favorite Netflix titles</a></div>
      <TrendingTitles />
    </div>

  )
}

export default Welcome;
