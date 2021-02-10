import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  //로딩, 성공, 실패에 대한 상태관리
  const [loading, setLoading ] = useState(false); //로딩상태  
  const [success, setSuccess ] = useState(null); //성공  
  const [error, setError ] = useState(null); //실패
  
  useEffect(() => {
    const process = async() => {
      setLoading(true); //로딩이 완료되면

      //성공, 실패 예외처리를 해준다.
      try {
        const success = await promiseCreator();
        setSuccess(success); // 성공 or 실패
      } catch(e) {
        setError(e);
      }
      setLoading(false);//로딩실패시
    };
    process();
  }, deps);
  //파라미터로 받아 온 deps배열은 usePromise내부에서 사용한 useEffect의 의존 배열로 설정된다.

  return [loading, success, error];
};