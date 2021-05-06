import React from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInstagram} from 'react-icons/fa'
import {RiLinkedinLine,RiFacebookLine} from 'react-icons/ri'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Home from '../src/components/home.js';
import About from '../src/components/about.js'
import Overlaybtn from '../src/components/overlay_btn'
import Service from '../src/components/service'
import ScrollToTop from '../src/components/scroll_top'

function App() {
  return (
    <Router>
      <div>
     
      <Overlaybtn/>
      <Route exact path='/' component={Home}></Route>
      <Route  path='/About' component={About}></Route>
      <Route  path='/Service' component={Service}></Route> 
      <ScrollToTop/>
     
        <footer className="container-fluid footer-bg footer-text">
          <div className="row"><div className="col footer-mail">hello@digiyogi.com</div></div>
          <div className="row">
                <div className="col-12 col-lg-3">
                <div className="footer-quote">DigiYogi Technologies Pvt Ltd is an Indian IT firm, Committed To Provide Quality 
                  Product in Affordable Price Range, DigiYogi HQ in Mangaluru Karnataka. </div>
                <div className="pt-2 text-center col-12" >
                  <a  href="#!" className="footer-social-links"><FaInstagram size={36}/></a>
                  <a  href="#!"  className="footer-social-links"><RiLinkedinLine size={36}/></a>
                  <a  href="#!"  className="footer-social-links"><RiFacebookLine size={36}/></a>
                </div>
                </div>
                <div className="col-lg-8 col-12  text-center footer-links ">
                <Link to="/About" > About</Link>
                <Link to="" >Careers</Link>
                <Link to=""  >Contact</Link>
                <Link to="/Service"> Services</Link> 
              </div>
          </div>
        </footer>     
      </div>
    </Router>
  );

}

export default App;