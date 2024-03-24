import styled from 'styled-components';
import bgImage from '../../../assets/res1.png';

export const DashboardContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0;

  img {
    width: 250px;
  }
`;
