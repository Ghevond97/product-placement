import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/bootstrap.css';
import '../css/bootstrap/bootstrap-grid.css';
import '../css/bootstrap/bootstrap-reboot.css';
import '../css/';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container-fluid photos">
      <div class="row align-items-stretch">
        
        <div class="col-6 col-md-6 col-lg-8" data-aos="fade-up">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_4.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_5.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>

        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_1.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_2.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_3.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>

        

        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_6.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_7.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>


        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_8.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_9.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <a href="single.html" class="d-block photo-item">
            <img src="images/img_10.jpg" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <div class="photo-text-more">
              <h3 class="heading">Photos Title Here</h3>
              <span class="meta">42 Photos</span>
            </div>
            </div>
          </a>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-12 text-center py-5">
          <p>
            All rights reserved
          </p>
        </div>
      </div>
    </div>

    )
  }
}

export default Home;