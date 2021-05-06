import React from 'react'
import Navigation from '../components/navigation'
import HomeServiceCrousel from '../components/home_service_crousel'
import ServiceSlider from '../components/service_slider'
import "aos/dist/aos.css"
import Aos from 'aos'
function Service() {
            Aos.init({
                offset:400,
                duration: 1500
        });
    return (
        <div>
    {/* -------------------------------------- START SERVICE-SECTION1----------------------------- */}
            <div className="service-bg">
            <Navigation/>
            <div className=" col-lg-6 col-11 section1-text  "  data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-mirror="false">
                <div className="about_who pb-5 visiblity-lg">WHAT WE DO</div>
                <div className="about_quote pb-5  ">Agility driven adoption of Technology to reshape the businesses for future </div>
                <div className="hero-quote pb-lg-5 pb-2 visiblity-lg">BUILD QUALITY-FOCUSED IT SOLUTIONS WITH MUCH-QUALIFIED TEAM.</div>
                <div className="about-scroll pt-5">Scroll Down</div>
            </div>
            </div>
        {/* ----------------------------------------- END SERVICE-SECTION1---------------------- */}

        {/* --------------------------------------------- START SERVICE-SECTION2------------------- */}
            <HomeServiceCrousel/>
        {/* -------------------------------------------------- END SERVICE-SECTION2------------------- */}
        <div className="home-slider-postion">
                <div className="container-fluid pb-4">
                <div className="row pb-4 mb-4">
                        <div className="col-12 slider-text-1 pb-4">OUR WORK PROCESS</div>
                        <div className="col-lg-6 col-12 slider-text-2">
                            We take every essential step to
                            craft our products & experiences.</div>
                </div>
                </div>
                <ServiceSlider/>
        </div>
        {/* -----------------------------------------------START SERVICE-SECTION 4----------------- */}
        <div className="service-section4">
        <div className="col 12 service-section4-text">
                <div className="section3-text1">OUR METHODS</div>
                <h2 className="section3-text2">Delivering Experience Through Our Agile
                Methodology Throughout Each Essential Step To Ensure A Productive Outcome.
                </h2>
        </div>
        </div>
        {/* --------------------------------------------------END SERVICE-SECTION 4---------------- */}
        </div>
    )
}

export default Service
