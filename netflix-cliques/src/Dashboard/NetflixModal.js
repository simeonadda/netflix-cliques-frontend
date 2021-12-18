import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { ThemeProvider, Modal, Div, Container, Icon, Button, Text, Input, Row, Col, Image, Anchor } from "atomize";
import SearchResults from "../SearchResults"


let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000';
} else {
  baseURL = 'https://netflix-cliques-app.herokuapp.com';
}

function NetflixModal({ isOpen, onClose, show}) {
  const [searchInput, setSearchInput] = useState()
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [showResultsModal, setShowResultsModal] = useState(false)
  const [showComponent, setShowComponent] = useState(false)
  const[img, setImg] = useState('')
  const[title, setTitle] = useState('')
  const[synopsis, setSynopsis] = useState('')
  const[user, setUser] = useState('')
  const[year, setYear] = useState('')

  const theme = {
    fontFamily: {
      primary: 'Bitter, serif',
      secondary: 'Oswald, serif',
      code: 'Teko, sans-serif'
    }
  }



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

  const netflixAPI = async (e) => {
    let response = await fetch("https://unogsng.p.rapidapi.com/search?start_year=2000&limit=5&query=" + searchInput , {
  	   "method": "GET",
  	    "headers": {
          "x-rapidapi-host": "unogsng.p.rapidapi.com",
  		    "x-rapidapi-key": "2ddf3bdb3fmsh2c7a93e3f9444adp14261cjsn73b6f6de5b56"
        }
      })
      let result = await response.json()
      setAPIData(result.results)
      setShowComponent(!showComponent)
  }

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(APIData)
    }
  }


  return(
    <ThemeProvider theme={theme}>
      {!showComponent ?
        <>
      <Modal isOpen={isOpen} onClose={onClose} bg="gray300" align="start" rounded="sm" h="12rem" maxW="72rem">
        <br></br>
        <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="16px" onClick={onClose} cursor="pointer"/>
          <Input placeholder="Search" h="3rem" onChange={(e) => searchItems(e.target.value)}
            suffix={
              <Button type="submit" onClick={() => netflixAPI()} pos="absolute" bg="danger800" hoverBg="danger700" h="3rem" w="5rem" top="0" right="0" rounded={{ r: "md" }}>
                <Icon name="Search" size="36px" color="white" cursor="pointer" pos="absolute" top="50%" right="1.33rem" transform="translateY(-50%)"/>
              </Button>
            }
          />
        <br></br>
      </Modal></>
    :
    <>
    <Container>
      <br></br>
    <Row d="flex" w="1120px" h="400px" justify="center" flexDir="row">
        {APIData.map((item, i) => {
          return(
              <React.Fragment key={i}>
                <Anchor>
                  <Col shadow="3" hoverShadow="4">
                    <Image maxH="233px" w="166px" shadow="3" hoverShadow="4" key={i} src={item.img}></Image>
                  </Col>
                  <Col maxW="166px">
                    <Text fontFamily="secondary" textColor="black" textSize="subheader">
                      {item.title}
                    </Text>
                    <br></br>
                    <Div d="flex">
                    <form onSubmit={onClose}>
                      <Button d="flex" type="submit" onClose onClick={show} h="2rem" justify="center"
                        p={{ x: "0.75rem" }} textSize="body" textColor="black" hoverTextColor="white" bg="danger800" hoverBg="black" border="1px solid" borderColor="danger800" hoverBorderColor="black" m={{ r: "0.5rem" }}>
                      Close
                      </Button>
                    </form>
                    </Div>
                  </Col>
                </Anchor>
              </React.Fragment>
          )
          })}
    </Row></Container></>}
  </ThemeProvider>
  )
}

export default NetflixModal;
