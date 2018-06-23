import React, { Component } from 'react';
import footerpic from '../images/footerpic.jpg'

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <div> </div>
                <div className="footer-1">
                     <img src={footerpic} />
                </div>
                <div className="footer-2">
                    <h3>Contact</h3>
                        <p><a href="mailto:buttreddy.rakesh@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> buttreddy.rakesh@gmail.com</a></p>
                        <p><a href="https://www.linkedin.com/in/rakesh-reddy-687b6558/" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> Linkedin</a></p>
                        <p><a href="https://github.com/rakeshreddy111" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
                        <p><a href="https://medium.com/@rakeshreddy_46136" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/> Blog</a></p><br/>
                        <h3>This Site</h3>
                        <p>Made with ❤️ by <strong>Rakesh Reddy Buttreddy</strong> using React, JavaScript and custom CSS</p>
                        <p>Check out the repo <strong><a href="#" target="_blank" rel="noopener noreferrer">here on github</a></strong> © 2018</p>
                </div>
            </div>
        );
    }
}

export default Footer;