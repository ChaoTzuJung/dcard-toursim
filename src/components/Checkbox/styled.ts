import styled from 'styled-components';

export const S = {
    Wapper: styled.div`
        width: 100%;
        height: auto;
        padding: 0 16px 24px 16px;
    `,
    Item: styled.div`
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 8px;

        & label {
            color: var(--black);
            font-size: 16px;
            font-family: 'Roboto-Regular';
            line-height: 1;
        }
    `,
    CheckboxButtonLabel: styled.div`
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        background: white;
        border: 1px solid #bebebe;
    `,
    CheckboxButton: styled.input`
        opacity: 0;
        z-index: 1;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        margin: 0;
        margin-right: 6px;
        cursor: pointer;

        &:checked + .checkbox {
            background: var(--lightPurple);
            border: 1px solid var(--lightPurple);

            &:after {
                content: "";
                position: absolute;
                left: 9px;
                top: 5px;
                display: block;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg) translate(-6px, 0px);
            }
        }
    `,
};