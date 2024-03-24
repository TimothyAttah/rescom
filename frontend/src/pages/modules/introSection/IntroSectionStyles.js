import styled from 'styled-components';
import { theme } from '../../../themes';

export const IntroSectionContainer = styled.section`
  background-color: ${theme.color.bgColor};
  display: flex;
  justify-content: space-between;
  height: 600px;
  position: relative;
`;

export const IntroInfo = styled.div`
  max-width: 600px;
  width: 100%;
  margin-top: 180px;
  margin-left: 100px;

  h4 {
    text-transform: uppercase;
    color: #fff;
    font-size: 45px;
  }
`;

export const IntroInfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 150px;
  margin-left: 100px;
  position: absolute;
  top: 0px;

  p {
    text-transform: uppercase;
    color: #fff;
  }

  span {
    display: inline-block;
    width: 750px;
    height: 1px;
    background-color: #cbc7c7;
    z-index: 100;
  }
`;

export const IntroImg = styled.div`
  max-width: 800px;
  width: 100%;
  height: inherit;

  img {
    width: 100%;
    border-top-left-radius: 80%;
    height: inherit;
  }
`;
