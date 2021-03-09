import styled from 'styled-components';

export const S = {
    Filter: styled.div`
        width: 300px;
        background: #EBEBEB;
        padding: 0 40px;

        & .position {
            margin-bottom: 8px;
        }

        & .transformLabel {
            
            & .label {
                transform: translateX(100%);
            }
            
        }
    `,
    Title: styled.div`
        font-family: 'Roboto-Bold';
        font-size: 20px;
        color: var(--black);
        padding: 24px 0;
    `
}