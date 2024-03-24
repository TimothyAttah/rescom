import React from 'react';
import * as Styles from './IntroSectionStyles';
import introImg from '../../../assets/res3.png';

export const IntroSection = () => {
  return (
    <Styles.IntroSectionContainer>
      <div>
        <Styles.IntroInfoTitle>
          <p>intro</p>
          <span />
        </Styles.IntroInfoTitle>
        <Styles.IntroInfo>
          <h4>
            WE ARE AN <br /> INDEPENDENT <br /> STRATEGY,
            <br /> DESIGN, AND <br />
            COMMUNICATIONS <br /> COMPANY.
          </h4>
        </Styles.IntroInfo>
      </div>
      <Styles.IntroImg>
        <img src={introImg} alt='img' width='500' />
      </Styles.IntroImg>
    </Styles.IntroSectionContainer>
  );
};
