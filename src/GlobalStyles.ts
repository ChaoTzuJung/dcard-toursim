
import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
    html {
        --red: #ff0000;
        --purple: #7828B4;
        --lightPurple: #9013FE;
        --darkWhite: #F2F2F2;
        --lightGrey: #EBEBEB;
        --grey: #D7D7D7;
        --darkGrey: #9B9B9B;
        --white: #FFFFFF;
        --black: #000000;
        --title: 36px;
        --bigTitle: 24px;
        --subtitle: 20px
        --paragraph: 16px;
        --remark: 16px;
        --placeholder: 20px;
        --label: 16px;
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