import React from "react";
import { Button, Anchor, Icon, Container, Div } from "atomize";

const CliqueList = (props) => {
  const deleteClique = (id) => {
    props.deleteDog(id);
  }

  const updateClique = (id) => {
    props.updateClique(id);
  }

  return(
    <ul>
      {props.cliques.map((clique, i) => {
        return(
          <React.Fragment key={i}>
            {clique.name}<br></br>{clique.owner}<br></br>{clique.members}
            <Anchor type="submit" onClick={() => updateClique(clique.id)}>
              <Icon  name="EditSolid" color="danger800" size="20px"/>
              Rename Clique
            </Anchor>
            <Anchor type="submit" onClick={() => deleteClique(clique.id)}>
              <Icon  name="DeleteSolid" color="danger800" size="20px"/>
              Delete Clique
            </Anchor>
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default CliqueList;
