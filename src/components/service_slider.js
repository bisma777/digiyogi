import React from 'react'
import '../stylesheets/style.css'
import '../stylesheets/service.css'
import {RiLightbulbFlashLine,RiPencilRuler2Line,RiDragDropLine,RiInstagramLine,RiUserSmileLine,RiAdvertisementLine} from 'react-icons/ri'
import {SiAdobeaftereffects,SiIonic,SiNodeDotJs,
    SiAdobeillustrator,SiGmail,SiMailchimp,SiFacebook,SiBuffer,SiYoast,
    SiLinkedin,SiGoogleads,SiSnapchat,SiHubspot,SiAndroid,
    SiJavascript,SiAmazonaws,SiFirebase,SiFramer,SiAdobephotoshop,SiInvision,SiAdobexd,SiMaterialdesignicons} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import {FaWordpressSimple,FaReact,FaGithub,FaHtml5} from 'react-icons/fa'
import {BsLayoutTextSidebarReverse,BsCodeSlash,BsPeople,BsCardChecklist} from 'react-icons/bs'
import{BiRevision} from 'react-icons/bi'
import OwlCarousel from 'react-owl-carousel'
import {Card} from 'react-bootstrap'

function ServiceSlider() {
    return (
        <div>
            <div className="visiblity-lg container-fluid">
                <div className="slider-indicator justify-content-center row"><span>Design</span><span>Development</span><span>Marketing</span></div>
              <OwlCarousel autoWidth={true} items="3"  className="pt-4 mt-4 mb-5 visiblity-lg">
                <Card className=" bg-transparent service-slider-size  ">
                <span className="slider-indicator-heading mb-5">Design</span>
                    <div className="row">
                        <div className="col-3 pr-5  ">
                        <div>
                            <div className="text-center mb-4"><RiLightbulbFlashLine size={32}/></div>
                            <div className="service-slider-text1">Brainstorming</div>
                            <div className="service-slider-text2">We Collect Your Requirements,
                                Based on That We start Research, 
                                We Try To Explore More Possibilities.
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><RiPencilRuler2Line size={32}/></div>
                            <div className="service-slider-text1">Sketching</div>
                            <div className="service-slider-text2">After Brainstorming we sketch our Ideas,
                                Which Simplifies our workflow and
                                which enhances our Design Quality.
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><RiDragDropLine size={32}/></div>
                            <div className="service-slider-text1" >Design</div>
                            <div className="service-slider-text2">After Research We Start to Design
                                We Try to Design Astounding Designs and
                                We give those design to Revision.
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><BiRevision size={32}/></div>
                            <div className="service-slider-text1" >Revisions</div>
                            <div className="service-slider-text2">After Crafting Designs 
                                we take feedback From you We Change
                                our Designs according to Your Taste.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row ">
                           
                          <div className="col-12 text-center">
                           <FiFigma size={36} className="service-slider-icons"/>
                           <SiFramer size={36} className="service-slider-icons"/>
                           <SiAdobeaftereffects size={36} className="service-slider-icons" />
                           <SiAdobephotoshop size={36} className="service-slider-icons"/>
                           </div>
                           <div className="col-12 text-center">
                           <SiAdobexd size={36} className="service-slider-icons"/>
                           <SiInvision size={36} className="service-slider-icons"/>
                           <SiAdobeillustrator size={36} className="service-slider-icons"/>
                           </div>

                    </div>
                   </Card>
                    {/* -------------DEVELOPMENT----------- */}
                    <Card className=" bg-transparent service-slider-size ">
                    <span className="slider-indicator-heading mb-5">Development</span>
                    <div className="row ">
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><BsLayoutTextSidebarReverse size={24}/></div>
                            <div className="service-slider-text1">Research</div>
                            <div className="service-slider-text2">We Collect Your Requirements, 
                                Based on That We start Research, 
                                We Try To Explore More Possibilities.
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><SiMaterialdesignicons size={24}/></div>
                            <div className="service-slider-text1">Design</div>
                            <div className="service-slider-text2">After Research We Start to Design Architecture
                                 According to Your Business needs Needs,
                                 We craft UI and UX to make workflow more simple.
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><BsCodeSlash size={32}/></div>
                            <div className="service-slider-text1">Develop</div>
                            <div className="service-slider-text2">After Crafting UI and UX and Architecture
                                We start to Develop your Product,
                                We Strive to Create Experience Rather Than just a Product!
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><BsCardChecklist size={32}/></div>
                            <div className="service-slider-text1">Testing</div>
                            <div className="service-slider-text2">Our Intention is Making our Products Bug Free and Much Stable and Simple, 
                                We hunt bugs by Testing Our
                                Products again and again it will help to Putting an end to mediocrity.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row ">
                           
                           <div className="col-12 text-center">
                            <FaHtml5 size={36} className="service-slider-icons"/>
                            <SiJavascript size={36} className="service-slider-icons"/>
                            <SiAndroid size={36} className="service-slider-icons" />
                            <FaWordpressSimple size={36} className="service-slider-icons" />
                            <SiIonic size={36} className="service-slider-icons"/>
                            </div>
                            <div className="col-12 text-center">
                            <FaReact size={36} className="service-slider-icons"/>
                            <FaGithub size={36} className="service-slider-icons"/>
                            <SiAmazonaws size={36} className="service-slider-icons"/>
                            <SiFirebase size={36} className="service-slider-icons"/>
                            <SiNodeDotJs size={36} className="service-slider-icons"/>
                            </div>
 
                     </div>
                    </Card>
                    {/* ----------------------MARKETIING---------------------- */}
                    <Card className=" bg-transparent service-slider-size ">
                    <span className="slider-indicator-heading mb-5">Marketing</span>
                     <div className="row ">
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><BsLayoutTextSidebarReverse size={32}/></div>
                            <div className="service-slider-text1" >Research</div>
                            <div className="service-slider-text2">We Collect Your Requirements, 
                                Based on That We start Research,
                                We Try To Explore More Possibilities.
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><BsPeople size={32}/></div>
                            <div className="service-slider-text1" >Target Audience</div>
                            <div className="service-slider-text2">We narrow down your audiences 
                                we create strategies to boost your
                                business across targeted audience.
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><RiAdvertisementLine size={32}/></div>
                            <div className="service-slider-text1">Create Ads</div>
                            <div className="service-slider-text2">Having More than 3 years experience in the field of Visual media 
                                and print Media helped us to Craft Beautiful,
                                Attractive Ads, It may be video or Photo!
                            </div>
                        </div>
                        </div>
                        <div className="col-3 pr-5">
                        <div>
                        <div className="text-center mb-4"><RiUserSmileLine size={32}/></div>
                            <div className="service-slider-text1">Testing</div>
                            <div className="service-slider-text2">After Narrow downing Audience and Creating Beautiful Ads,
                                We Launch Campaigns on various social Medias,
                                Which Boost Your Business Quickly and Effectively.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row ">
                           
                           <div className="col-12 text-center">
                            <SiGmail size={36} className="service-slider-icons"/>
                            <SiHubspot size={36} className="service-slider-icons"/>
                            <SiMailchimp size={36} className="service-slider-icons" />
                            <SiSnapchat size={36} className="service-slider-icons" />
                            <SiYoast size={36} className="service-slider-icons"/>
                            </div>
                            <div className="col-12 text-center">
                            <SiFacebook size={36} className="service-slider-icons"/>
                            <SiGoogleads size={36} className="service-slider-icons"/>
                            <RiInstagramLine size={36} className="service-slider-icons"/>
                            <SiBuffer size={36} className="service-slider-icons"/>
                            <SiLinkedin size={36} className="service-slider-icons"/>
                            </div>
 
                     </div>
                    </Card>
                </OwlCarousel>
                </div>
            
{/* ---------------------------------------------For Small Screen---------------------- */}
           <div className="container-fluid visibilty-sm pb-5">
            <div className="slider-indicator">Design</div>
           <Card className=" bg-transparent ">
                    <div className="row">
                        <div className="col-12">
                        <div className="service-slide-sm ">
                            <div className="text-center"><RiLightbulbFlashLine size={32}/></div>
                            <div className="service-slider-text1">Brainstorming</div>
                            <div className="service-slider-text2">We Collect Your Requirements,
                                Based on That We start Research, 
                                We Try To Explore More Possibilities.
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-12 d-flex justify-content-end pt-4">
                        <div className=" service-slide-sm ">
                        <div className="text-center"><RiPencilRuler2Line size={32}/></div>
                            <div className="service-slider-text1">Sketching</div>
                            <div className="service-slider-text2">After Brainstorming we sketch our Ideas,
                                Which Simplifies our workflow and
                                which enhances our Design Quality.
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-12 pt-4">
                        <div className="service-slide-sm">
                        <div className="text-center"><RiDragDropLine size={32}/></div>
                            <div className="service-slider-text1" >Design</div>
                            <div className="service-slider-text2">After Research We Start to Design
                                We Try to Design Astounding Designs and
                                We give those design to Revision.
                            </div>
                        </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end pt-4">
                        <div  className="  service-slide-sm ">
                            <div className="service-slider-text1" >Revisions</div>
                            <div className="service-slider-text2">After Crafting Designs 
                                we take feedback From you We Change
                                our Designs according to Your Taste.
                            </div>
                        </div>
                        </div>
                    </div>
                   </Card>
                    {/* -------------DEVELOPMENT----------- */}
                    <Card className=" bg-transparent ">
                    <div className="slider-indicator">Development</div>
                    <div className="row ">
                        <div className="col-12 pt-4">
                        <div className="service-slide-sm">
                            <div className="service-slider-text1">Research</div>
                            <div className="service-slider-text2">We Collect Your Requirements, 
                                Based on That We start Research, 
                                We Try To Explore More Possibilities.
                            </div>
                        </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end pt-4">
                        <div className="  service-slide-sm ">
                            <div className="service-slider-text1">Design</div>
                            <div className="service-slider-text2">After Research We Start to Design Architecture
                                 According to Your Business needs Needs,
                                 We craft UI and UX to make workflow more simple.
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="service-slide-sm pt-4">
                            <div className="service-slider-text1">Develop</div>
                            <div className="service-slider-text2">After Crafting UI and UX and Architecture
                                We start to Develop your Product,
                                We Strive to Create Experience Rather Than just a Product!
                            </div>
                        </div>
                        </div>
                        <div  className="col-12 d-flex justify-content-end pt-4">
                        <div className="  service-slide-sm ">
                            <div className="service-slider-text1">Testing</div>
                            <div className="service-slider-text2">Our Intention is Making our Products Bug Free and Much Stable and Simple, 
                                We hunt bugs by Testing Our
                                Products again and again it will help to Putting an end to mediocrity.
                            </div>
                        </div>
                        </div>
                    </div>
                    </Card>
                    {/* ----------------------MARKETIING---------------------- */}
                    <Card className=" bg-transparent ">
                    <div className="slider-indicator">Marketing</div>
                     <div className="row ">
                        <div className="col-12 pt-4">
                        <div className="service-slide-sm">
                            <div className="service-slider-text1" >Research</div>
                            <div className="service-slider-text2">We Collect Your Requirements, 
                                Based on That We start Research,
                                We Try To Explore More Possibilities.
                            </div>
                        </div>
                        </div>
                        <div  className="col-12 d-flex justify-content-end pt-4">
                        <div  className="  service-slide-sm">
                            <div className="service-slider-text1" >Target Audience</div>
                            <div className="service-slider-text2">We narrow down your audiences 
                                we create strategies to boost your
                                business across targeted audience.
                            </div>
                        </div>
                        </div>
                        <div className="col-12 pt-4">
                        <div className="service-slide-sm">
                            <div className="service-slider-text1">Create Ads</div>
                            <div className="service-slider-text2">Having More than 3 years experience in the field of Visual media 
                                and print Media helped us to Craft Beautiful,
                                Attractive Ads, It may be video or Photo!
                            </div>
                        </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end pt-4">
                        <div className="  service-slide-sm">
                            <div className="service-slider-text1">Testing</div>
                            <div className="service-slider-text2">After Narrow downing Audience and Creating Beautiful Ads,
                                We Launch Campaigns on various social Medias,
                                Which Boost Your Business Quickly and Effectively.
                            </div>
                        </div>
                        </div>
                    </div>
                    </Card>
           </div>
        </div>
    )
}

export default ServiceSlider
