import styled from 'styled-components';

export const S = {
    Wrapper: styled.div`
        margin-right: 8px;
    `,
    TagContainer: styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        height: 35px;
        border: 1px solid var(--lightPurple);
        color: var(--lightPurple);
        border-radius: 100px;
        font-family: 'Roboto-Italic';
        font-size: 16px;
        padding: 8px 16px;

        &:hover {
            color: var(--white);
            background: var(--lightPurple);

            & > div {
                color: var(--white);
                border: 1px solid var(--white);

                &::before {
                    display: block;
                    background: var(--white);
                }

                &::after {
                    display: block;
                    background: var(--white);
                }
            }
        }
    `,
    Close: styled.div`
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid var(--lightPurple);
        color: var(--lightPurple);
        margin-left: 8px;
        cursor: pointer;

        &::before {
            content: '';
            display: block;
            width: 1px;
            height: 10px;
            background: var(--lightPurple);
            transform: rotate(-45deg) translate(3.5px, 4.5px);
        }

        &::after {
            content: '';
            display: block;
            width: 1px;
            height: 10px;
            background: var(--lightPurple);
            transform: rotate(45deg) translate(-2.5px,-10.5px);
        }
    `
}