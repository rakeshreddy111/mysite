import React, { Component } from 'react';

class Blog extends Component{
    render(){
        return(
            <div>
            <div className="Blog section flex-container">
            <p className='section-paragraph'>Here are some of my recent and favorite blog posts.</p>
              <div className="item">
                <img src="https://reflectionsipc.files.wordpress.com/2017/05/blog-793047_960_720.jpg" className="thumb"/>
                <div className="blog-overlay">
                  <div className="text">
                    <h3>Why I Love React 💜</h3>
                    <p><strong>Featured in Frontend Weekly</strong></p>
                    <p>Currently over 3000 views</p>
                    <p><a href="#" target="_blank" rel="noopener noreferrer">Read on Medium  <i className="fa fa-external-link"></i></a></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Blog;