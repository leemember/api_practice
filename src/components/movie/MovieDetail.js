import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY , IMAGE_BASE_URL} from '../Config';
import MainImg from './MainImg';
import MovieInfo from './MovieInfo';
import GridCards from './common/GridCards';
import { Row } from 'antd';

const MovieDetail = (props) => {

  //movie 아이디를 가져온다.
  let movieId = props.match.params.movieId

  const [Movie, setMovie] = useState([])
  const [Casts, setCasts] = useState([])
 
  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
   
    fetch(endpointInfo)
      .then(response => response.json())  
      .then(response =>  {
        console.log(response)
        setMovie(response)
      })

    fetch(endpointCrew)
      .then(response => response.json())  
      .then(response =>  {
        console.log('responseForCrew', response)
        setCasts(response.cast)
      })
    }, []);

  return (
    <div>
      
      {/* 헤더 */}
      <MainImg 
          image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} //영화이미지
          title={Movie.original_title} //영화타이틀
          text={Movie.overview} //영화소개 
      />

      {/* 바디 */}
      <div style={{ width: '85%', margin: '1rem auto'}}>
        {/* Movie Info */}

        <MovieInfo 
          movie={Movie}
        />
        <br />
        {/* Actors Grid */}

        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem'}}>
          <button> Toggle Actor View </button>
        </div>

        <Row gutter={[16, 16]}>
          {Casts && Casts.map((cast, index) => (
            <React.Fragment key={index}>
              <GridCards
                image={cast.profile_path ?
                `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                characterName={cast.name}
              />
            </React.Fragment>
          ))}
        </Row>       
      </div>
    </div>
  )
}

export default MovieDetail
