# 💻 REST API 불러오기 연습 

## api 리스트

1. 영화 목록 불러오기
2. 뉴스 불러오기
3. 네이버 책 검색해보기

## 사용한 라이브러리

- axios : api의 데이터를 가져오기 위해 사용하는 툴이다.
- sass
- styled-components

그 외에 커스터마이징 Hooks를 만들어서 코드를 간결화 시키기 !

--------

## 🎥 영화 불러오기

- The MovieDB Website로 이동 (https://www.themoviedb.org)
- 가입 후 로그인하고 api key를 받는다
- API 키 받는 방법
1. 로그인하고 계정 - 설정 누른다.
2. 왼쪽 메뉴바에 api클릭
3. api 키 요청 클릭 - 디벨로퍼 클릭 - 동의 클릭 (accept)
4. 어플리케이션 이름 등등 폼형식대로 정보들을 적는다.
> 이때 어플리케이션 주소 적는 곳에는 localhost:3000 이렇게 임의로 적어도 된다. 주소나 다른 인적사항들도 임의로 적어도됨.

```
API 키 (v3 auth)
e322d68e81a21f38fd86583270b7e4b1
```
- Text Editor에서 the MovieDB API를 위한 설정

영화의 데이터를 불러올 때는

```
const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`; // page=1 첫페이지만 가져오겠다는 뜻 

    fetch(endpoint) //fetch를 이용하여 가져온다.
    .then(response => response.json()) //json을 사용해 가져온다.
```

이렇게 endpoint 라는 함수에 담아 고정값인 api_url, api,key 의 값을 넣고, 불러오고 싶은 데이터들의 주소를 입력해준다.
그리고 fetch로 영화 api 데이터가 담긴 endpoint를 json으로 뿌려준다. 

```
.then(response => {

      console.log(response)
      setMovies([response.results]);
      setMainMovieImage(response.results[0]); 
      // json 결과값중 첫번째로 뜨는 이미지를 메인이미지로 설정해둔다.
    })
```
후에 이렇게 콘솔창에 영화 데이터의 json을 뿌려주고, 콘솔창에 나온 result값들 중 가져오고싶은 데이터만 갖다쓰면된다.

<img width="504" alt="스크린샷 2021-02-19 오후 3 48 19" src="https://user-images.githubusercontent.com/71499150/108473917-fc351280-72d1-11eb-823e-744400f0e751.png">

```
<MainImg
  image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
  title={MainMovieImage.original_title} //영화타이틀
  text={MainMovieImage.overview} //영화소개
  />
```