import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Modal, Div, Container, Icon, Button, Text, Input, Row, Col, Image, Anchor } from "atomize";
import SearchResults from "../SearchResults"

function NetflixModal({ isOpen, onClose, props}) {
  const [searchInput, setSearchInput] = useState()
  const [APIData, setAPIData] = useState([])
  const [showComponent, setShowComponent] = useState(false)
  const [filteredResults, setFilteredResults] = useState([])
  const [showResultsModal, setShowResultsModal] = useState(false)

  useEffect(() => {

    console.log(APIData);
  }, [])

  const netflixAPI = async (e) => {
    let response = await fetch("https://unogsng.p.rapidapi.com/search?start_year=2000&limit=10&query=" + searchInput , {
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

  const images = APIData.map((item, i) => item.img)
  console.log(images);


  return(
    <Container>
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
    <Row d="flex" w="1120px" h="299px" justify="center">
      <Col>
          <React.Fragment>
          <Anchor>
            {APIData.map((item, i) => {return(<Image maxH="233px" w="166" shadow="3" hoverShadow="4" key={i} img={item.img}>
            </Image>)})}
            <Text>
              {APIData.map((item, i) => {return(item.title)})}
            </Text>
          </Anchor>
        </React.Fragment>
      </Col>
      })}
    </Row></>}
    </Container>
  )
}

export default NetflixModal;
