import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Welcome />
      
      <h2 className="heading" id="projects">PROJECTS</h2> <br />
        <Projects />

      <h2 className="heading" id="about">ABOUT</h2> <br />
        <About />

        <br />
      <h2 className="heading" id="blog">BLOG</h2> <br />
        <Blog />

        <br />
        <h2 className="heading" id="footer">LIKE WHAT YOU SEE?</h2> <br />
          <Footer />
      

        </div>
    );
  }
}

export default App;
