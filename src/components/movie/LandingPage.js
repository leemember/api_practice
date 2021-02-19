import React, { useEffect, useState } from 'react';
// import { FaCode } from 'react-icons/fa';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';
import MainImg from './MainImg';
// import axios from 'axios';
import GridCards from './common/GridCards';
import { Row } from 'antd';

const LandingPage = () => {

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  //많은 정보들을 가져오기 위해 [] 배열을 사용한다.

  useEffect(() => {
    //인기있는 영화를 가져오기
    //${API_URL} 이건 중복되는 코드들을 config 파일에 담아놓아서 불러왔다. API_KEY 얘도 마찬가지.
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`; // page=1 첫페이지만 가져오겠다는 뜻 

    fetch(endpoint) //fetch를 이용하여 가져온다.
    .then(response => response.json()) //json을 사용해 가져온다.
    .then(response => {
      console.log(response)
      setMovies([...Movies, ...response.results]);
      //위에 setMovies([a,b])중 a는 현재 가지고 있는 Movies들이다.
      //근데 ...을 사용한 이유는 object들이 이미 여러개 배열로 들어있기 때문에 사용했다.
      //b에서도 ...을 사용했을 때는 object들이 여러개라는 뜻이다. *JSON 파일 안에 여러 오브젝트들이 들어있음*
      setMainMovieImage(response.results[0]); 
      // json 결과값중 첫번째로 뜨는 이미지를 메인이미지로 설정해둔다.
    })
  }, [])

  return (
    <div style={{ width: '100%', margin: '0'}}>

      {/* 
      메인 이미지영역 w1280는 이미지 사이즈를 뜻한다.
      MainMovieImage가 있으면 사진을 보여주어라. 라는 조건식을 만들어야
      경고 에러를 막을 수 있다.
      */}
      {MainMovieImage && 
         <MainImg
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title} //영화타이틀
          text={MainMovieImage.overview} //영화소개
         />
       }
      
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <h2>영화앱</h2>

        <hr />

        {/* 그리드 카드 */}
        <Row gutter={[16, 16]}>
          {Movies && Movies.map((movie, index) => (
            <React.Fragment key={index}>
              <GridCards
                image={movie.poster_path ?
                `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                movieId={movie.id}
                movieName={movie.original_title}
              />
            </React.Fragment>
          ))}
        </Row>        
      </div>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button>더보기</button>
      </div>
    </div>
  )
}

export default LandingPage;