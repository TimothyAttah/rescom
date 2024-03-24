import React from 'react';
import * as Styles from './DashboardStyles';
import logo from '../../../assets/res.jpg';

export const Dashboard = () => {
  return (
    <Styles.DashboardContainer>
      <Styles.Logo>
        <img src={logo} alt='logo' />
      </Styles.Logo>
    </Styles.DashboardContainer>
  );
};
