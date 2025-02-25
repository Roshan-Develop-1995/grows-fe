import React from 'react';
import "./about.css";
import AboutImg from "../../assets/roshan-bg_1.jpeg";
import CV from "../../assets/Roshan_cv_latest.pdf";
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container conatiner grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        Full Stack developer, I convert imagination into application. By just having 6+ years of learning my curiosity
                        has helped me have many happy clients and create some awesome products.
                    </p>
                    <a download="" href={CV} className="button button--flex"> Download CV
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier">
                                <path fill="var(--container-color)" d="M15.1289 5.43005L19.3489 6.19C19.7634 6.26246 20.1596 6.41602 20.5147 6.64178C20.8698 6.86755 21.1769 7.16113 21.4184 7.50574C21.6599 7.85035 21.8311 8.23918 21.9221 8.65002C22.0131 9.06087 22.0223 9.48566 21.9489 9.90002L20.2789 19.35C20.2076 19.7642 20.0552 20.1601 19.8305 20.5151C19.6057 20.8702 19.313 21.1773 18.9692 21.4189C18.6254 21.6605 18.2372 21.8318 17.827 21.923C17.4168 22.0141 16.9927 22.0233 16.5789 21.95L8.69891 20.5601C8.28397 20.4871 7.88751 20.333 7.53229 20.1064C7.17706 19.8799 6.87006 19.5855 6.62891 19.2401" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fill="var(--container-color)" d="M11.2802 2.05006C11.6933 1.97532 12.1173 1.98313 12.5274 2.07307C12.9376 2.16302 13.3258 2.33331 13.6698 2.57411C14.0138 2.8149 14.3067 3.12144 14.5316 3.47603C14.7565 3.83061 14.909 4.22621 14.9802 4.64003L16.6501 14.1C16.7249 14.5132 16.7171 14.9372 16.6271 15.3473C16.5372 15.7575 16.3669 16.1457 16.1261 16.4897C15.8853 16.8337 15.5788 17.1266 15.2242 17.3515C14.8696 17.5764 14.474 17.7289 14.0602 17.8001L6.18015 19.19C5.34473 19.3384 4.4846 19.1489 3.78888 18.6632C3.09316 18.1775 2.61883 17.4354 2.47015 16.6L2.16016 14.82" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fill="var(--container-color)" d="M2.17037 14.82C1.68722 11.9188 2.37523 8.94454 4.08331 6.55023C5.79139 4.15592 8.37988 2.53738 11.2804 2.05005V2.05005" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
                                <path fill="var(--container-color)" d="M2.09068 14.36C1.58068 10.19 6.09067 12.78 8.18067 9.76001C10.2707 6.74001 7.18069 2.76005 11.2907 2.05005" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>

                        </svg>

                    </a>
                </div>
            </div>
        </section>
    )
}

export default About