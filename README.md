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