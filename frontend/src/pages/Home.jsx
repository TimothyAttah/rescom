import React from 'react';
import './index.css';
import './media_query.css';
import resLogo from '../assets/res8.jpg';
import resImg3 from '../assets/res3.png';
import resImg4 from '../assets/res4.png';
import resImg5 from '../assets/res5.png';
import resImg6 from '../assets/res6.png';
import resImg9 from '../assets/res9.jpeg';
import resImg10 from '../assets/res10.png';
import resImg11 from '../assets/res11.png';
import resImg12 from '../assets/res12.png';
import resImg13 from '../assets/res13.png';
import resImg14 from '../assets/res14.png';
import searchLogo from '../assets/search.png';
import developmentLogo from '../assets/development.png';
import testingLogo from '../assets/testing.png';
import launchLogo from '../assets/launch.png';

import arrowImg from '../assets/res-arrow.png';
import bulbImg from '../assets/res-bulb.png';
import {
  BsEnvelope,
  BsArrowRight,
  BsHouseDoor,
  BsTelephone,
  BsGlobe,
} from 'react-icons/bs';

const Home = () => {
  return (
    <div>
      <section className='top_section'>
        <div className='logo'>
          <img src={resLogo} alt='logo' />
        </div>
      </section>
      <section className='intro_section'>
        <div>
          <div className='intro_info_title'>
            <p>intro</p>
            <span className='intro_info_line' />
          </div>
          <div className='intro_info'>
            <h4>
              WE ARE AN <br /> INDEPENDENT <br /> STRATEGY,
              <br /> DESIGN, AND <br />
              COMMUNICATIONS <br /> COMPANY.
            </h4>
          </div>
        </div>
        <div className='intro_img'>
          <img src={resImg3} alt='img' width='500' />
        </div>
      </section>

      <div className='about_container'>
        <div className='about_img'></div>
        <div className='about_content_wrapper'>
          <div className='about_title_box'>
            <div className='about_title'>
              <h4>
                About <br /> us
              </h4>
            </div>
          </div>
          <div className='about_text'>
            <p>
              Re'sCom Creations (RC) is an IT/ICT solution company in Nigeria
              dedicated towards delivering qualitative services information
              technology, entertainment, and information management system
            </p>
            <p>
              through the application of information technology solutions by
              developing concepts using technical and entertainment mediums to
              promote and bring about increase and improvements in the sales of
              products and services of our clients.
            </p>
          </div>
        </div>
      </div>

      <section className='about_details_info_container'>
        <div className='container'>
          <div className='about_details_title_box'>
            <small>about us</small>
            <h4>What we do</h4>
            <hr />
          </div>
          <div className='about_details_wrapper'>
            <div className='about_details_info_wrapper'>
              <div className='about_details_logo'>
                <img src={arrowImg} alt='' />
              </div>
              <div className='about_details_text'>
                <h4>Mission</h4>
                <p>
                  The company’s mission is to be the nation’s leader and sought
                  after professional agent of ICT industry, Providing efficient
                  professional services and technical support to ensure fast and
                  effective response to the industry.
                </p>
              </div>
            </div>
            <div className='about_details_info_wrapper'>
              <div className='about_details_logo'>
                <img src={bulbImg} alt='' />
              </div>
              <div className='about_details_text'>
                <h4>Vision</h4>
                <p>
                  Is to become the Leading IT Company and Web Designers in Lagos
                  Nigeria.We have a long record of accomplishments both in
                  private and government entities including telecommunications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='case_study_container'>
        <div className='case_study_img'>
          <img src={resImg4} alt='' />
        </div>
        <div className='case_study_info_container'>
          <div className='case_study_title_box'>
            <p>case study</p>
            <h4>our values</h4>
          </div>
          <div className='case_study_info_wrapper'>
            <div className='case_study_info_img'>
              <img src={resImg5} alt='' />
            </div>
            <div className='case_study_info_text'>
              <div className='case_study_info_text_wrapper'>
                <p>
                  Re’sCom Creations Is Committed To Maintain 100% Client’s
                  Satisfaction By Certain Values Deep Integrity & Ensuring Code
                  of Conduct Precious Timekeeping & Highest level of Accuracy
                </p>
                <p>
                  We pride ourselves on our expert group of highly skilled and
                  talented professionals who work closely with our clients to
                  build and run system that help businesses to succeed in this
                  rapidly changing and challenging world. We constantly upgrade
                  ourselves to keep up with the latest technologies and deliver
                  maximum value with our on-time deliveries and customer
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='process_container'>
        <div className='process_title_box'>
          <p>how we work</p>
          <h4>our process</h4>
        </div>

        <div className='process_info_wrapper'>
          <div className='process_info_box'>
            <div className='process_top_box'>
              <div className='process_icon_box'>
                <img src={searchLogo} alt='' />
              </div>
              <div>
                <BsArrowRight className='arrow_right' />
              </div>
            </div>
            <div className='process_text'>
              <h4>research</h4>
              <p>
                Initially our business analyst gathers entire project
                Requirements; performs analysis and ask if there is Any further
                clarification required. Then we build the Feature list,
                specifications and wireframes and Evaluate the time frame and
                cost estimates,
              </p>
            </div>
          </div>
          <div className='process_info_box'>
            <div className='process_top_box'>
              <div className='process_icon_box'>
                <img src={developmentLogo} alt='' />
              </div>
              <div>
                <BsArrowRight className='arrow_right' />
              </div>
            </div>
            <div className='process_text'>
              <h4>development</h4>
              <p>
                On client’s approval, we divide the complete project into
                different milestones and communicate these to clients. We then
                proceed with the project and start with the graphic & theme
                design.
              </p>
            </div>
          </div>
          <div className='process_info_box'>
            <div className='process_top_box'>
              <div className='process_icon_box'>
                <img src={testingLogo} alt='' />
              </div>
              <div>
                <BsArrowRight className='arrow_right' />
              </div>
            </div>
            <div className='process_text'>
              <h4>testing</h4>
              <p>
                On completion of the design, we send it to client for approval
                and ask for feedback or iterations they may have
              </p>
            </div>
          </div>
          <div className='process_info_box'>
            <div className='process_top_box'>
              <div className='process_icon_box'>
                <img src={launchLogo} alt='' />
              </div>
              <div>
                <BsArrowRight className='arrow_right' />
              </div>
            </div>
            <div className='process_text'>
              <h4>launch</h4>
              <p>
                On completion of theme, we start with the development and
                provide updates to clients on day to day basis via email. Once
                the final testing is done, the project is handed over to the
                client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='service_container'>
        <div className='service_title_box'>
          <p>how we work</p>
          <h4>our service</h4>
        </div>
        <div className='service_info_box'>
          <div className='service_info'>
            <div className='service_info_icon'>
              <img src={resImg11} alt='' />
            </div>
            <h4 className='service_info_title'>ecommerce development</h4>
            <p className='service_info_text'>
              Whether you need a Shopify ecommerce storefront, a WordPress
              lead-generation machine, or anything in between, we’ve got you
              covered.
            </p>
          </div>
          <div className='service_info'>
            <div className='service_info_icon'>
              <img src={resImg12} alt='' />
            </div>
            <h4 className='service_info_title'>web & mobile development</h4>
            <p className='service_info_text'>
              We dedicated to creating the best apps & Websites that run on
              mobile, web, and desktop platforms. We build websites that promote
              businesses online and connect them with the right prospects for
              patronage
            </p>
          </div>
          <div className='service_info'>
            <div className='service_info_icon'>
              <img src={resImg13} alt='' />
            </div>
            <h4 className='service_info_title'>brand plan & strategy</h4>
            <p className='service_info_text'>
              The right branding (including designing an impactful logo,
              website, and other brand assets) helps you carve out a distinct
              style, and it increases your brand recognition in the market.
            </p>
          </div>
          <div className='service_info'>
            <div className='service_info_icon'>
              <img src={resImg14} alt='' />
            </div>
            <h4 className='service_info_title'>digital marketing</h4>
            <p className='service_info_text'>
              Digital Marketing That Drives Results, Propel your business to new
              heights with our award-winning digital marketing services and
              technology platform.
            </p>
          </div>
        </div>
      </section>

      <section className='contact_container'>
        <div className='contact_info_wrapper'>
          <h2>Stay in Touch</h2>

          <div className='contact_info_list'>
            <div className='contact_icon'>
              <BsHouseDoor />
            </div>
            <p className='contact_address'>
              4 Ado Road Sunrise Plaza Ajah Lagos
            </p>
          </div>
          <div className='contact_info_list'>
            <div className='contact_icon'>
              <BsTelephone />
            </div>
            <p>+234-70617-93817</p>
          </div>
          <div className='contact_info_list'>
            <div className='contact_icon'>
              <BsEnvelope />
            </div>
            <p>info@rescomcreations.com</p>
          </div>
          <div className='contact_info_list'>
            <div className='contact_icon'>
              <BsGlobe />
            </div>
            <p>www.rescomcreations.com</p>
          </div>
        </div>
        <div className='contact_info_img'>
          <div className='contact_info_img1'>
            <img src={resImg6} alt='' />
          </div>
          <div className='contact_info_img2'>
            <img src={resImg9} alt='' />
          </div>
        </div>
      </section>

      <section className='footer_container'>
        <div className='footer_wrapper'>
          <img src={resImg10} alt='' />
          <div className='footer_text'>
            <h2>Thank you</h2>
            <p>&copy;rescomcreations2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
