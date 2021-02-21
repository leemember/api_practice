import React from 'react'
import { Col } from 'antd';

function GridCards(props) {

  if (props.LandingPage) {
    return (
      //가장 큰 사이즈 일 때 한 컬럼당 24이다. 그래서 6을 넣으면 4개의 카드가 보인다.
      //m사이즈 일 때 8을 넣으면 3개가 보일 것이다.
      //가장 작은사이즈 일 때는 24를 입력하면 1개의 카드만 보인다.
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative'}}>
          <a href={`/movie/${props.movieId}`}>
            <img style={{ width: '100%', height: '320px'}} src={props.image} alt={props.movieName} />
          </a>
        </div>
      </Col>
    )
  } else {
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative'}}>
            <img style={{ width: '100%', height: '320px'}} src={props.image} alt={props.characterName} />
        </div>
      </Col>
    )
  }
}

export default GridCards;