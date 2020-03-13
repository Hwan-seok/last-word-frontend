import { css } from '@emotion/core';

const GlobalStyle = css`
  html {
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE and Edge */
    -ms-overflow-style: none;
    font-size: 16px;

    @font-face {
      font-family: 'NotoSansKR', sans-serif;
      src: url('/static/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf')
        format('opentype');
    }
  }

  body {
    margin: 0px;
    overflow-x: hidden;
    font-family: 'NotoSansKR', sans-serif;
  }
`;

export default GlobalStyle;
