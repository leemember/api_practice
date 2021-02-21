import React from 'react';
import LandingPage from './components/movie/LandingPage';
import MovieDetail from './components/movie/MovieDetail';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
       <Route path="/" exact={true} component={LandingPage}/>
       <Route path="/movie-detail" component={MovieDetail}/>
    </HashRouter>
  );
}

export default App;