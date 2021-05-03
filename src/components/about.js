import React from 'react';
import '../stylesheets/style.css'
import '../stylesheets/about.css'
import frame1 from '../images/SambramaWebp_13.webp'
import frame2 from '../images/SambramaWebp_9.webp'
import frame3 from '../images/SambramaWebp_7.webp'
import team1 from '../images/SambramaWebp_25.webp'
import team2 from '../images/SambramaWebp.webp'
import team3 from '../images/SambramaWebp_15.webp'
import team4 from '../images/SambramaWebp_17.webp'
import team5 from '../images/SambramaWebp_4.webp'
import ceo from '../images/SambramaWebp_8.webp'
import {Card} from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';  
import Navigation from '../components/navigation'
import "aos/dist/aos.css"
import Aos from 'aos'

function About(){

        Aos.init({
                offset:400,
                duration: 1500
        });
    return(
    <div>
           
            {/* --------------------SECTION 1------------------------------ */}
        <div className="about_background">
                <Navigation/>
            <div className=" col-lg-6 col-10 section1-text " data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-mirror="false" data-aos-duration="1500">
                <div className="about_who pb-5 visiblity-lg">WHO WE ARE </div>
                <div className="about_quote pb-5  visiblity-lg">Responsible for building Digital Astitva for 50+ businesses across India.</div>
                <div className="about_quote pb-lg-5 pb-2 visibilty-sm ">We are Digiyogi.
                 We are borned to provide digital astitva.</div>
                <div className="about-scroll pt-5">Scroll Down</div>
            </div>
        </div>
{/* -------------------------------------- START FRAME (section2)-------------------------------------------- */}
        <div className="about_frame">
            <div className="about-frame-text">
            <div className="about_frame_path">THE ASTITVA</div>
            <div className="about_frame_journey">Story Behind Our ourney</div>
            </div>
            <div className="frames-container container ">
            <div className="row pt-5 mt-5">
                        <div className="col-md-6">
                        <img className="img-fluid frame-image" variant="top" src={frame1} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center ">
                            <div className="frame-text " >
                            <div className="frame-subheadings pb-2">July 2020 - Incorporation</div>
                            The idea of creating digital workspaces for Small Medium & Large Enterprises was born and officially incorporated on papers.
                            With only one commitment, 
                            to offering affordable and quality-focused IT solutions for everyone.
                            </div>
                        </div>
                </div>
                {/* ---------------------------Frame on Large Screen------------------- */}
                <div className="row pt-lg-5 mt-lg-5 pt-2 mt-2   visiblity-lg">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="frame-text">
                            <div className="frame-subheadings pb-2">October 2020 – Beginning of everything</div>
                            After almost a quarter-long endless process of experimenting, research, and gathering feedbacks we built a solid understanding of the industry.
                            That is when we onboarded and started to create the Astitva for our very first customer. .
                            </div>
                        </div>
                        <div className="col-md-6">
                        <img className="img-fluid frame-image" variant="top" src={frame2} />
                        </div>
                </div>
                {/* ---------------------------END frame on large screen-------------------- */}
               
                {/* --------------------------------START frame on small screen---------- */}
                <div className="row pt-5 mt-5 visibilty-sm pt-2 mt-2">
                        <div className="col-md-6">
                        <img className="img-fluid frame-image" variant="top" src={frame2} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="frame-text">
                            <div className="frame-subheadings pb-2">October 2020 – Beginning of everything</div>
                            After almost a quarter-long endless process of experimenting, research, and gathering feedbacks we built a solid understanding of the industry.
                            That is when we onboarded and started to create the Astitva for our very first customer. 
                            </div>
                        </div> 
                </div>
                {/* -------------------------END frame on smalll screen--------------------- */}
                <div className="row pt-lg-5 mt-lg-5 pt-2 mt-2">
                        <div className="col-md-6">
                        <img className="img-fluid frame-image" variant="top" src={frame3} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center ">
                            <div className="frame-text">
                            <div className="frame-subheadings pb-2">First product release</div>
                            We Launched Our First Product YogiScanner – An Utility App For any scale
                            of business/individuals that helps in scanning documents, storing in the cloud.
                            </div>
                        </div>
                </div>
            </div>
        </div>
 {/* -------------------------------------- END FRAME (section2)-------------------------------------------- */}
{/* --------------------------------About Team SECTION 3------------------------- */}


                {/* ---------------------About CEo-------------- */}
        <div className="about_team container-fluid pb-5">
                <div className="team-heading1">YOGIS BEHIND THE SCENE</div>
                <div  className="team-heading2">Meet Our Team</div>
          
                <div className="row pt-5">
                        <div className="col-md-6">
                        <img className="img-fluid frame-image about-ceo" variant="top" src={ceo} />
                        </div>
                        <div className="col-md-6 d-flex align-items-center text-left pl-lg-5 pl-3">
                            <div className="frame-text">
                            <div className="frame-subheadings pb-2">Justin TSE</div>
                           <div>C.E.O, DIGIYOGI</div>
                           Our Team of yogis have super powers to take the product ideas to furition.
                           The expert teams of design, development, project management, quality assurance,
                           sales and all sorts of marketing work in a close-knit network to help customers.
                            </div>
                        </div>
            </div>
        </div>
        {/* ----------------------------------About Ceo--------------------- */}


        {/* ---------------------- START About Team For Wide Screen ---------------- */}
        <div className="about_team  visiblity-lg ">
        <OwlCarousel autoWidth={true}>
                <Card  className="bg-transparent slide-size ">
                        <Card.Img className="about-member-image" variant="top" src={team1} />
                        <Card.Body className="text-center">
                        <Card.Title>Poul Back</Card.Title>
                                <Card.Text>
                                founder
                                </Card.Text>
                        </Card.Body>
                </Card>
                <Card  className="bg-transparent about-member-image-pdng slide-size ">    
                        <Card.Img className="about-member-image" variant="top" src={team2} />
                        <Card.Body className="text-center">
                        <Card.Title>Karl Konard</Card.Title>
                                <Card.Text>
                                founder
                                </Card.Text>
                        </Card.Body>      
                </Card>
                <Card  className="bg-transparent about-member-image-pdng slide-size ">    
                        <Card.Img className="about-member-image " variant="top" src={team3} />
                        <Card.Body className="text-center">
                        <Card.Title>Gourav Patel</Card.Title>
                                <Card.Text>
                                mentor
                                </Card.Text>
                        </Card.Body>      
                </Card>
                <Card  className=" bg-transparent about-member-image-pdng slide-size ">    
                        <img className="about-member-image" variant="top" src={team4} />
                        <Card.Body className="text-center">
                        <Card.Title>Mark Garmann</Card.Title>
                                <Card.Text>
                                co - founder
                                </Card.Text>
                        </Card.Body>      
                </Card>
                <Card  className=" bg-transparent about-member-image-pdng  slide-size ">    
                        <img className="about-member-image" variant="top" src={team5} />
                        <Card.Body className="text-center">
                        <Card.Title>Arun Mist</Card.Title>
                                <Card.Text>
                                co - founder
                                </Card.Text>
                        </Card.Body>      
                </Card>
        </OwlCarousel>
        </div>
       {/* ---------------------END      About Team For Wide Screen ---------------- */}

       {/* ---------------------START    About Team For SMALL Screen ---------------- */}

      <div className="container mx-auto visibilty-sm">
              <div className=" row text-center">
                      <div className="col-6 pb-4 ">
                      <img className="img-fluid  about-member-image" variant="top" src={team1} />
                      <div className="team-text1">Poul Back</div>
                      <div className="team-text2">FOUNDER</div>
                      </div>
                      <div className="col-6 ">
                      <img className="img-fluid about-member-image" variant="top" src={team2} />
                      <div className="team-text1">Karl Konard</div>
                      <div className="team-text2">FOUNDER</div>
                      </div>
                      <div className="col-6 pb-4 ">
                      <img className="img-fluid  about-member-image" variant="top" src={team3} />
                      <div className="team-text1">Gaurav</div>
                      <div className="team-text2">MENTOR</div>
                      </div>
                      <div className="col-6">
                      <img className="img-fluid  about-member-image" variant="top" src={team4} />
                      <div className="team-text1">Marc Garman</div>
                      <div className="team-text2">CO - FOUNDER</div>
                      </div>
              </div>
      </div>
      {/* ---------------------END     About Team For SMALL Screen ---------------- */}
</div>
    )
}
export default About