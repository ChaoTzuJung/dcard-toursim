
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
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1120px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        border: .5px solid red;
    }
    body {
        font-family: 'Optima-ExtraBlack', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height:2;
        background-color: #F2F2F2;
    }
    a {
        text-decoration: none;
    }
    a:hover {

    }
    button {
        font-family: 'Optima-ExtraBlack', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default StyledGlobal;