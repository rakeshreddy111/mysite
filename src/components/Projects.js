import React, { Component } from 'react';

class Projects extends Component{
    render(){
        return(
            <div className="Projects section flex-container">
        <div className="item">
          <img src="https://i.pinimg.com/736x/e2/fe/3a/e2fe3aa694665884a396b86582220425--shopping-cart-ux-shopping-cart-design.jpg" className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>NexLine</h3>
              <p><strong>Shop and add your favorites to Cart</strong></p>
              <p>JavaScript, React, Redux, Ruby, Rails, PostgreSQL</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Explore App <i className="fa fa-external-link"/></a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://solwincdn-79e1.kxcdn.com/wp-content/uploads/2016/02/JewelUX-Home-Page.png" className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Jewel UX</h3>
              <p><strong>Your favorite place for Jewelry shopping</strong></p>
              <p>Ruby, Rails, PostgreSQL, Bootstrap UI</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="http://www.allsee-tech.com/digital-signage-blog/wp-content/uploads/2017/10/digital-aignage-over-print.jpg" className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Digital Signage</h3>
              <p><strong>Digital Ads</strong></p>
              <p>JavaScript, React, Ruby, Rails, PostgreSQL</p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        </div>
        );
    }
}

export default Projects;