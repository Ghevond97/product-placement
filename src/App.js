import React, { Component } from 'react';
import Routes from './routes';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/jquery-ui.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/bootstrap-datepicker.css';
import './css/aos.css';
import './css/fancybox.min.css';
import './css/style.css';

import Home from './Components/Home'
import TIKA from './Components/TIKA';
import Quiz from './Components/Quiz';

class App extends Component {
  render() {
    return (
      // <Routes />
      // <Home />
      <TIKA />
      // <Quiz />
    );
  }
}

export default App;
