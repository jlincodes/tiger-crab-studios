import React from 'react';
import './css/main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
          <a href="#top">Home</a> |
          <a href="#about">About</a> |
          <a href="#dev-blog">Development Blog</a> |
          <a href="#projects">Projects</a> |
          <a href="#follow-us">Follow Us</a>
          </nav>
        </header>

        <section id='about'>
          <h1>Welcome to Tiger Crab Studios</h1>
          <hr></hr>
          <h2>About</h2>
          <hr></hr>
          <div className="about">
            <div className="desc-text-wrapper">
              <p>
                Tiger Crab Studios is an independent creator and publisher focused on great story-telling and creative collaboration.
              </p>
              <p>
                We are working on video games, board games, comic books and more. Currently all our projects are set in the fantasy horror genre and produced with the power of Kickstarter.
              </p>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JgnWTpQ9Zw0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </section>
      </div>
    );
  }
}
