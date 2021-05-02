import React from 'react'
import '../stylesheets/style.css'
import OwlCarousel from 'react-owl-carousel';
import {Card} from 'react-bootstrap'
import service1 from '../images/SambramaWebp_14.webp'
import service2 from '../images/SambramaWebp_1.webp'
import service3 from '../images/SambramaWebp_23.webp'
import service4 from '../images/SambramaWebp_6.webp'
import service5 from '../images/SambramaWebp_3.webp'

function Home_service_crousel() {
    return (
        <div>
             <div className="home-slider-postion">
                <div className="container-fluid">
                <div className="row pb-4">
                        <div className="col-12 slider-text-1 pb-4">Innovation through Technology</div>
                        <h2 className="col-lg-6 col-12 slider-text-2">Helping Enterprises To Morph Into Digital-First Businesses</h2>
                </div>
                <div className="row pb-5">
                        <div className="col-6 slider-text-3">What’s up to our sleeves?</div>
                        <div className="col-6 text-right slider-text-4 ">drag</div>
                </div>
                </div>
                
                <OwlCarousel autoWidth={true} >
                        <Card  className="bg-transparent slider-size">
                        <Card.Img className="home-slider-images" variant="top" src={service1} />
                       
                                <div className="row">
                                <div className="col-2 sildes-text1 visiblity-lg">01</div>
                                <div className="col-lg-10 col-12 ">
                                <div className="slides-text2 ">Strategic Consultancy </div>
                                <div className="slides-text3">Enabling businesses with new-age industry positioning.</div>
                                </div>
                                </div>
                       
                        </Card>
                        <Card  className="bg-transparent slider-size">
                        <Card.Img className="home-slider-images" variant="top" src={service2} />
                
                        <div className="row ">
                                <div className="col-2 sildes-text1 visiblity-lg">02</div>
                                <div className="col-lg-10 col-12">
                                <div className="slides-text2 ">Cloud-Tech Solutions </div>
                                <div className="slides-text3">Enterprise-grade future-proof IT & Infrastructure solutions.</div>
                                </div>
                                </div>
                        </Card>
                        <Card  className="bg-transparent slider-size">
                        <Card.Img className="home-slider-images" variant="top" src={service3} />
                        <div className="row">
                                <div className="col-2 sildes-text1 visiblity-lg">03</div>
                                <div className="col-lg-10 col-12">
                                <div className="slides-text2 ">Digital First Services </div>
                                <div className="slides-text3">Helping brands to build a presence where their customers are.</div>
                                </div>
                        </div>
                        </Card>
                        <Card  className="bg-transparent slider-size">
                        <Card.Img className="home-slider-images" variant="top" src={service4} />
                        <div className="row">
                                <div className="col-2 sildes-text1 visiblity-lg">04</div>
                                <div className="col-lg-10 col-12">
                                <div className="slides-text2 ">Product Design </div>
                                <div className="slides-text3">: Evolve aesthetics to the cater the customers of today and tomorrow.</div>
                                </div>
                        </div>
                        </Card>
                        <Card  className="bg-transparent slider-size">
                        <Card.Img className="home-slider-images" variant="top" src={service5} />
                        <div className="row">
                                <div className="col-2 sildes-text1 visiblity-lg">05</div>
                                <div className="col-lg-10 col-12">
                                <div className="slides-text2 ">Future of Technology</div>
                                <div className="slides-text3">Walk through the ever-evolving shift in technology with ease.</div>
                                </div>
                        </div>
                        </Card>
                </OwlCarousel>
                
      </div>
        </div>
    )
}

export default Home_service_crousel
