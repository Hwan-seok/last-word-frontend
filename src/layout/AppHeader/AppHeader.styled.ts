import styled from '@emotion/styled';
import theme from '~/src/layout/theme';

export const StyledAppHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2vw 5vw;
  border-bottom: 1px solid ${theme.color.border};
  justify-content: space-between;
  align-items: center;

  .header-logo {
    cursor: pointer;
    img {
      height: 50px;
      width: 100px;
      object-fit: contain;
      @media screen and (min-width: 1025px) {
        width: auto;
        object-fit: cover;
      }
    }
  }

  .selected {
    background-color: #8aa557;
    padding: 10px;
    border-radius: 40%;
  }

  .header-item-left {
    margin-left: 60%;
    cursor: pointer;
  }
`;
// export const AppHeaderBody = styled('div')`
//   width: 100vw;
//   height: 10vh;

//   z-index: 99;
//   top: 0;
//   left: 0;
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   background-color: white;
// `;

// export const HeaderInnerDiv = styled.div`
//   width: 100%;
//   left: 0;

//   color: ${theme.color.black};
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   ${theme.marginHorizontalCss};
//   align-items: center;

//   .header-item {
//     cursor: pointer;
//     display: none;
//     @media screen and (min-width: 1025px) {
//       display: flex;
//       flex-direction: row;
//       align-items: center;

//       .svg {
//         width: 15px;

//         margin-right: 10px;
//       }
//     }
//   }

//   .header-item-left {
//     cursor: pointer;

//     display: none;
//     @media screen and (min-width: 1025px) {
//       margin-left: 50vw;
//       display: block;
//     }
//   }
