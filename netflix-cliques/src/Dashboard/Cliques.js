import React, { useState, useEffect} from "react";
import { Container, Text, Image, Anchor } from "atomize";

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000';
} else {
  baseURL = 'https://netflix-cliques-app.herokuapp.com';
}

function Cliques() {
  const [cliques, setCliques] = useState([])

  const getCliques = () => {
    fetch(baseURL + "/api/v1/cliques", { credentials: "include"})
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log(data);
        setCliques(data.data);
      });
  };

  useEffect(() => {
    getCliques()
  }, [])

  return(
    <Container>

      <Image h="120px" w="120px" src="./netflix_n.png"></Image>
      <Text fontFamily="code" textSize="subheader">You currently have no cliques.<Anchor>Add a new clique.</Anchor></Text>
      {cliques}

    </Container>
  )
}

export default Cliques;
