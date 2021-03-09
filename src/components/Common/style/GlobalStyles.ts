
import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
    @font-face {
        font-family: 'Optima-ExtraBlack';
        src: url('/static/Optima-ExtraBlack.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    html {
        --red: #ff0000;
        --white: #FFFFFF;
        --darkWhite: #F2F2F2;
        --black: #000000;
        --darkGrey: #9B9B9B;
        --grey: #D7D7D7;
        --lightGrey: #EBEBEB;
        --purple: #7828B4;
        --lightPurple: #9013FE;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        --maxWidth: 1206px;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Optima-ExtraBlack', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        background-color: #F2F2F2;
    }
    a {
        text-decoration: none;
    }
    a:hover {

    }
    button {
        font-family: 'Optima-ExtraBlack', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    },
`;

export default StyledGlobal;