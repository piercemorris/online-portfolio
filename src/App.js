import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
import './App.scss';

const params = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none'
    }
  },
}

class App extends Component {

  goToSection = (section) => {
    goToAnchor(section);
  }

  render() {
    return (
      <div className="App">
        <header className="header" id="home-section">
          <nav className="navigation">
            <ul>
              <li onClick={() => this.goToSection('about-section')}>about</li>
              <li onClick={() => this.goToSection('projects-section')}>portfolio</li>
              <li>contact</li>
            </ul>
          </nav>
          <Particles className="particles" params={params} />
          <div className="box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Pierce James Morris</span>
              <span className="heading-primary--sub one">Computer Scientist</span>
              <span className="heading-primary--sub two">Avid Japanese learner</span>
              <span className="heading-primary--sub three">Aspiring Web Developer</span>
            </h1>
          </div>
        </header>
        <ScrollableAnchor id="about-section">
        <section className="about">
          <div className="about-info">
            <div className="title">
              About me
            </div>
            <div className="text">
              I first started my programming venture in 2015 when I first got introduced to the Python programming language, for my A-level computer science course.
              Initially I was interested in game development where I first developed a 'brick breaker' style game using Pygame.
              <br /><br />
              Upon honing my development techniques, I quickly got into web developement. I liked the instant gratification of hosting a website so quickly
              and it being used almost instantly. Since then I moved onto full-stack javascript development whilst studying a Computer Science degree at the
              University of Nottingham.
            </div>
            <img className="me" src={require('./images/me.jpg')} alt="me" />
          </div>
        </section>
        </ScrollableAnchor>
        <section>
          <ScrollableAnchor id="projects-section">
          <div className="projects">
            <div className="title">
              Projects
            </div>
            <div className="container">
              <div className="project">
                project 1
              </div>
              <div className="project">
                project 2
              </div>
              <div className="project">
                project 3
              </div>
              <div className="project">
                project 3
              </div>
              <div className="project">
                project 3
              </div>
              <div className="project">
                project 3
              </div>
              <div className="project">
                project 3
              </div>
              <div className="project">
                project 3
              </div>
              <div className="project">
                project 3
              </div>
            </div>
          </div>
          </ScrollableAnchor>
        </section>
      </div>
    );
  }
}

export default App;
