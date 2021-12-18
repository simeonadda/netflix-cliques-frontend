import React, { useState } from "react";
import { Button, Container, Input, Text } from "atomize";

const NewCliqueForm = (props) => {
  const[name, setName] = useState('')
  const[owner, setOwner] = useState('')
  const[members, setMembers] = useState(0)

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
    };

    props.addClique(newCliqueData);

    setName('');
    setOwner('');
    setMembers(0);
  }



  return(
    <Container>
      <form onSubmit={submitHandler}>
        <Input type="text" placeholder="Name of your clique" onChange={changeNameHandler} value={name} />
        <Button type="submit">Create New Clique</Button>
        <Button closeButton={e => props.buttonClick}>Close</Button>
      </form>
    </Container>
  )
}

export default NewCliqueForm;
