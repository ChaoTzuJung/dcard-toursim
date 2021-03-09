import styled, { css } from 'styled-components';

export const S = {
    Wapper: styled.div`
        & .row {
            display: flex;
            justify-content: space-between;
            position: relative;

            & .label {
                color: var(--black);
                font-size: 16px;
                text-align: right;
                font-family: 'Roboto-Regular';
            }
        }

        & .position {
            position: absolute;
            top: calc(100% + 8px);
            z-index: 2;
        }
    `,
    Input: styled.input`
        width: 169px;
        height: 40px;
        background: var(--white);
        padding: 10px;
        text-align: center;
        color: var(--black);
        font-size: 16px;
        font-family: 'Roboto-Regular';
        text-align: start;
        border: none;
        border-radius: 2px;
        outline: none;
        cursor: pointer;
    `
}