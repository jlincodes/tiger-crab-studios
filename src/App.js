import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Main from './main';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={About} />
      <Route exact path='/nevera_card_game' component={NeveraCardGame} />
      <Route exact path='/nevera_app_game' component={NeveraAppGame} />
      <Route exact path='/nevera_comic_book' component={NeveraComicBook} />
      <Route exact path='/nevera_video_game' component={NeveraVideoGame} />
      <Route exact path='/nevera_novel' component={NeveraNovel} />
    </div>
  </Router>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const NeveraCardGame = () => (
  <div>
    <h2>Nevera Card Game</h2>
  </div>
);
const NeveraAppGame = () => (
  <div>
    <h2>Nevera App Game</h2>
  </div>
);
const NeveraComicBook = () => (
  <div>
    <h2>Nevera Comic Book</h2>
  </div>
);
const NeveraVideoGame = () => (
  <div>
    <h2>Nevera Video Game</h2>
  </div>
);
const NeveraNovel = () => (
  <div>
    <h2>Nevera Novel</h2>
  </div>
);

export default App;
