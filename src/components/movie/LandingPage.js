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
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    //인기있는 영화를 가져오기
    //${API_URL} 이건 중복되는 코드들을 config 파일에 담아놓아서 불러왔다. API_KEY 얘도 마찬가지.
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`; // page=1 첫페이지만 가져오겠다는 뜻
    fetchMovies(endpoint)
  }, [])

  //중복되는 코드들을 fetchMovies 함수에 담아놨다.
  const fetchMovies = (endpoint) => {
    fetch(endpoint) //fetch를 이용하여 가져온다.
    .then(response => response.json()) //json을 사용해 가져온다.
    .then(response => {
      console.log(response)
      setMovies([...Movies, ...response.results]);
      //원래 있던 영화들을 유지한 상태에서 더보기 버튼을 할 때
      //원래 있던 영화 + 다음 페이지들의 영화목록
      //이 상태로 만들어주려면 ...Movies,이렇게 해주어야 한다.
      setMainMovieImage(response.results[0]);
      setCurrentPage(response.page);
    })
  }
  
  //더보기 버튼을 누를 때마다 새로운 다음 페이지들의 영화 목록들이 갱신하기 위해서
  //CurrentPage 페이지 함수를 만들었고 loadMoreItems 이벤트를 만들었다.
  //주소 페이지 값에 CurrentPage 함수 + 1 을 해주면,
  //버튼을 누를 때 마다 다음 페이지들의 영화 목록들을 보여준다.
  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`; 
    fetchMovies(endpoint)
  }

  return (
    <div style={{ width: '100%', margin: '0'}}>

      {/* 
      메인 이미지영역 w1280는 이미지 사이즈를 뜻한다.
      MainMovieImage가 있으면 사진을 보여주어라. 라는 조건식을 만들어야
      경고 에러를 막을 수 있다.
      */}
      {MainMovieImage && 
         <MainImg
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`} //영화이미지
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
        <button onClick={loadMoreItems}>More</button>
      </div>
    </div>
  )
}

export default LandingPage;