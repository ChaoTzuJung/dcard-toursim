import styled from 'styled-components';

export const S = {
    Wapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin: 24px 0;

        & .description {
            font-family: 'Roboto-Regular';
            font-size: 24px;
            color: var(--black);

            & span {
                line-height: 28px;
                font-family: 'Roboto-Bold';
                color: var(--lightPurple);
            }
        }
    `,
    TagsWrapper: styled.div`
        display: flex;
        align-items: center;
    `
}
