import React from 'react';

import './css/main.css';
import BlogFeed from './blog_feed';

// import images
import Banner from './images/Banner.png';
import Blog from './images/blog.jpg';
import App from './images/nevera_app.jpg';
import CardGame from './images/nevera_card_game.jpg';
import Comic from './images/nevera_comic.jpg';
import Novel from './images/nevera_novel.jpg';
import VideoGame from './images/nevera_video_game.jpg';


// <section id='about'>
//   <h1>About</h1>
//   <hr></hr>
//   <div className="about">
//     <div className="text-wrapper">
//       <p>
//         Tiger Crab Studios is an independent creator and publisher focused on great story-telling and creative collaboration.
//       </p>
//       <p>
//         We are working on video games, board games, comic books and more. Currently all our projects are set in the fantasy horror genre and produced with the power of Kickstarter.
//       </p>
//     </div>
//     <iframe title="The White Room" src="https://www.youtube.com/embed/JgnWTpQ9Zw0" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
//   </div>
// </section>
//
// <hr></hr>

// <a href="#about">About</a> |

// <section id='dev-blog'>
//           <h1>Development Blog</h1>
//           <div className="dev-blog reverse-col">
//             <div className="img-wrapper">
//               <a href="http://www.tigercrabstudiosblog.com/">
//                 <img src={Blog} alt='blog'></img>
//               </a>
//             </div>
//             <div className="text-wrapper">
//               <a href="http://www.tigercrabstudiosblog.com/">
//                 <h3>Tiger Crab Studios Blog</h3>
//               </a>
//               <p>
//                 Click here to visit the Tiger Crab Studios Development Blog, full of useful advice and stories behind the creation of the projects.
//               </p>
//             </div>
//           </div>
//         </section>

// Blogger test api key: AIzaSyBOL8CuBD84Uk5IDQYUGzE49U4fUhE562I

export default class Main extends React.Component {

  render() {

    return (
      <div>

        <nav>
          <a href="#top">Home</a> |
          <a href="#projects">Projects</a> |
          <a href="#dev-blog">Development Blog</a> |
          <a href="#follow-us">Follow Us</a>
        </nav>
        <header>
          <img src={Banner} alt='tiger-crab-studios-banner'></img>
        </header>

        <section id='projects'>

          <h1 className='proj-header'>Projects</h1>


          <div className="project-container one">
            <a className='proj-link' href="https://sites.google.com/view/tigercrabstudios/nevera-wars-card-game">
              <img className='image' src={CardGame} alt='card-game'></img>
            </a>
            <div className="text-wrapper">
              <a href="https://sites.google.com/view/tigercrabstudios/nevera-wars-card-game">
                <h3>Nevera Wars Card Game</h3>
              </a>
              <p>
                Nevera Wars is a deck construction card game where players create their own deck of undead minions.
              </p>
            </div>
          </div>


          <div className="project-container two">
            <a className='proj-link' href="https://sites.google.com/view/tigercrabstudios/nevera-wars-app-game">
              <img className='image' src={App} alt="app"></img>
            </a>
            <div className="text-wrapper">
              <a href="https://sites.google.com/view/tigercrabstudios/nevera-wars-app-game">
                <h3>Nevera Wars App Game</h3>
              </a>
              <p>
                Nevera Wars will also be published as an app game and web game to allow more people to experience the game before deciding to purchase a physical copy. There will be a campaign mode and online multiplayer.
              </p>
            </div>
          </div>


          <div className="project-container three">
            <a className='proj-link' href="https://sites.google.com/view/tigercrabstudios/nevera-tales-comic-book">
              <img className='image' src={Comic} alt='comic'></img>
            </a>
            <div className="text-wrapper">
              <a href="https://sites.google.com/view/tigercrabstudios/nevera-tales-comic-book">
                <h3>Nevera Tales Comic Book</h3>
              </a>
              <p>
                Explore a more intimate side of Nevera as the Nevera Tales comic books.
              </p>
            </div>
          </div>



          <div className="project-container five">
            <a className='proj-link' href="https://sites.google.com/view/tigercrabstudios/nevera-legends-novel">
              <img className='image' src={Novel} alt="novel"></img>
            </a>
            <div className="text-wrapper">
              <a href="https://sites.google.com/view/tigercrabstudios/nevera-legends-novel">
                <h3>Nevera Legends Novel </h3>
              </a>
              <p>

              </p>
            </div>
          </div>

          <div className="project-container four">
            <a className='proj-link' href="https://sites.google.com/view/tigercrabstudios/nevera-legends-video-game">
              <img className='image' src={VideoGame} alt="video-game"></img>
            </a>
            <div className="text-wrapper">
              <a href="https://sites.google.com/view/tigercrabstudios/nevera-legends-video-game">
                <h3>Nevera Legends Video Game</h3>
              </a>
              <p>
                Nevera Legends is a monster collection RPG, players will travel across the world of Nevera in search of restoring their friend back to full life after a resurrection was performed catastrophically. But will the power to undo the mistake be worth the price?
              </p>
            </div>
          </div>


          <div className="project-container six">
            <a className='proj-link' href="">
              <img className='image' src={Blog} alt="store"></img>
            </a>
            <div className="text-wrapper">
              <a href="https://sites.google.com/view/tigercrabstudios/nevera-legends-novel">
              <h3>Store</h3>
              </a>
              <p>

              </p>
            </div>
          </div>


          <h1 id='dev-blog' className='blog-header'>Dev Blog</h1>

          <div id='blog-feed'>
            <BlogFeed />
          </div>

        </section>

        <section id='follow-us'>

          <div className="social-links">
            <a href="https://www.facebook.com/tigercrabstudios/">
              <i className="fab fa-facebook-square fa-3x"></i>
            </a>
            <a href="https://twitter.com/tigercrabstudio">
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a href="https://tigercrabstudios.tumblr.com/">
              <i className="fab fa-tumblr-square fa-3x"></i>
            </a>
            <a href="https://plus.google.com/107667168963867360033">
              <i className="fab fa-google-plus-g fa-3x"></i>
            </a>
            <a href="https://www.instagram.com/tigercrabstudios/">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
            <a href="https://www.reddit.com/r/TigerCrabStudios/">
              <i className="fab fa-reddit-alien fa-3x"></i>
            </a>
            <a href="https://www.kickstarter.com/profile/563979601">
              <i className="fab fa-kickstarter-k fa-3x"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCBOkmrgNF0GbBrpd4lXJYWg">
              <i className="fab fa-youtube fa-3x"></i>
            </a>
            <a href="https://gumroad.com/tigercrabstudios">
              <i className="fas fa-shopping-cart fa-3x"></i>
            </a>
          </div>

        </section>
      </div>
    );
  }
}
