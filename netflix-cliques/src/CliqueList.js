import React from "react";
import { Button, Anchor, Icon, Container, Col, Text } from "atomize";

const CliqueList = (props) => {
  const deleteClique = (id) => {
    props.deleteClique(id);
  }

  const updateClique = (id) => {
    props.updateClique(id);
  }

  return(

    <ul>
      {props.cliques.map((clique, i) => {
        return(
          <Col d="flex" justify="space-around">
          <React.Fragment key={i}>
            <Text>{clique.name}</Text>
            <Text>Owner: {clique.owner.name}</Text>
            <Text>{clique.members} Members</Text>
            <Anchor type="submit" onClick={() => updateClique(clique.id)}>
              <Icon  name="EditSolid" color="black" size="20px"/>
              Rename Clique
            </Anchor>
            <br></br>
            <Anchor type="submit" onClick={() => deleteClique(clique.id)}>
              <Icon  name="DeleteSolid" color="danger800" size="20px"/>
              Delete Clique
            </Anchor>
          </React.Fragment>
          </Col>
        )
      })}
    </ul>

  )
}

export default CliqueList;
