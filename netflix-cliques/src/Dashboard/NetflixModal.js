import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Modal, Div, Container, Icon, Button, Text, Input, Row, Col, Image, Anchor } from "atomize";
import SearchResults from "../SearchResults"

function NetflixModal({ isOpen, onClose }) {
  const [searchInput, setSearchInput] = useState()
  const [APIData, setAPIData] = useState([])
  const [showComponent, setShowComponent] = useState(false)
  const [filteredResults, setFilteredResults] = useState([])

  let showResults;

  useEffect(() => {
    console.log(APIData);
    showResults = APIData.map((item, i) => {
      return(item)
    });
  }, [APIData])

  const netflixAPI = async (e) => {
    let response = await fetch("https://unogsng.p.rapidapi.com/search?start_year=2000&limit=10&query=" + searchInput , {
  	   "method": "GET",
  	    "headers": {
          "x-rapidapi-host": "unogsng.p.rapidapi.com",
  		    "x-rapidapi-key": "2ddf3bdb3fmsh2c7a93e3f9444adp14261cjsn73b6f6de5b56"
        }
      })
      console.log(response);
      let result = await response.json()
      console.log(result);
      setAPIData(result.results)
      setShowComponent(!showComponent)
      console.log(showComponent);
  }

  console.log(showResults);

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
    <Container>
      <>
      {!showComponent ?
        <>
      <Modal isOpen={isOpen} onClose={onClose} bg="gray300" align="start" rounded="sm" h="12rem" maxW="72rem" showResults={showResults}>
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
        <Row d="flex" h="1120px" w="299px">
          <Col>
            <Anchor>
              <Text>{APIData.map((item, i) => {
                return(item.title)
              })}</Text>
            </Anchor>
          </Col>
        </Row>
      </>}
    </>
    </Container>
  )
}

export default NetflixModal;
