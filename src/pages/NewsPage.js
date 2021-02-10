import React from 'react';
import Newsgnb from '../components/Newgnb';
import Newslist from '../components/Newslist';

const NewsPage = ({ match }) => {
  
  const category = match.params.category || 'all';
  //카테고리가 선택되지 않으면 기본값 all로 사용한다.

  return (
    <>
      <Newsgnb />
      <Newslist />
    </>
  )
}

//gnb : 상단에 메뉴 네비게이션바
//Newslist : 뉴스 내용들
expect default NewsPage;