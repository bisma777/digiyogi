import React from 'react';
import '../stylesheets/style.css'
import '../stylesheets/about.css'
import Navigation from '../components/navigation'
import HomeServiceCrousel from '../components/home_service_crousel'
import "aos/dist/aos.css"
import Aos from 'aos'
function Home(){

        Aos.init({
                offset:400,
                duration: 1500
        });
    return(
    <div>
        {/* --------------------------------- HERO BANNER/ SECTION-1--------------------------------------- */}
        <div className="hero">
        <Navigation/>
        
        <div className="section1-text">
                <div className="row " data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-mirror="false">
                <h1 className="hero-tagline col-lg-6 col-12 visiblity-lg">Craft Future-Ready Businesses with DigiYogi</h1>
                </div>
                        {/* TAG LINE FOR SMALL SCREEN */}
                        <div className="row " data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-mirror="false">
                        <div className="visibilty-sm hero-tagline-sm ">
                        <div className="col-12">
                        Craft 
                        </div>
                        <div className="col-12">
                        Future-Ready Businesses with DigiYogi
                        </div>
                        </div>
                        </div>
                <div className="row">
                <p className="hero-quote col-4 visiblity-lg" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-mirror="false" >MODERN PROBLEMS REQUIRE MODERN SOLUTIONS. DIGIYOGI OFFERS 
                QUALITY-FOCUSED IT SOLUTIONS TO SIMPLIFY IT WORKFLOW FOR NEXT-GEN BUSINESSES. 
                </p>
                <div className="hero-digi_agen text-right col-6 pt-5" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-mirror="false" >DIGITAL AGENCY</div>
                </div>
        </div>      
        </div>
        {/* --------------------------------------END HERO BANNER/ SECTION1------------------------- */}
                <HomeServiceCrousel/>
       {/* -----------------------------------------START SLIDER/ SECTION 2---------------- */}
       
        
{/* -------------------------------------------End Slider/ Section 2---------------------- */}
     {/* --------------------------- START SECTION 3 ------------------------------------- */}
      <div className="home-section3">
        <div className="col-6 home-section3-text">
                <div className="section3-text1">Why DigiYogi?</div>
                <div className="section3-text2">The next Human evolution has already begun.
                  We help you lay the very foundation of your Digital Astitva.</div>
        </div>
      </div>
      {/* --------------------------------END SECTION 3---------------------------------- */}
    </div>
  

    )}
export default Home