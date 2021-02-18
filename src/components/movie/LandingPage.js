import React, { useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import { API_URL, API_KEY } from '../Config';

function LandingPage() {

  useEffect(() => {
    //인기있는 영화를 가져오기
    //${API_URL} 이건 중복되는 코드들을 config 파일에 담아놓아서 불러왔다. API_KEY 얘도 마찬가지.
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endpoint)
    .then(response => response.json())
    .then(response => console.log(response))
  }, [])

  return (
    <div style={{ width: '100%', margin: '0'}}>
      {/* 메인 이미지영역 */}

      <div style={{ width: '85%', margin: '1rem auto' }}>
        <h2>영화앱</h2>

        <hr />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button>더보기</button>
      </div>
    </div>
  )
}

export default LandingPage;