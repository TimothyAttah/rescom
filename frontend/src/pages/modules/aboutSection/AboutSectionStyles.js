import styled from 'styled-components';
import aboutImg from '../../../assets/res2.png';

export const AboutSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 30px;
`;

export const AboutImg = styled.div`
  width: 100%;
  height: 343px;
  background: url(${aboutImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AboutContentWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const AboutTitleBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: end;
`;

export const AboutTitle = styled.div`
  background-color: #c91830fa;
  max-width: 250px;
  width: 100%;
  height: 280px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  line-height: 50px;
  z-index: 200;
  margin-top: -100px;
`;
export const AboutText = styled.div`
  width: 800px;

  p {
    margin-top: 15px;
    line-height: 24px;
    font-size: 20px;
  }
`;
export const AboutDetailsInfoContainer = styled.div``;
