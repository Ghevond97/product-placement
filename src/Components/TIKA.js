import React, { Component } from 'react';
import axios from 'axios';
import img1 from '../images/img_1.jpg';
import Quiz from './Quiz';
import Response from './Response';

class TIKA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingContent: null,
    };
  }

  // componentDidMount() {
  //   const { landingContent } = this.state;
  //   axios
  //     .get('http://0.0.0.0:8080/bridge/landing/active')
  //     //  .then(response =>this.setState({landingContent: response.data}))
  //     .then(response => {
  //       const data = response.data;
  //       console.log('DATA', data);
  //       this.setState({ landingContent: data });
  //     });
  // }

  render() {
    const { landingContent } = this.state;
    console.log('TESTING', landingContent);
    // JSON.parse(landingContent[0]);
    console.log(Array.isArray(landingContent));
    if (landingContent) {
      landingContent.map(content => {
        console.log(content.widthw);
      });
    }
    return (
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>

        <header
          className="header-bar d-flex d-lg-block align-items-center"
          data-aos="fade-left"
        >
          <div className="site-logo">
            <a href="index.html">Shutter</a>
          </div>

          <div
            className="d-inline-block d-xl-none ml-md-0 ml-auto py-3"
            style={{ position: 'relative', top: '3px' }}
          >
            <a href="#" className="site-menu-toggle js-menu-toggle text-white">
              <span className="icon-menu h3" />
            </a>
          </div>

          <div className="main-menu">
            <ul className="js-clone-nav">
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="careers.html">Careers</a>
              </li>
              <li>
                <a href="legal.html">Legal</a>
              </li>
            </ul>
            <ul className="social js-clone-nav">
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <span className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main className="main-content">
          <div className="container-fluid photos">
            {/* <div className="row align-items-stretch">
              {landingContent
                ? landingContent.map(content => (
                    <div
                      className={`col-6 col-md-6 col-lg-${content.width}`}
                      data-aos="fade-up"
                    >
                      <a href="single.html" className="d-block photo-item">
                        <img src={img1} alt="Image" className="img-fluid" />
                        <div className="photo-text-more">
                          <div className="photo-text-more">
                            <h3 className="heading">Photos Title Here</h3>
                            <span className="meta">42 Photos</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                : ''}
            </div> */}
            {/* <Quiz /> */}
            <Response />

            <div className="row justify-content-center">
              <div className="col-md-12 text-center py-5" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default TIKA;
