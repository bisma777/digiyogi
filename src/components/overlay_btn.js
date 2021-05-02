import React from 'react'
import '../stylesheets/style.css'
import {FaInstagram} from 'react-icons/fa'
import {RiLinkedinLine,RiFacebookLine} from 'react-icons/ri'
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';


function Overlay_btn() {
    function openNav() {
        document.getElementById("overlayNav").style.width="100%";
        document.getElementById("overlayNav").style.transform="scale(1)";
      }
    function closeNav(){
        document.getElementById("overlayNav").style.width="0%";
        document.getElementById("overlayNav").style.transform="scale(0)";
      }
      function openContact() {
        document.getElementById("contact_ovrlay").style.width="100%";
      }
      function closeContact() {
        document.getElementById("contact_ovrlay").style.width="0%";
      }
      

    return (
      
        <span  onClick={openNav} onDoubleClick={closeNav}>
           
             <span onclick=""className="nav-overlay fixed-top visiblity-lg">
                <span className="nav-rect1 test"></span>
                <span className="nav-rect2 test"></span>
                <span className="nav-rect3 test"></span>
            </span>
            <span onclick=""className="nav-overlay fixed-top visibilty-sm ">
                <div className="nav-rect1 test"></div>
                <div className="nav-rect2 test"></div>
                <div className="nav-rect3 test"></div>
            </span>

        <div Id="overlayNav" className="nav-text navi_overlay">
        <div className="row">
        <div className="col-lg-6 col-12 text-center nav-links">
        <Link  to="/About" > About</Link> 
        <a> Careers</a>
        <a onClick={openContact}>Contact</a>
        <Link to ="/Service"> Services</Link> 
        </div>
        <div className="col-12 col-lg-3">
        <div className="nav-mail">hello@digiyogi.com</div>
        <div className="nav-quote">DigiYogi Technologies Pvt Ltd is an Indian IT firm,
           Committed To Provide Quality Product
           in Affordable Price Range, DigiYogi HQ in Mangaluru Karnataka.  </div>
        <div className="pt-2 text-center col-12" >
            <a className="footer-social-links"><FaInstagram size={36}/></a>
            <a className="footer-social-links"><RiLinkedinLine size={36}/></a>
            <a className="footer-social-links"><RiFacebookLine size={36}/></a>
        </div>
        </div>
        </div>
        
        </div>
             
      
        <div Id="contact_ovrlay" className="contact_overlay nav-text  justify-content-center row ">
            <div className="col-lg-5 col-12 mr-4">
               <span  onClick={closeContact} className="contact-button">Back</span>
                <div className="contact-overlay-form contact-fields ">
                                <input type="text" class="form-controll" placeholder="Jane apple"/>
                                <label className=" ">Your Name</label>
                </div>
                <div className=" contact-overlay-form contact-fields">
                                <input type="text" class="form-controll" placeholder="jane.appleseed@example.com"/>
                                <label className=" ">Email</label>
                </div>
                <div className="contact-overlay-form contact-fields">
                                <input type="text" className="form-controll" placeholder="+91-9906123456"/>
                                <label className=" ">Contact Number</label>
                </div>
                <div className="contact-overlay-form contact-fields">
                                <input type="text" className="form-controll" placeholder="School"/>
                                <label className=" ">Your Business/Project</label>
                </div>
                <div>
                    <span className="contact-button">Get a consultation </span>
                    
                </div>
            </div>
        </div>

        </span>
    )
}

export default Overlay_btn
