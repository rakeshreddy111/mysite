import React, { Component } from 'react';
import profilepic from '../images/profilepic.jpg'

class Welcome extends Component{
    render(){
        return(
            <div className="Welcome section">
                 <h1 className="welcome-intro">
                    
                    <strong>Rakesh Reddy Buttreddy</strong> is a <strong>full stack Java developer</strong> living in Harrisburg, Pennsylvania
                <br/>
                <br/>
                <a href="https://www.linkedin.com/in/rakesh-reddy-687b6558/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  
                <a href="https://medium.com/@rakeshreddy_46136" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/></a>  
                <a href="https://github.com/rakeshreddy111" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a> 
                <a href="mailto:buttreddy.rakesh@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
                <br/>
                <a href="https://drive.google.com/open?id=1KnP2g70Ke2PAp1lIbJ264Viuef5ZGgzU" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>
    
    
                </h1>
                <img src={profilepic} className="main-pic"/>

            </div>
        );
    }
}

export default Welcome;