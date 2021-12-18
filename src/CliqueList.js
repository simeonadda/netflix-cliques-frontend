import React from "react";
import { ThemeProvider, Button, Anchor, Icon, Container, Col, Text } from "atomize";

const CliqueList = (props) => {
  const deleteClique = (id) => {
    props.deleteClique(id);
  }

  const updateClique = (id) => {
    props.updateClique(id);
  }

  const theme = {
    fontFamily: {
      primary: 'Bitter, serif',
      secondary: 'Oswald, serif',
      code: 'Teko, sans-serif'
    }
  }

  return(
    <ThemeProvider theme={theme}>
    <ul>
      {props.cliques.map((clique, i) => {
        return(
          <Col size="11" d="flex">
          <React.Fragment key={i}>
            <Text fontFamily="primary" textSize="subheader" textWeight="700">{clique.name}</Text>
            <Text fontFamily="primary" textSize="subheader">Owner: {clique.owner.name}</Text>
            <Text fontFamily="primary" textSize="subheader">{clique.members} Members</Text>
            <Anchor fontFamily="primary" textSize="subheader" type="submit" onClick={() => updateClique(clique.id)}>
              <Icon  name="EditSolid" color="black" size="20px"/>
              Rename Clique
            </Anchor>
            <br></br>
            <Anchor fontFamily="primary" textSize="subheader" type="submit" onClick={() => deleteClique(clique.id)}>
              <Icon  name="DeleteSolid" color="danger800" size="20px"/>
              Delete Clique
            </Anchor>
          </React.Fragment>
          </Col>
        )
      })}
    </ul>
    </ThemeProvider>
  )
}

export default CliqueList;
