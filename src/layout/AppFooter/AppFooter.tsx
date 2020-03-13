import React from 'react';
import styled from '@emotion/styled';
import theme from '../theme';

const StyledFooter = styled.div`
  width: 100vw;
  background-color: #fff;
  position: absolute;
  left: 0;
  border-top: 1px solid ${theme.color.border};

  .wrapper {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    margin-top: 20px;
    color: grey;
    font-size: 0.5rem;
    @media screen and (min-width: 1025px) {
      font-size: 1rem;
    }
  }
`;
const AppFooter: React.FC = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div>
          <b>Creator</b> : 강환석
        </div>
        <div>
          <b>Phone Number</b> : 010 6430 6352
        </div>
        <div>
          <b>Email</b> : tttkhs96@gmail.com
        </div>
        <div>COPYRIGHT 2020, Hwan Seok Kang, All rights reserved. </div>
      </div>
    </StyledFooter>
  );
};

export default AppFooter;
