import React from 'react';
import * as Styles from './AboutSectionStyles';
import arrow from '../../../assets/res-arrow.png';
import bulb from '../../../assets/res-bulb.png';


export const AboutSection = () => {
  return (
    <>
      <Styles.AboutSectionContainer>
        <Styles.AboutImg></Styles.AboutImg>
        <Styles.AboutContentWrapper>
          <Styles.AboutTitleBox>
            <Styles.AboutTitle>
              <h4>
                About <br /> us
              </h4>
            </Styles.AboutTitle>
          </Styles.AboutTitleBox>
          <Styles.AboutText>
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
          </Styles.AboutText>
        </Styles.AboutContentWrapper>
      </Styles.AboutSectionContainer>

      <section class='about_details_info_container'>
        <div class='container'>
          <div class='about_details_title_box'>
            <small>about us</small>
            <h4>What we do</h4>
            <hr />
          </div>
          <div class='about_details_wrapper'>
            <div class='about_details_info_wrapper'>
              <div class='about_details_logo'>
                <img src={arrow} alt='' />
              </div>
              <div class='about_details_text'>
                <h4>Mission</h4>
                <p>
                  The company’s mission is to be the nation’s leader and sought
                  after professional agent of ICT industry, Providing efficient
                  professional services and technical support to ensure fast and
                  effective response to the industry.
                </p>
              </div>
            </div>
            <div class='about_details_info_wrapper'>
              <div class='about_details_logo'>
                <img src={bulb} alt='' />
              </div>
              <div class='about_details_text'>
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
    </>
  );
};
