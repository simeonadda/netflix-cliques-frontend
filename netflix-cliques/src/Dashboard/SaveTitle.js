import React, { useState } from "react";
import { Button, Container, Input, Text } from "atomize";

const baseUrl = "http://localhost:8000";

const SaveTitle = (props) => {
  const[img, setImg] = useState('')
  const[title, setTitle] = useState('')
  const[synopsis, setSynopsis] = useState('')
  const[user, setUser] = useState('')
  const[year, setYear] = useState('')

  const setUserHandler = (e) => {
    setImg(e.target.value);
  }

  const setImgHandler = (e) => {
    setImg(e.target.value);
  }

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  }

  const setSynopsisHandler = (e) => {
    setSynopsis(e.target.value);
  }

  const setYearHandler = (e) => {
    setImg(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newTitleData = {
      img: img,
      title: title,
      synopsis: synopsis,
      user: user,
      year: year
    };

    const saveNewTitleDataHandler = (newTitleData) => {
      fetch(baseUrl + "/api/v1/titles/add_title", {
        method: "POST",
        body: JSON.stringify({
          img: newTitleData.img,
          title: newTitleData.title,
          synopsis: newTitleData.synopsis,
          user: newTitleData.user,
          year: newTitleData.year
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then((resJson) => {
        const copyTitle = [...title];
        copyTitle.push(resJson.data)
        setTitle(copyTitle)
      });
    };



    setImg('');
    setTitle('');
    setSynopsis('');
  }

  return(
    <Container>
      <form onSubmit={submitHandler}>
        <Button type="submit" h="2.5rem" p={{ x: "1rem" }} textSize="body" textColor="success700" hoverTextColor="success900" bg="transparent" hoverBg="success200" border="1px solid" borderColor="success700" hoverBorderColor="success900" m={{ r: "0.5rem" }}>
        Add
        </Button>
      </form>
    </Container>
  )
}

export default SaveTitle;
