import React, { useState } from "react";
import { Button, Container, Input, Text } from "atomize";

const EditCliqueForm = ({ props, onClose}) => {
  const[name, setName] = useState(props.clique.name)
  const[owner, setOwner] = useState(props.clique.owner)
  const[members, setMembers] = useState(props.clique.members)

  const changeNameHandler = (e) => {
    setName(e.target.value);
  }

  const changeOwnerHandler = (e) => {
    setOwner(e.target.value);
  }

  const changeMemberHandler = (e) => {
    setMembers(members += 1);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newCliqueData = {
      name: name,
      owner: owner,
      members: members,
    }

    props.editClique(props.clique.id, newCliqueData);

    setName('');
    setOwner('');
    setMembers(0);
  }


  return(
    <Container>
      <Text>Update {props.clique.name}</Text>
      <form onSubmit={submitHandler}>
        <Input type="text" onChange={changeNameHandler} value={name} />
        <Button type="submit">Update</Button>
        <Button onClick={props.onButtonClick}>Close</Button>
      </form>
    </Container>
  )
}

export default EditCliqueForm;
