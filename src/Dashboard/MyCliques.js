import React, { useState, useEffect } from "react";
import { ThemeProvider, Modal, Container, Row, Col, Button, Text, Icon, Anchor, Image } from "atomize";
import NetflixModal from "./NetflixModal";
import Cliques from "./Cliques";
import CliqueList from "../CliqueList"
import NewCliqueForm from "../NewCliqueForm";
import EditCliqueForm from "../EditCliqueForm";

// const baseURL = "http://localhost:8000";

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000';
} else {
  baseURL = 'https://netflix-cliques-be.herokuapp.com';
}

function MyCliques({userAuthHandler}) {
  const [showComponent, setShowComponent] = useState(false)
  const [cliques, setCliques] = useState([])
  const [showEditForm, setShowEditForm] = useState(false);
  const [edittedClique, setEdittedClique] = useState(null)

  const getCliques = () => {
    fetch(baseURL + "/api/v1/cliques/", { credentials: "include"})
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log(data);
        console.log(data.data);
        setCliques(data.data);
      });
  };

  useEffect(() => {
    if ({userAuthHandler} == true) {
      getCliques()
    } else {
      return
    }
  }, [])

  const saveNewCliqueDataHandler = (newCliqueData) => {
    fetch(baseURL + "/api/v1/cliques/new_clique", {
      method: "POST",
      body: JSON.stringify({
        name: newCliqueData.name,
        owner: newCliqueData.owner,
        members: newCliqueData.members
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((resJson) => {
      const copyCliques = [...cliques];
      copyCliques.push(resJson.data)
      setCliques(copyCliques)
    });
  };

  const deleteCliqueHandler = (id) => {
    console.log(cliques);
    console.log(id);
    fetch(baseURL + "/api/v1/cliques/" + id, {
      method: "DELETE",
    }).then((res) => {
      const findIndex = cliques.findIndex((clique) => clique.id === id);
      const copyCliques = [...cliques];
      copyCliques.splice(findIndex, 1);
      setCliques(copyCliques);
    });
  };

  const showEditFormHandler = (id) => {
    setShowEditForm(true);
    const findIndex = cliques.findIndex((clique) => clique.id === id);
    const copyCliques = [...cliques];
    const editClique = copyCliques[findIndex];
    setEdittedClique(editClique);
  };

  const editCliqueHandler = (id, updatedCliqueData) => {
    fetch(baseURL + "/api/v1/cliques/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: updatedCliqueData.name,
        owner: updatedCliqueData.owner,
        members: updatedCliqueData.members
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((resJson) => {
      const copyCliques = [...cliques]
      const findIndex = cliques.findIndex((clique) => clique.id === resJson.data.id);
      copyCliques[findIndex].name = updatedCliqueData.name;
      copyCliques[findIndex].owner = updatedCliqueData.owner;
      copyCliques[findIndex].members = updatedCliqueData.members;
      setCliques(copyCliques);
    });
    setShowEditForm(false);
    setEdittedClique(null);
  }

  const onButtonClick = () => {
    setShowComponent(!showComponent)
  }

  return(
    <Container>
      <>
      {!showComponent ?
        <>
        <Row d="flex" justify="space-between">
        <Col d="flex" justify="flex-start">
          <Text
            textSize="subheader"
            textColor="black"
            fontFamily="code"
            textWeight="700"
          >
            MY CLIQUES
          </Text>
        </Col>
        <Col d="flex" justify="flex-end">
          <Anchor d="flex" flexDir="row" align="center" onClick={onButtonClick}>
            <Icon
              name="Add"
              color="success800"
              size="20px"
            />
            <Text
              textSize="subheader"
              textColor="black"
              fontFamily="code"
              textWeight="700"
            >
              ADD A NEW CLIQUE
            </Text>
          </Anchor>
        </Col>
      </Row>
      <br></br>
      <Row d="flex" justify="space-between">
        <CliqueList cliques={cliques} deleteClique={deleteCliqueHandler} updateClique={showEditFormHandler} />
      </Row></>
      :
      <>
      <Row d="flex" justify="space-between">
      <NewCliqueForm addClique={saveNewCliqueDataHandler} buttonClick={onButtonClick}/>
      </Row>
      </>
      }

      <br></br>
      <br></br>
      <hr></hr>
      </>
    </Container>
  )
}

export default MyCliques;
