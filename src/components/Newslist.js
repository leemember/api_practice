import React from 'react';
import NewsItem from '../components/NewsItem';
import axios from 'axios';
import usePromise from '../hooks/usePromise';

const Newslist = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    // 로딩, 응답, 에러
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      
    )
  })
}