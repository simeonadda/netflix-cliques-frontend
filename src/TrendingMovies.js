import React, { useState, useEffect } from "react";
import { Div, Container, Col, Row, Image } from "atomize";

function TrendingMovies() {

  return(
    <Container>
      <Row>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-3498-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABew43NmuKNpMRlxa5zRPD72oSxkDrUiO7mpCqXzh-ZtJBOxfzP2bD39RUH7u3RTLXf0bsKRUEoxgEAJh5JsaTWyopUdykLk7BZNORMUeOasfFmhrQlHTWvvnm04.jpg?r=cf7">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-4758-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXVci6i7ouo0A9oRdq4kS1XYgC8zxNlpMYRqn52N1_fw0EMkHmphEBech2dJjvmV8jY76PjDfGT2XLL4AVnmnC_lTxMDj1w2oeqc38pQf4exZIsH8zZnkI5eFHk.jpg?r=051">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-3498-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZa9tWHpO6ZifPD5lS0Jwo9bnlDD6XGJIC5ARVwRfglP5l6SFYyThd5fczY2XxjDx3bcZGecOnLRNdhs7mht0pN9eJiN182ALODpIHqBTwzca8P0eCEkeqjXS1o.jpg?r=2ab">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-1373-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABc3PZ4ZmocKVXt_3uGZrEoapBsa0SgXOfBuLCXkjR5e-TLXLW2-85hfp7yaI_BvulWO12p7yfsdwJowVS_7_SpWZudI3c4LFzWTrVUYKTLZ1hDke9L6qxh1JBEo.jpg?r=e07">
          </Image>
        </Col>
        <Col shadow="3" hoverShadow="4">
          <Image src="https://occ-0-256-2567.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABetd_x_-duUQ9OVTk8Rc6DrOIOpR6AqWhQuIwgLm8KEy_YyEkTDKJCM28EqUXJTXgT8FEb4WASIb_5raJojJSz8i0KgVlwKhvovXmp6Q7sgyAuU17SJLATz1vKo.jpg?r=d8c">
          </Image>
        </Col>
      </Row>
    </Container>
  )
}

export default TrendingMovies;
