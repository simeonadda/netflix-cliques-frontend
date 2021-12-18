import React, { useState, useEffect } from "react";
import { Div, Container, Col, Row, Image } from "atomize";

function TrendingShows() {
  const [searchInput, setSearchInput] = useState()
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  let showResults;

  useEffect(() => {
    console.log(APIData);
    showResults = APIData.map((item) => {
      console.log(item);
      return(item)

    })
    console.log(showResults);
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
    <Container>
      <Row>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABazUPdCwkBtDgdOe5DMkY_8PUpuf4KFFEL842T2rLsBJtzPBl248xKO1ke7ktWzyGs_TOHjF6yZGuFGwS7grE0xVU_KoeqLY0h2pNJAaISQhPO8jWaPe1Wo175E.jpg?r=fe2">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdKYEU32uWyMUAzEkxr6N3KiT9kv14Y28KboaHOFWUJTiAOq7C-8pXp7rBhhkL3Po3A_4DU_NEr854e9zT4z34rQ7CPCKJx-ZPKJIzPND4pPx0RY432dhtwgewU.jpg?r=2ce">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-38-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfBbDQpuStWs21zZTjV0nmbhE1CE1gOyr2y-l5_vUxqzU_EgtoZO1N_KjOO_nNYU44N-MA_W0WrBFA3rmiod2srBZ9GF7v3YNskhQVqXoXKAmvt5MTqd7hTTZzs.jpg?r=9a9">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUDS2VwJHhepqLPNPYUofDSqVooyTxYlWYz977OXEL_wwk1qCGX_HPY8t-YO3xdk4X_P1oBZMXpRA2CYbUSV5ZStM7bx7KrLuLLInl15mUIDOVHhbtbpTi2LfT4.jpg?r=189">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSJo7emQVl2q28USx3tLaRL-UPf3BC1YGCC0jOscTw9fy9csLAs8TMp33wAi140bQvyMDHYNJOa8rcE-OgUrfuJwvilTFr7z4q_zDxltMlV-OE-r5B-ZKEUJk1HPJ3N8CNQJXyMXkIsMvL-tTXcbyTNLJsW_6u3jKQ8Z2b4.jpg?r=0f7">
          </Image>
        </Col>
      </Row>
    </Container>
  )
}

export default TrendingShows;
