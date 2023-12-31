import React,{useEffect} from "react";
import './footer.css';
import { FiChevronRight, FiSend } from "react-icons/fi";
import video2 from '../../Assets/video2.mp4'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4">

                </video>
            </div> 

            <div className="secContent container">
                <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>

                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                    <button className="btn flex" type="submit">
                       SEND <FiSend className="icon" />
                    </button>
                </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/>
                                Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                        It is very important for the customer to pay attention to the adipiscing process. With what instigator do they flee here with the smallest pleasure, in time they provide us with the same pleasure, not with hatred, but with pain, but with greed itself in, and released?
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTtitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTtitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTtitle">
                                London
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                LAST MINUTE
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonasia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Oceania
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED = ABC@2023</small>
                    </div>
        
                </div>
            </div>

        </section>
    )
}

export default Footer;