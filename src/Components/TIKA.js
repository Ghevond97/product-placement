import React, { Component } from 'react';
import axios from 'axios';
import img1 from '../images/img_1.jpg';

class TIKA extends Component {

  componentDidMount() {
    axios.get('http://localhost:8080/bridge/landing/active')
    .then(response => console.log(response))
  }

  render() {
    return (
      <div className="site-wrap">

  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div className="site-mobile-menu-body"></div>
  </div>

  <header className="header-bar d-flex d-lg-block align-items-center" data-aos="fade-left">
    <div className="site-logo">
      <a href="index.html">Shutter</a>
    </div>

    <div className="d-inline-block d-xl-none ml-md-0 ml-auto py-3" style={{position: "relative", top: "3px"}}><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

    <div className="main-menu">
      <ul className="js-clone-nav">
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="legal.html">Legal</a></li>
      </ul>
      <ul className="social js-clone-nav">
        <li><a href="https://www.facebook.com" target="_blank"><span className="icon-facebook"></span></a></li>
        <li><a href="https://www.instagram.com" target="_blank"><span className="icon-instagram"></span></a></li>
      </ul>
    </div>
  </header>
  <main className="main-content">
    <div className="container-fluid photos">
      <div className="row align-items-stretch">
        <div className="col-6 col-md-6 col-lg-8" data-aos="fade-up">
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
        <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
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

        <div className="col-6 col-md-6 col-lg-3" data-aos="fade-up">
          <a href="single.html" className="d-block photo-item">
          <img src={img1} alt="Image" className="img-fluid" />
            <div className="photo-text-more">
              <h3 className="heading">Photos Title Here</h3>
              <span className="meta">42 Photos</span>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="200">
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
        <div className="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
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



        <div className="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="">
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
        <div className="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
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
        <div className="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="">
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
        <div className="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
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
        <div className="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
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

        {/* <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="">
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
        <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
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
        <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <a href="single.html" className="d-block photo-item">
          <img src={img1} alt="Image" className="img-fluid" />

            <div className="photo-text-more">
              <div className="photo-text-more">
              <h3 className="heading">Photos Title Here</h3>
              <span className="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div> */}

        <div className="col-6 col-md-6 col-lg-8" data-aos="fade-up" data-aos-delay="">
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
        <div className="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
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
         <div className="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="">
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
        <div className="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
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
        <div className="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
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
      </div>

      <div className="row justify-content-center">
        <div className="col-md-12 text-center py-5">
        </div>
      </div>
    </div>
  </main>
</div> 

    );
  }
}

export default TIKA;