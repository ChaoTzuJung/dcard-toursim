import styled from 'styled-components';

export const S = {
    Header: styled.header`
        width: 100%;
        height: 92px;
        background: #7828B4;
        padding: 24px 40px;
    `,
    Navigation: styled.nav`
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        max-width: var(--maxWidth);
        margin: auto;

        & .bar {
            margin-right: 136px;
            & a {
                line-height: 44px;
                color: var(--white);
            }
        }

        & .sub-bar {
            & .search-bar {
                display: flex;
                align-items: center;
                width: 388px;
                border-bottom: 1px solid white;
            }
        }
    `,
    Logo: styled.span`
        display: inline-block;
        font-family: 'Optima-ExtraBlack';
        font-size: 36px;
        padding-left: 40px;
    `,
    Input: styled.input`
        width: 100%;
        padding: 5px 20px;
        border: none;
        cursor: pointer;
        background: transparent;
        outline: none;
        border-radius: 0;
        color: var(--white);
        font-size: 20px;
        font-family: 'Roboto-Italic';

        &::placeholder {
            color: rgba(255,255,255,0.50);
        }
    `
}
